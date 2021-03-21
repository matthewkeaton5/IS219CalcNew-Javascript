var seedrandom = require('seedrandom');
class RandomNumbers {

}
class MinMaxNumber extends RandomNumbers{
    //added
    constructor(min, max) {
        super();

        this.min = min;
        this.max = max;



        this.randomNumber = Math.random() * (max-min) + min ;
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
        var rng = seedrandom(seed);
        console.log(rng())
        this.response = rng() * (max-min) + min;
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

    constructor(seed, min, max) {
        super();
        this.seed = seed;
        this.list = [];
        this.min = min;
        this.max = max;
        var rng = seedrandom(seed);
        const loopCount = Math.round(rng() * (max-min) + min)
        console.log(loopCount)
        for(var i = 0; i < loopCount ; i++){
            this.list.push(Math.random() * (max-min) + min  );
        }
    }
    GetResults(){
        console.log(this.list);
        return this.list;
    }
    GetRounded(){
        this.roundedlist = [];
        for(var i = 0; i < this.list.length; i++){
            console.log(this.list[i])
            this.roundedlist.push(Math.round(this.list[i]));
        }
        console.log(this.roundedlist);
        return this.roundedlist;
    }
    ListSelection(){
        const listLength = this.roundedlist.length;
        let test = Math.round(Math.random() * (listLength - 1));
        console.log(this.roundedlist[test]);
        return this.roundedlist[test];
    }
    RandomListSelection(){
        const listLength = this.roundedlist.length;
        let test = Math.round(Math.random() * (listLength));
        this.newList = [];
        for(var i = 0; i < test; i++){
            this.newList.push(this.roundedlist[i]);
        }
        console.log(this.newList)
        return this.newList
    }
    RandomSeededSelection(){
        var rng = seedrandom(this.seed);
        let test = Math.round(rng() * (this.roundedlist.length));
        this.seededList = [];
        for(var i = 0; i < test; i++){
            this.seededList[i] = this.roundedlist[i];
        }
        console.log(this.seededList);
        return this.seededList;
    }
}

module.exports = {
    RandomNumbers : RandomNumbers,
    MinMaxNumber : MinMaxNumber,
    SeededNumbers : SeededNumbers,
    RandomList : RandomList

}