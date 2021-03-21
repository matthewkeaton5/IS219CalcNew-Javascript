import {sampleCorrelation} from "simple-statistics";
function PopulationCorrelation(valueList1, valueList2) {
    return sampleCorrelation(valueList1, valueList2);
}

module.exports = PopulationCorrelation;