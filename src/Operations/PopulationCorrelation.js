import {sampleCorrelation} from "simple-statistics";

/**
 * @return {number}
 */
function PopulationCorrelation(valueList1, valueList2) {
    return sampleCorrelation(valueList1, valueList2);
}

module.exports = PopulationCorrelation;