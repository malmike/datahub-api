// This file is auto generated by the gqlToTs.ts module
// tslint:disable
// graphql typescript definitions

declare namespace DH {
  interface IGraphQLResponseRoot {
    data?: IQuery;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    message: string;            // Required for all errors
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  /*
    description: 
  */
  interface IQuery {
    methodology: Array<IMethodology> | null;
    countries: Array<IEntity> | null;
    districtPageData: Array<IPage> | null;
    countryProfilePageData: Array<IPage> | null;
    odaDonorBubbleChartPageData: Array<IPage> | null;
    globalPicturePageData: Array<IPage> | null;
    povertyBubbleChartPageData: Array<IPage> | null;
    unbundlingOdaPageData: Array<IPage> | null;
    unbundlingOOfPageData: Array<IPage> | null;
    whereThePoorPageData: Array<IPage> | null;
    districts: Array<IDistrict> | null;
    globalPictureThemes: Array<ITheme> | null;
    spotlightThemes: Array<ITheme> | null;
    bubbleChartOda: Array<IBubbleChartOda> | null;
    bubbleChartPoverty: Array<IBubbleChartPoverty> | null;
    bubbleChartOptions: IBubbleChartOptions | null;
    overviewTab: IOverviewTab | null;
    povertyTab: IPovertyTab | null;
    populationTab: IPopulationTab | null;
    governmentFinance: IGovernmentFinance | null;
    internationalResources: IInternationalResources | null;
    flows: IFlows | null;
    singleResource: ISingleResourceData | null;
    mapData: IMapData | null;
    overviewTabRegional: IOverviewTabRegional | null;
    povertyTabRegional: IPovertyTabRegional | null;
    populationTabRegional: IPopulationTabRegional | null;
    educationTabRegional: IEducationTabRegional | null;
    healthTabRegional: IHealthTabRegional | null;
    localGovernmentFinance: ILocalGovernmentFinance | null;
    unbundlingAidDataTotal: IUnbundlingAidTotal | null;
    unbundlingAidData: Array<IAidUnit> | null;
    unbundlingSelectionData: IUnbundlingAidSelections | null;
  }

  /*
    description: 
  */
  interface IMethodology {
    name: string | null;
    description: string | null;
    methodology: string | null;
    uom: string | null;
    source: ISource | null;
  }

  /*
    description: 
  */
  interface ISource {
    name: string | null;
    link: string | null;
  }

  /*
    description: 
  */
  interface IEntity {
    id: string | null;
    name: string | null;
    slug: string | null;
    has_domestic_data: string | null;
    countryType: string | null;
  }

  /*
    description: 
  */
  interface IPage {
    id: string | null;
    title: string | null;
    narrative: string | null;
    donor_title: string | null;
  }

  /*
    description: 
  */
  interface IDistrict {
    id: string | null;
    name: string | null;
  }

  /*
    description: 
  */
  interface ITheme {
    id: string | null;
    name: string | null;
    default_indicator: string | null;
    indicators: Array<IThemeIndicator> | null;
  }

  /*
    description: 
  */
  interface IThemeIndicator {
    heading: string | null;
    source: string | null;
    tooltip: string | null;
    id: string | null;
    name: string | null;
  }

  /*
    description: 
  */
  interface IBubbleChartOda {
    year: number | null;
    id: string | null;
    name: string | null;
    income_group: string | null;
    region: string | null;
    uid: string | null;
    value: number | null;
    revenuePerPerson: number | null;
    numberInExtremePoverty: number | null;
  }

  /*
    description: 
  */
  interface IBubbleChartPoverty {
    year: number | null;
    value: number | null;
    id: string | null;
    name: string | null;
    income_group: string | null;
    region: string | null;
    uid: string | null;
    revenuePerPerson: number | null;
    percentageInExtremePoverty: number | null;
  }

  /*
    description: 
  */
  interface IBubbleChartOptions {
    indicators: Array<IIdNamePair> | null;
    incomeGroups: Array<IIdNamePair> | null;
    regions: Array<IRegion> | null;
  }

  /*
    description: 
  */
  interface IIdNamePair {
    id: string | null;
    name: string | null;
  }

  /*
    description: 
  */
  interface IRegion {
    name: string | null;
    id: string | null;
    color: string | null;
  }

  /*
    description: 
  */
  interface IOverviewTab {
    poorestPeople: IIndicatorValueWithToolTip | null;
    population: IIndicatorValueWithToolTip | null;
    domesticResources: IIndicatorValueWithToolTip | null;
    internationalResources: IIndicatorValueWithToolTip | null;
    governmentSpendPerPerson: IIndicatorValueWithToolTip | null;
    averageIncomerPerPerson: IIndicatorDataWithToolTip | null;
    incomeDistTrend: IQuintileDataWithToolTip | null;
  }

