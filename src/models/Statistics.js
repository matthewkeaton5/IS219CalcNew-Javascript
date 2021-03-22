const Calculation = require('./Calculation');
//require calculation.js to extend previously defined list of values class
class Statistics extends Calculation.ListCalculations{

    constructor(ListOfValues, op){//Constructor definition, design pattern specific to JavaScript
        super(ListOfValues, op);//defining which constructor values are passed through inheritance
    }

}