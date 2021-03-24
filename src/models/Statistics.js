const Calculation = require('./Calculation');
//require calculation.js to extend previously defined list of values class
class Statistics extends Calculation.ListCalculations{

    constructor(ListOfValues, ListOfValues2, op){//Constructor definition, design pattern specific to JavaScript
        super(ListOfValues, op);//defining which constructor values are passed through inheritance
        this.ListOfValues2 = ListOfValues2;
    }

    GetResults() {
        return this.op(this.ListOfValues, this.ListOfValues2);
    }
}

class ZScore extends Calculation.ListCalculations{

    constructor(ListOfValues, value, op){//Constructor definition, design pattern specific to JavaScript
        super(ListOfValues, op);//defining which constructor values are passed through inheritance
        this.value = value;
    }

    GetResults() {
        return this.op(this.value, this.ListOfValues);
    }
}
module.exports = {
    Statistics : Statistics,
    ZScore : ZScore
};