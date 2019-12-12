class Dice{

  constructor(sides){
    this.sides = sides;
    this.roll = function(sides){
      console.log(Math.floor(Math.random() * this.sides) + 1);
    }

    this.probabilities = function () {
      sides > 0;
      var sum = 0;
      if (arguments.length === 2){
        this.probabilities = arguments[1];
        let i = 0;
        for (; i < probabilities.length; i++){
          if (probabilities[i] < 1){
            throw "Negative probabilities not allowed";
          }
          if (isNaN(probabilities[i]) === true){
            throw "Only integers values allowed";
          }

          sum = sum + arguments[i];

    }
  }

  roll(){
    if (this.sides > 0){
      console.log(this.roll);
    }
  }

}

var dice6 = new Dice(6);
dice6.roll();
