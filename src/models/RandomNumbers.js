class RandomNumbers {

}
class MinMaxNumber extends RandomNumbers{
    constructor(min, max) {
        super();

        this.min = min;
        this.max = max;

        let test = Math.random() * (max-min) + min

        this.randomNumber = test;
    }
    GetResults(){
        return this.randomNumber;
    }
}

module.exports = {
    RandomNumbers : RandomNumbers,
    MinMaxNumber : MinMaxNumber,

}