  /*
    description: 
  */
  interface IIndicatorValueWithToolTip {
    value: string | null;
    toolTip: IToolTip | null;
  }

  /*
    description: 
  */
  interface IToolTip {
    source: string | null;
    heading: string | null;
  }

  /*
    description: 
  */
  interface IIndicatorDataWithToolTip {
    data: Array<IIndicatorData> | null;
    toolTip: IToolTip | null;
  }

  /*
    description: 
  */
  interface IIndicatorData {
    year: number | null;
    value: number | null;
    id: string | null;
    name: string | null;
    uid: string | null;
  }

  /*
    description: 
  */
  interface IQuintileDataWithToolTip {
    data: Array<IQuintile> | null;
    toolTip: IToolTip | null;
  }

  /*
    description: 
  */
  interface IQuintile {
    value: number | null;
    quintileName: string | null;
    uid: string | null;
    color: string | null;
  }

  /*
    description: 
  */
  interface IPovertyTab {
    poverty190Trend: IIndicatorDataWithToolTip | null;
    depthOfExtremePoverty: IIndicatorValueWithToolTip | null;
    incomeDistTrend: IQuintileDataWithToolTip | null;
  }

  /*
    description: 
  */
  interface IPopulationTab {
    population: IIndicatorValueWithToolTip | null;
    populationDistribution: IPopulationDistributionWithToolTip | null;
    populationPerAgeBand: IPopulationPerAgeBandWithToolTip | null;
  }

  /*
    description: 
  */
  interface IPopulationDistributionWithToolTip {
    data: Array<IPopulationDistribution> | null;
    toolTip: IToolTip | null;
  }

  /*
    description: 
  */
  interface IPopulationDistribution {
    group: string | null;
    value: number | null;
    year: number | null;
  }

  /*
    description: 
  */
  interface IPopulationPerAgeBandWithToolTip {
    data: Array<IPopulationPerAgeBand> | null;
    toolTip: IToolTip | null;
  }

  /*
    description: 
  */
  interface IPopulationPerAgeBand {
    band: string | null;
    value: number | null;
    year: number | null;
    uid: string | null;
  }

  /*
    description: 
  */
  interface IGovernmentFinance {
    startYear: number | null;
    totalRevenue: IIndicatorValueWithToolTip | null;
    grantsAsPcOfRevenue: IIndicatorValueWithToolTip | null;
    spendingAllocation: ISpendingAllocationWithToolTip | null;
    currencyCode: string | null;
    currencyUSD: string | null;
    expenditure: Array<IDomestic> | null;
    revenueAndGrants: Array<IDomestic> | null;
    finance: Array<IDomestic> | null;
  }

  /*
    description: 
  */
  interface ISpendingAllocationWithToolTip {
    data: Array<ISpendingAllocation> | null;
    toolTip: IToolTip | null;
  }

  /*
    description: 
  */
  interface ISpendingAllocation {
    value: number | null;
    name: string | null;
    color: string | null;
    uid: string | null;
  }

  /*
    description: 
  */
  interface IDomestic {
    budget_type: string | null;
    levels: Array<string> | null;
    year: number | null;
    value: number | null;
    value_ncu: number | null;
    uid: string | null;
    color: string | null;
  }

  /*
    description: 
  */
  interface IInternationalResources {
    startYear: number | null;
    GNI: IIndicatorValueWithToolTip | null;
    netODAOfGNIIn: IIndicatorValueWithToolTip | null;
    netODAOfGNIOut: IIndicatorValueWithToolTip | null;
    resourceflowsOverTime: IFlowsOverTimeWithToolTip | null;
    resourcesOverTime: IResourceDataWithToolTip | null;
    mixOfResources: IResourceDataWithToolTip | null;
  }

  /*
    description: 
  */
  interface IFlowsOverTimeWithToolTip {
    data: Array<IIndicatorDataColored> | null;
    toolTip: IToolTip | null;
  }

  /*
    description: 
  */
  interface IIndicatorDataColored {
    year: number | null;
    value: number | null;
    id: string | null;
    name: string | null;
    color: string | null;
    uid: string | null;
  }

  /*
    description: 
  */
  interface IResourceDataWithToolTip {
    data: Array<IResourceData> | null;
    toolTip: IToolTip | null;
  }

  /*
    description: 
  */
  interface IResourceData {
    year: number;
    value: number;
    flow_name: string;
    flow_id: string;
    position: number | null;
    short_name: string | null;
    flow_category: string | null;
    flow_type: string | null;
    direction: string | null;
    color: string | null;
    uid: string | null;
  }

  /*
    description: 
  */
  interface IFlows {
    inflows: Array<IFlow> | null;
    outflows: Array<IFlow> | null;
  }

  /*
    description: 
  */
  interface IFlow {
    name: string | null;
    id: string | null;
    selections: Array<IFlowSelection> | null;
  }

