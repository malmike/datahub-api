import Maps from '.';
import * as prettyFormat from 'pretty-format';
import * as d3 from 'd3';
import db from '../../db';

describe('Maps module tests', () => {
    const maps = new Maps(db);

    it('should return only DAC countries from the data', async () => {
        const dacCountries = ['Spain', 'England'];
        const data = [
            {value: 2000, id: 'sp', name: 'Spain', year: 2000},
            {value: 2000, id: 'uk', name: 'Engaland', year: 2000},
            {value: 2000, id: 'pl', name: 'Poland', year: 2000},
            ];
        const onlyDacCountries = Maps.DACOnlyData(dacCountries, data);
        expect(onlyDacCountries.length).toBe(2);
    }, 10000);
    it('should know if an indicator is for a country spotlight or for global picture', async () => {
        const country = await Maps.getCountry('spotlight_on_uganda.uganda_poverty_headcount');
        const global = await Maps.getCountry('data_series.poorest_20_percent');
        expect(country).toBe('uganda');
        expect(global).toBe('global');
    }, 2000);
    it('should return spotlight on uganda indicator data', async () => {
        const linearColored =
            await maps.getMapData({id: 'spotlight_on_uganda.uganda_poverty_headcount', DACOnly: false});
        expect(prettyFormat({linearColored})).toMatchSnapshot();
    }, 20000);
    it('should return global indicators data ', async () => {
        const linearColored = await maps.getMapData({id: 'data_series.poorest_20_percent', DACOnly: false});
        const categorical = await maps.getMapData({id: 'data_series.fragile_states', DACOnly: false});
        const dataRevolution = await maps.getMapData({id: 'data_series.latest_census', DACOnly: false});
        const largestIntlFinance = await maps.getMapData({id: 'data_series.largest_intl_flow', DACOnly: false});
        expect(prettyFormat({linearColored, categorical, dataRevolution, largestIntlFinance})).toMatchSnapshot();
    }, 20000);
    it('should return categorical value mappings for indicators', async () => {
        const fragileSates = await Maps.getCategoricalMapping('data_series.fragile_states');
        const dataRevolution = await Maps.getCategoricalMapping('data_series.agricultural_census', 'data-revolution');
        expect(prettyFormat({fragileSates, dataRevolution})).toMatchSnapshot();
    }, 5000);
    it ('should return color values from a scale', async () => {
        const ramp = {high: '#8f1b13', low: '#f8c1b2', mid: '#e8443a'};
        const scaleA = Maps.colorScale('1, 5, 10, 20', ramp);
        const scaleB = Maps.colorScale('500,120,50,20,5', ramp);
        const results = {
            A: {0.23: scaleA(0.23), 5: scaleA(5), 15: scaleA(15), 100: scaleA(100)},
            B: { 530: scaleB(530), 110: scaleB(110),
                50: scaleB(50), 22: scaleB(22), 2: scaleB(2)},
        };
        expect(prettyFormat(results)).toMatchSnapshot();
    });
    it('should create color ramp', async () => {
        const ramp = {high: '#8f1b13', low: '#f8c1b2', mid: '#e8443a'};
        const colorRamp = await Maps.getColorRamp('red');
        expect(prettyFormat(colorRamp)).toMatchSnapshot();
    }, 20000);
    afterAll(() => {
       db.$config.pgp.end();
    });
});
