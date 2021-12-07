class Dragon {
  constructor(name, rider, hungry = true, timesEaten = 0) {
    this.name = name;
    this.rider = rider;
    this.hungry = hungry;
    this.timesEaten = timesEaten;
    this.greet = function(){
      return `Hi, ${rider}!`;
    };
    this.eat = function(){
      timesEaten += 1;
      if(timesEaten === 3){
        this.hungry = false;
      }
    }
  }
}

module.exports = Dragon;
