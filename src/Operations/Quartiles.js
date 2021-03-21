import Median from './Median';
function Quartiles(valueList) {
    let sorted = valueList.sort(); //sorting the values
    let q2 = Median(sorted);//q2 = median
    let listSize = sorted.length;
    let q1 = listSize/4 //defining quartile 1
    let q3 = q1*3; //defining quartile 3
    let value1; //defining a variable to store the value at the index defined by the division above
    let value2;

    if (Number.isInteger(q1)){ //if the division returns a whole number
        value1 = (sorted[q1] + sorted[q1 + 1])/2;// add the values of the index location returned from the division and add the value of the next index location
    } else {//if its not a whole number ~ a float
        q1 = Math.ceil(q1); //ceil is applied to make the float into a whole number for the index location of the value
        value1 = sorted[q1];//the value is accessed and stored in the value1 variable
    }
    if(Number.isInteger(q3)){//checks for a whole number
        value2 = (sorted[q3] + sorted[q3 + 1])/2;//accesses the values at the index location returned from the division, adds the next value in the list and divides by two
    } else {
        q3 = Math.ceil(q3);// q3 variable receives the ceiling value of the previous value
        value2 = sorted[q3]; //value2 receives the value at the index location q3
    }

    return {'quartile1': value1, 'quartile2': q2, 'quartile3': value2};
}

module.exports = Quartiles;