  /*
    description: 
  */
  interface IFlowSelection {
    name: string | null;
    id: string | null;
    unbundle: boolean | null;
  }

  /*
    description: 
  */
  interface ISingleResourceData {
    resources: Array<IIndicatorData> | null;
    color: string | null;
  }

  /*
    description: 
  */
  interface IMapData {
    map: Array<IMapUnit> | null;
    name: string | null;
    uom_display: string | null;
    uom: string | null;
    map_style: string | null;
    source: string | null;
    start_year: number | null;
    end_year: number | null;
    default_year: number | null;
    description: string | null;
    theme: string | null;
    heading: string | null;
    country: string | null;
    id: string | null;
    legend: Array<ILegendField> | null;
  }

  /*
    description: 
  */
  interface IMapUnit {
    id: string | null;
    slug: string | null;
    name: string | null;
    year: number | null;
    color: string | null;
    value: number | null;
    detail: string | null;
    uid: string | null;
  }

  /*
    description: 
  */
  interface ILegendField {
    label: string | null;
    color: string | null;
    backgroundColor: string | null;
  }

  /*
    description: 
  */
  interface IOverviewTabRegional {
    poorestPeople: IIndicatorValueWithToolTip | null;
    regionalResources: IIndicatorValueWithToolTip | null;
    regionalResourcesBreakdown: Array<IIndicatorDataColoredWithToolTip> | null;
    localGovernmentSpendPerPerson: IIndicatorValueWithToolTip | null;
  }

  /*
    description: 
  */
  interface IIndicatorDataColoredWithToolTip {
    data: IIndicatorDataColored | null;
    toolTip: IToolTip | null;
  }

  /*
    description: 
  */
  interface IPovertyTabRegional {
    poorestPeople: IIndicatorValueWithToolTip | null;
    lifeExpectancy: IIndicatorValueWithToolTip | null;
    stdOfLiving: IIndicatorValueWithToolTip | null;
  }

  /*
    description: 
  */
  interface IPopulationTabRegional {
    totalPopulation: IIndicatorValueWithToolTip | null;
    populationDensity: IIndicatorValueWithToolTip | null;
    populationDistribution: IPopulationDistributionWithToolTip | null;
    averageDependencyRatio: IIndicatorValueWithToolTip | null;
    allAverageDependencyRatio: IIndicatorValueWithToolTip | null;
  }

  /*
    description: 
  */
  interface IEducationTabRegional {
    pupilTeacherRatioGovtSchl: IIndicatorValueWithToolTip | null;
    pupilTeacherRatioOtherSchl: IIndicatorValueWithToolTip | null;
    studentsPassRate: IIndicatorValueWithToolTip | null;
    studentsPassDistrictRank: IIndicatorValueWithToolTip | null;
    primaryEducationfunding: IIndicatorValueWithToolTip | null;
  }

  /*
    description: 
  */
  interface IHealthTabRegional {
    districtPerformance: IIndicatorValueWithToolTip | null;
    treatmeantOfTb: IIndicatorValueWithToolTip | null;
    districtHealthRank: IIndicatorValueWithToolTip | null;
    healthCareFunding: IIndicatorValueWithToolTip | null;
  }

  /*
    description: 
  */
  interface ILocalGovernmentFinance {
    startYear: number | null;
    currencyUSD: string | null;
    currencyCode: string | null;
    revenueAndGrants: Array<IDomestic> | null;
    expenditure: Array<IDomestic> | null;
  }

  /*
    description: 
  */
  interface IUnbundlingAidToTalQuery {
    aidType: string;
    year?: number | null;
  }

  /*
    description: 
  */
  interface IUnbundlingAidTotal {
    year: number | null;
    total: string | null;
  }

  /*
    description: 
  */
  interface IUnbundlingAidQuery {
    aidType: string;
    year: number;
    groupBy: string;
    to_di_id?: string | null;
    from_di_id?: string | null;
    sector?: string | null;
    bundle?: string | null;
    channel?: string | null;
  }

  /*
    description: 
  */
  interface IAidUnit {
    value: number | null;
    name: string | null;
    color: string | null;
    id: string | null;
    year: number | null;
    uid: string | null;
  }

  /*
    description: 
  */
  interface IUnbundlingAidSelections {
    to: Array<IIdNamePair> | null;
    from: Array<IIdNamePair> | null;
    channels: Array<IIdNamePair> | null;
    sectors: Array<IIdNamePair> | null;
    bundles: Array<IIdNamePair> | null;
    years: Array<number> | null;
  }

  /*
    description: 
  */
  interface IBubbleChartData {
    year: number | null;
    id: string | null;
    name: string | null;
    income_group: string | null;
    region: string | null;
    value: number | null;
    uid: string | null;
  }
}

// tslint:enable
