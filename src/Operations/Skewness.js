import {sampleSkewness} from "simple-statistics";

function Skewness(listOfValues){
    //function that calculates skewness
    return sampleSkewness(listOfValues);
}

module.exports = Skewness;