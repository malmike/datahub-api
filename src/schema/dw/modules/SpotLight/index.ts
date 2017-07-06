import {IDatabase} from 'pg-promise';
import {IExtensions} from '../../db';
import {formatNumbers} from '../../../../utils';
import sql from './sql';
import {getConceptAsync, IConcept} from '../../../cms/modules/concept';
import * as R from 'ramda';
import {isError} from '../../../../lib/isType';
import {getIndicatorData, RECIPIENT, DONOR, IGetIndicatorArgs, isDonor, IProcessedSimple,
        IRAWPopulationAgeBand, normalizeKeyName, IRAW, IRAWQuintile, getTableNameFromSql,
        indicatorDataProcessingSimple, getTotal, IRAWPopulationGroup, IRAWDomestic,
        domesticDataProcessing} from '../utils';

interface ISpotlightArgs {
    id: string;
    country: string;
}

interface IRegionalResources {
    regionalResources: string;
    regionalResourcesBreakdown: DH.IIndicatorDataColored[];
}

export default class SpotLight {
    private db: IDatabase<IExtensions> & IExtensions;
    private defaultArgs;

    constructor(db: any) {
        this.db = db;
        this.defaultArgs = {db: this.db, conceptType: 'spotlight'};
    }
    // id eg uganda or kenya
    public async getOverViewTabRegional(opts: ISpotlightArgs): Promise<DH.IOverViewTabRegional> {
        try {
            const regionalResources = await this.getRegionalResources(opts);
            const [poorestPeople, localGovernmentSpendPerPerson] = await
            this.getIndicatorsGeneric(opts, [sql.poorestPeople, sql.localGovernmentSpendPerPerson]);
            return {
            ...regionalResources,
            poorestPeople,
            localGovernmentSpendPerPerson
           };
        } catch (error) {
           console.error(error);
           throw error;
        }
    }
    public async getPopulationTabRegional(opts: ISpotlightArgs): Promise<DH.IPopulationTabRegional> {
        try {
            const [totalPopulation, populationDensity, averageDependencyRatio, allAverageDependencyRatio]
             = await this.getIndicatorsGeneric(opts,
                [sql.totalPopulation, sql.populationDensity,
                sql.averageDependencyRatio, sql.allAverageDependencyRatio]);
            const populationDistribution = await this.getPopulationDistribution(opts);
            return {
            totalPopulation,
            populationDensity,
            populationDistribution,
            averageDependencyRatio,
            allAverageDependencyRatio
           };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    public async getPovertyTabRegional(opts: ISpotlightArgs): Promise<DH.IPovertyTabRegional> {
        try {
            const [poorestPeople, lifeExpectancy, stdOfLiving] =
            await this.getIndicatorsGeneric(opts, [sql.poorestPeople, sql.lifeExpectancy, sql.stdOfLiving]);
            return {
            poorestPeople,
            lifeExpectancy,
            stdOfLiving
        };
       } catch (error) {
           console.error(error);
           throw error;
       }
    }
    public async getEducationTabRegional(opts: ISpotlightArgs): Promise<DH.IEducationTabRegional> {
         try {
             const [pupilTeacherRatioGovtSchl, pupilTeacherRatioOtherSchl, studentsPass, primaryEducationfunding] =
            await this.getIndicatorsGeneric(opts,
                [sql.pupilTeacherRatioGovtSchl, sql.pupilTeacherRatioOtherSchl,
                sql.studentsPass, sql.primaryEducationfunding]);
             return {
            pupilTeacherRatioGovtSchl,
            pupilTeacherRatioOtherSchl,
            studentsPass,
            primaryEducationfunding
          };
       } catch (error) {
           console.error(error);
           throw error;
       }
    }
    public async getHealthTabRegional(opts): Promise<DH.IHealthTabRegional> {
        try {
            const [districtPerformance, treatmeantOfTb, healthCareFunding] =
            await this.getIndicatorsGeneric(opts,
                [sql.districtHealthPerformance, sql.treatmeantOfTb, sql.healthCareFunding]);
            return {
            districtPerformance,
            treatmeantOfTb,
            healthCareFunding
        };
       } catch (error) {
           console.error(error);
           throw error;
       }
    }

    public async getLocalGovernmentFinance(id): Promise<DH.ILocalGovernmentFinance> {
         try {
             const indicatorArgs: IGetIndicatorArgs[] = ['total-expenditure', 'total-revenue-and-grants']
            .map(level => ({
                ...this.defaultArgs,
                l1: level,
                query: sql.localGovernmentFinance,
                id
            }));
             const resourcesRaw: IRAWDomestic[][]  =
            await Promise.all(indicatorArgs.map((args) => getIndicatorData<IRAWDomestic>(args)));
             const resources: DH.IDomestic[][] = resourcesRaw.map(domesticDataProcessing);
             return {
            revenueAndGrants: resources[1],
            expenditure: resources[0]
           };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    private async getRegionalResources(opts): Promise<IRegionalResources> {
        try  {
            const indicatorArgs = [sql.lGFResources, sql.crResources, sql.dResources]
            .map(query => ({query, ...this.defaultArgs, ...opts}));
            const resourcesRaw: IRAW[][] = await Promise.all(indicatorArgs.map(args => getIndicatorData<IRAW>(args)));
            const resourcesSum = resourcesRaw.reduce((sum, data) => Number(data[0].value) + sum, 0);
            const resourceWithConceptPromises: Array<Promise<DH.IIndicatorDataColored>> = indicatorArgs
            .map(async (query, index) => {
                const conceptId = getTableNameFromSql(query);
                if (isError(conceptId)) throw conceptId;
                const concept = await getConceptAsync(`spotlight-${opts.country}`, conceptId);
                const resource: IRAW = resourcesRaw[index][0];
                return {...concept, value: Number(resource.value), year: concept.startYear};
            });
            const resources: DH.IIndicatorDataColored[] = await Promise.all(resourceWithConceptPromises);
            return {
            regionalResources: formatNumbers(resourcesSum, 1),
            regionalResourcesBreakdown: resources
            };
         } catch (error) {
             throw error;
         }
    }
    private async getIndicatorsGeneric(opts: ISpotlightArgs, sqlList: string[])
        : Promise<string[]>  {
        try {
            const indicatorArgs: IGetIndicatorArgs[] =
            sqlList.map(query => ({...this.defaultArgs, query, ...opts}));
            const indicatorRaw: IRAW[][] = await Promise.all(indicatorArgs.map(args => getIndicatorData<IRAW>(args)));
            return indicatorRaw.map(data => formatNumbers(data[0].value, 1));
      } catch (error) {
          throw error;
      }
    }
    private async getPopulationDistribution(opts): Promise<DH.IPopulationDistribution[]> {
        try {
            const indicatorArgs: IGetIndicatorArgs = {
            ...this.defaultArgs,
            query: sql.populationDistribution,
            ...opts
            };
            const data: IRAWPopulationGroup[] = await getIndicatorData<IRAWPopulationGroup>(indicatorArgs);
            return data.reduce((acc: DH.IPopulationDistribution[], row) => {
            const rural = {group: 'rural', value: Number(row.value_rural), year: Number(row.year) };
            const urban = {group: 'urban', value: Number(row.value_urban),  year: Number(row.year) };
            return [...acc, rural, urban];
         }, []);
       } catch (error) {
           throw error;
       }
    }
}
