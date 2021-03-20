function ZScore (value, mean, std) {//function that calculates the mean of a list of numerical data
    // zscore equation taken from https://www.statisticshowto.com/probability-and-statistics/z-score/
    //value represents the x value and the point in the graph you want to examine
    // mean = mean and std = standard deviation
    z = (value - mean)/std
    return z;
}
module.exports = ZScore;