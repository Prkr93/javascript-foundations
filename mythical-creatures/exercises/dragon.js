class Dragon {
  constructor(name, rider, hungry = true) {
    this.name = name;
    this.rider = rider;
    this.hungry = hungry;
    this.timesEaten = 0;
  }
  greet(){
    return `Hi, ${this.rider}!`;
  }
  eat(){
    this.timesEaten += 1;
    if(this.timesEaten === 3){
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
