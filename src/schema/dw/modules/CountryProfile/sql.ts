export default {
    population: 'SELECT value FROM fact.population_total WHERE di_id = ${id} AND year = ${start_year}',
    gdp: 'SELECT value FROM fact.gdp_usd_2015 WHERE di_id = ${id} AND year = ${start_year}',
    // tslint:disable-next-line:max-line-length
    domesticResourcesOverTime: 'SELECT * FROM data_series.domestic WHERE di_id =${id} AND l1 = ${l1} AND year >= ${start_year} AND year <= ${end_year}',
    // tslint:disable-next-line:max-line-length
    // revenueAndGrantsOverTime: 'SELECT value FROM data_series.domestic WHERE di_id =${id} AND l1 = \'total-revenue-and-grants\' AND year >= ${start_year} AND year <= ${end_year}',
     // tslint:disable-next-line:max-line-length
    // domesticExpenditureOverTime: 'SELECT value FROM data_series.domestic WHERE di_id =${id} AND l1 = \'total-expenditure\' AND year >= ${start_year} AND year <= ${end_year}',
    // tslint:disable-next-line:max-line-length
    spendingAllocation: 'SELECT l2, sum(value) as value FROM data_series.domestic WHERE di_id = ${id} AND budget_type = \'actual\' AND year = 2015 AND l1 = \'total-expenditure\' Group By l2',
    // tslint:disable-next-line:max-line-length
    domesticRevenue: 'SELECT value FROM data_series.domestic WHERE di_id =${id} AND budget_type = \'actual\' AND year = ${start_year} AND l1 = \'total-revenue-and-grants\' AND l2 = \'revenue\' AND l3 is NULL AND l4 is NULL',
    totalDomesticRevenueAndGrants: 'SELECT value FROM data_series.domestic WHERE di_id =${id} AND budget_type = \'actual\' AND year = ${start_year} AND l1 = \'total-revenue-and-grants\' AND l2 is NULL AND l3 is NULL AND l4 is NULL',
    // tslint:disable-next-line:max-line-length
    grants: 'SELECT value FROM data_series.domestic WHERE di_id =${id} AND budget_type = \'actual\' AND year = ${start_year} AND l1 = \'total-revenue-and-grants\' AND l2 = \'grants\' AND l3 is NULL AND l4 is NULL',
    // tslint:disable-next-line:max-line-length
    internationalResources: 'SELECT value FROM data_series.intl_flows_recipients WHERE di_id = ${id} AND year = ${start_year} AND direction =\'in\'',
    governmentSpendPerPerson: 'SELECT value FROM data_series.govt_spend_pc WHERE di_id = ${id} AND year = ${start_year}',
    poorestPeople: 'SELECT value FROM data_series.poorest_20_percent WHERE di_id = ${id} AND year = ${start_year}',
    // tslint:disable-next-line:max-line-length
    averageIncomerPerPerson: 'SELECT * FROM fact.gni_pc_usd_2015 WHERE di_id = ${id} AND year >= ${start_year} AND year <= ${end_year}',
    incomeDistTrend: 'SELECT value_bottom_20pc, value_2nd_quintile, value_3rd_quintile, value_4th_quintile, value_5th_quintile FROM fact.income_share_by_quintile WHERE di_id = ${id} AND year >= ${start_year} ORDER BY year',
    // tslint:disable-next-line:max-line-length
    populationDistribution: 'SELECT * FROM fact.population_rural_urban WHERE di_id = ${id} AND year >= ${start_year} AND year <= ${end_year}',
    populationPerAgeBand: 'SELECT * FROM fact.population_by_age WHERE di_id = ${id} AND year >= ${start_year} AND year <= ${end_year}',
    // tslint:disable-next-line:max-line-length
    poverty190Trend: 'SELECT di_id, value_2 as value, year FROM data_series.poverty_190 WHERE di_id = ${id} AND year >= ${start_year} AND year <= ${end_year}',
    depthOfExtremePoverty: 'SELECT value FROM data_series.depth_of_extreme_poverty_190 WHERE di_id = ${id} AND year = ${start_year}',
    GNI: 'SELECT value FROM fact.gni_usd_2015 WHERE di_id = ${id} AND year = ${start_year}',
    ODANetIn: 'SELECT value FROM fact.in_oda_net_2015 WHERE di_id = ${id} AND year = ${start_year}', // computed
    ODANetOut: 'SELECT value FROM fact.oda_percent_gni WHERE di_id = ${id} AND year = ${start_year}',
    // tslint:disable-next-line:max-line-length
    resourcesDonorsMix: 'SELECT * FROM data_series.intl_flows_donors WHERE di_id = ${id} AND year = ${start_year} AND direction = \'out\' AND value > 0',
    // tslint:disable-next-line:max-line-length
    resourcesRecipientMix: 'SELECT * FROM data_series.intl_flows_recipients WHERE di_id = ${id} AND direction = \'in\' AND year = ${start_year} AND value > 0',
    resourcesDonors: 'SELECT * FROM data_series.intl_flows_donors WHERE di_id = ${id} AND year >= ${start_year} AND year <= ${end_year} AND value > 0',
    // tslint:disable-next-line:max-line-length
    resourcesRecipient: 'SELECT * FROM data_series.intl_flows_recipients WHERE di_id = ${id}  AND year >= ${start_year} AND year <= ${end_year} AND value > 0',
    // tslint:disable-next-line:max-line-length
    govenmentFinance: 'SELECT value FROM data_series.domestic WHERE di_id =${id} AND year >= ${start_year} AND year <= ${end_year}',
};
