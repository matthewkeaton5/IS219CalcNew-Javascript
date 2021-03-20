function Median(sortedList){
    let median = 0;
    let index1 = 0;
    let index2 = 0;

    let listLength = sortedList.length;
    if(listLength%2 === 0){
        index1 = listLength/2;
        index2 = index1+1;
        median = (sortedList[index1] + sortedList[index2])/2
    }
    else {
        index1 = Math.ceil(listLength/2)
        median = sortedList[index]
    }
    return median;
}
module.exports = Median;