class RandomNumbers {

    constructor(min, max) {
        max = Math.ceil(max)
        min = Math.floor(min)
        return Math.floor(Math.random() * (max - min) + min);
        }
}