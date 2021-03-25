import {mean} from "simple-statistics";

/**
 * @return {number}
 */
function Mean (valueList) {//function that calculates the mean of a list of numerical data
    return mean(valueList);
}
module.exports = Mean;