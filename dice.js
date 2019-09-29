class Dice{

  constructor(sides){
    this.sides = sides;
    this.roll = function(sides){
      return Math.floor(Math.random() * this.sides) + 1;
    }
    this.probability = function (sides, weights){
        var num = Math.random(), s = 0, lastIndex = weights.length - 1;

        for (var i = 0; i < lastIndex; ++i) {
          s += weights[i];
          if (num < s) {
              return results[i];
            }
          }

          return results[lastIndex];
        }

}
}

var dice6 = new Dice(6, [1, 1, 1, 1, 1, 1]);

var greeting = dice6.probability();
console.log(greeting);
