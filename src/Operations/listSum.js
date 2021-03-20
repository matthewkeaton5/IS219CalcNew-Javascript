function listSum (ListOfValues) {
    var total = 0;
    for (var i in ListOfValues) {
        total += ListOfValues[i]
    }
    return total;
}
module.exports = listSum;