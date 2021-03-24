window.alert = jest.fn();
class Calculation {
    error(){
        let errorText = "Change calculation type"
        alert(errorText);
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }

}

class SimpleCalculation extends Calculation {
    //the constructor is the first method called after instantiation and usually sets the properties of the object
    constructor(a, b, op) {
        super();
        //"this" is the internal reference of the object to access its internal methods and properities
        if (allNum(a) && allNum(b) && divZero(b)) {
            this.a = a;
            this.b = b;
            this.op = op;
        }


    }

    //getresults is a method so that it can return back the results of the calculation
    GetResults() {
        return this.op(this.a,this.b);
    }
}
class ListCalculations extends Calculation{
    constructor(ListOfValues, op){
        super();
        if(listCheck(ListOfValues)){
            this.ListOfValues = ListOfValues;
            this.op = op;
        }

    }
    GetResults() {
        return this.op(this.ListOfValues);
    }
}
class SingleVarCalculations extends Calculation{
    constructor(a,op) {
        super();
        if(allNum(a)){
            this.a = a;
            this.op = op;
        }
    }
    GetResults() {
        return this.op(this.a);
    }
}

function allNum(numbers)
{
    var letters = /[^A-Za-z]+$/;
    var test = String(numbers).match(letters)
    if(test == [])
    {
        alert('Please input numeric characters only');
        return false;
    }
    else
    {
        return true;
    }
}

function divZero(b){
    if(b == 0){
        window.alert("Cannot Add an Empty List")
        return false;
    }else{
        return true;
    }
}
function listCheck(ListOfValues){
    if(ListOfValues != null){
        return true;
    }else{
        alert("Cannot Add an Empty List")
        return false;
    }
}

module.exports = {
    Calculation: Calculation,
    SimpleCalculation : SimpleCalculation,
    ListCalculations : ListCalculations,
    SingleVarCalculations : SingleVarCalculations,
};