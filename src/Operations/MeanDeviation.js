const Mean = require('./Mean');
function MeanDeviation (valueList) {//Will look up what this really means later
    let distance;
    let holder = 0;
    let divisor = valueList.length;
    let mean = Mean(valueList)
    valueList.forEach( number => function() {//inline function that computes the distance between the mean and
        distance = Math.abs(mean - number); //each value in the list
        holder += distance;//holder adds each new distance
    })

    return holder/divisor; //sum of all distances divided by the number of elements in the list
}

module.exports = MeanDeviation;