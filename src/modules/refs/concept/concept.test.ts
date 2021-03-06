import 'jest';
import {getConcepts, IConcept, getConceptAsync, getMethodologyData} from '.';
import * as prettyFormat from 'pretty-format';

describe('Github concept data tests', () => {
    it('should get data from concept.csv of a module on github', async () => {
        const conceptsData: IConcept[] = await getConcepts('global-picture');
        const conceptsDataB: IConcept[] = await getConcepts('spotlight-uganda');
        expect(conceptsData.length).toBeGreaterThan(2);
        expect(prettyFormat(conceptsDataB)).toMatchSnapshot();
    }, 50000);
    it('should get data from concept.csv of an Id in a module Async', async () => {
        const conceptA: IConcept = await getConceptAsync('country-profile', 'data_series.domestic');
        const conceptB: IConcept =
            await getConceptAsync('spotlight-uganda', 'spotlight_on_uganda_2017.uganda_poverty_headcount');
        expect(prettyFormat({conceptA, conceptB})).toMatchSnapshot();
    }, 50000);
    it('should get methodology data', async () => {
        const spotlightUganda = await getMethodologyData('spotlight-uganda');
        const spotlightKenya = await getMethodologyData('spotlight-kenya');
        expect(prettyFormat({spotlightUganda, spotlightKenya})).toMatchSnapshot();
    }, 50000);
});
