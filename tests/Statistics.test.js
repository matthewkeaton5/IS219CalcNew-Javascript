const Statistics = require('../src/models/Statistics');
const ZScore = require('../src/Operations/ZScore');
const SampleCorrelation = require('../src/Operations/SampleCorrelation');
const PopulationCorrelation = require('../src/Operations/PopulationCorrelation');

test('Test  Sample Correlation calculation', () => {
    //I need to test the get results function
    let op = SampleCorrelation;
    let statistics = new Statistics([2, 4, 4, 4, 5, 5, 7, 9], [2, 4, 4, 4, 5, 5, 7, 9], op);
    expect(statistics.GetResults()).toBe(0.9999999999999998);
});

test('Test  Population Correlation calculation', () => {
    //I need to test the get results function
    let op = PopulationCorrelation;
    let statistics = new Statistics([2, 4, 4, 4, 5, 5, 7, 9], [2, 4, 4, 4, 5, 5, 7, 9], op);
    expect(statistics.GetResults()).toBe(0.9999999999999998);
});

test('Test  Population Correlation calculation', () => {
    //I need to test the get results function
    let op = ZScore;
    let zScore = new ZScore([2, 4, 4, 4, 5, 5, 7, 9], 2, op);
    expect(zScore.GetResults()).toBe(-1.5);
});