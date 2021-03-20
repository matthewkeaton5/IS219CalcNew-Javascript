const Calculation = require('../src/models/Calculation');
const RandomNumbers = require('../src/models/RandomNumbers')
const Sum = require('../src/Operations/Sum');
const listSum = require('../src/Operations/listSum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');
const Square = require('../src/Operations/Square');
const SquareRoot = require('../src/Operations/SquareRoot');
test('Test of Calculation Instantiation', () => {
    //I need to test the instantiation of the calculation object
    let op = Sum
    let calculation = new Calculation.SimpleCalculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});
test('Test of RandomNumbers Instantiation', () => {
    //I need to test the instantiation of the calculation object
    let randomNumbers = new RandomNumbers.MinMaxNumber(1,2);
    expect(randomNumbers.min).toBe(1);
    expect(randomNumbers.max).toBe(2);
});
test('Test Get results for Sum function', () => {
    //I need to test the get results function

    let op = Sum;
    let calculation = new Calculation.SimpleCalculation(1,2, op);
    expect(calculation.GetResults()).toBe(3);
});
test('Test Get results for listSum function', () => {
    //I need to test the get results function
    let op = listSum;
    let calculation = new Calculation.ListCalculations([1,2,3], op);
    expect(calculation.GetResults()).toBe(6);
});
test('Test Get results for Difference function', () => {
    //I need to test the get results function
    let op = Difference;
    let calculation = new Calculation.SimpleCalculation(1,2,op);
    expect(calculation.GetResults()).toBe(-1);
});
test('Test Get results for Product function', () => {
    //I need to test the get results function
    let op = Product;
    var calculation = new Calculation.SimpleCalculation(1,2,op);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for Quotient function', () => {
    //I need to test the get results function
    let op = Quotient;
    let calculation = new Calculation.SimpleCalculation(1,2,op);
    expect(calculation.GetResults()).toBe(.5);
});
test('Test Get results for Square function', () => {
    //I need to test the get results function
    let op = Square;
    let calculation = new Calculation.SingleVarCalculations(2,op);
    expect(calculation.GetResults()).toBe(4);
});
test('Test Get results for SquareRoot function', () => {
    //I need to test the get results function
    let op = SquareRoot;
    let calculation = new Calculation.SingleVarCalculations(4,op);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for MinMaxNumbers function, Integers', () => {
    //I need to test the get results function
    let randomNumbers = new RandomNumbers.MinMaxNumber(1,2);

    expect(isInt(randomNumbers.GetRounded())).toBeTruthy();
});
test('Test Get results for MinMaxNumbers function, Floats', () => {
    //I need to test the get results function
    let randomNumbers = new RandomNumbers.MinMaxNumber(1,2);

    expect(isFloat(randomNumbers.GetResults())).toBeTruthy();
});
test('Test Get results for SeededNumbers function, Floats', () => {
    //I need to test the get results function
    let randomNumbers = new RandomNumbers.SeededNumbers("Hello",2,4);

    expect(isFloat(randomNumbers.GetResults())).toBeTruthy();
});
test('Test Get results for SeededNumbers function, Integers', () => {
    //I need to test the get results function
    let randomNumbers = new RandomNumbers.SeededNumbers("Hello",2,4);

    expect(isInt(randomNumbers.GetRounded())).toBeTruthy();
});
test('Test Get results for SeededNumbers function', () => {
    //I need to test the get results function
    let randomNumbers = new RandomNumbers.RandomList("Hello",5,9);

    expect(isFloat(randomNumbers.GetResults()[0])).toBeTruthy();
});
test('Test Get results for SeededNumbers function', () => {
    //I need to test the get results function
    let randomNumbers = new RandomNumbers.RandomList("Hello",5,9);

    expect(isInt(randomNumbers.GetRounded()[0])).toBeTruthy();
    //Pulls a random number from the generated list above
    expect(isInt(randomNumbers.ListSelection())).toBeTruthy();
    //Pulls a random amount of numbers from the list
    expect(isList(randomNumbers.RandomListSelection())).toBeTruthy();
});

function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
function isList(n){
    return Array.isArray(n)
}