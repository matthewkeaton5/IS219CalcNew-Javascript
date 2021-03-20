var seedrandom = require('seedrandom');
class RandomNumbers {

}
class MinMaxNumber extends RandomNumbers{
    //added
    constructor(min, max) {
        super();

        this.min = min;
        this.max = max;

        let test = Math.random() * (max-min) + min

        this.randomNumber = test;
    }
    GetResults(){
        console.log(this.randomNumber)
        return this.randomNumber;
    }
    GetRounded(){
        console.log(Math.round(this.randomNumber))
        return Math.round(this.randomNumber)
    }
}
class SeededNumbers extends RandomNumbers {
    constructor(seed, min, max) {
        super();
        this.seed = seed;
        this.min = min;
        this.max = max;
        var test = seedrandom(seed);
        console.log(test)
        this.response = test * (max-min) + min;
    }
    GetResults(){
        console.log(this.response);
        return this.response;
    }
    GetRounded(){
        console.log(Math.round(this.response));
        return Math.round(this.response);
    }
}
class RandomList extends RandomNumbers{

}


module.exports = {
    RandomNumbers : RandomNumbers,
    MinMaxNumber : MinMaxNumber,
    SeededNumbers : SeededNumbers,
    RandomList : RandomList

}