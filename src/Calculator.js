const Calculation = require('./models/Calculation')
const RandomNumbers = require('./models/RandomNumbers')
const Sum = require('./Operations/Sum');
const listSum = require('./Operations/listSum');
const Difference = require('./Operations/Difference');
const Product = require('./Operations/Product');
const Quotient = require('./Operations/Quotient');
const Square = require('./Operations/Square');
const SquareRoot = require('./Operations/SquareRoot');

class Calculator {
    static Calculations = []
    //Static methods can me called without instantiating and are good for actions
    static Sum(a,b) {
        //this is how you create a new object and this is good for data and actions
        let calculation = new Calculation.SimpleCalculation(a,b,Sum);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static listSum(ListOfValues) {
        let calculation = new Calculation.ListCalculations(ListOfValues, listSum)
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Difference(a,b) {
        //this is how you create a new object and this is good for data and actions
        let calculation = new Calculation.SimpleCalculation(a,b,Difference);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Product(a,b) {
        //this is how you create a new object and this is good for data and actions
        let calculation = new Calculation.SimpleCalculation(a,b,Product);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Quotient(a,b) {
        //this is how you create a new object and this is good for data and actions
        let calculation = new Calculation.SimpleCalculation(a,b,Quotient);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static Square(a) {
        //this is how you create a new object and this is good for data and actions
        let calculation = new Calculation.SingleVarCalculations(a,Square);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static SquareRoot(a) {
        //this is how you create a new object and this is good for data and actions
        let calculation = new Calculation.SingleVarCalculations(a,SquareRoot);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }
    static MinMaxNumber(min,max){
        let randomNumbers = new RandomNumbers.MinMaxNumber(min,max);
        Calculator.Calculations.push(randomNumbers);
        return randomNumbers.GetResults();
    }

    /*
    definition of descriptive statistics static functions

     */
}
module.exports = Calculator;
