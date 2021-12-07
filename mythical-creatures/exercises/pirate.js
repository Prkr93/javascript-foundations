class Pirate {
  constructor(name, job = "scallywag"){
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.booty = 0;
    this.shipsRobbed = 0;
    this.robShip = function(){
      if(this.shipsRobbed >= 5){
        this.shipsRobbed += 1;
        this.cursed = true;
        return "ARG! I've been cursed!";
      }
      this.booty += 100;
      this.shipsRobbed += 1;
      return "YAARRR!";
    }
    this.liftCurse = function(){
      if(this.booty >= 300 && this.cursed === true){
        this.booty -= 300;
        this.cursed = false;
        return "Your curse has been lifted!";
      }
      else if(this.cursed === false){
        return "You don't need to lift a curse!";
      } else{
        return "You don't have enough booty! Go get a real job!";
      }
    }
  }
}

module.exports = Pirate;
