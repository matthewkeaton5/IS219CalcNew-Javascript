const Calculation = require('./Calculation');
//require calculation.js to extend previously defined list of values class
class Statistics extends Calculation.ListCalculations{

    constructor(ListOfValues, listOfValues2, op){//Constructor definition, design pattern specific to JavaScript
        super(ListOfValues, op);//defining which constructor values are passed through inheritance
        this.listOfvalues2 = listOfValues2;
    }
}
module.exports = Statistics;