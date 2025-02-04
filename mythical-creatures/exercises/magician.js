class Magician {
  constructor(magician) {
    this.name = `The Great ${magician.name}`;
    this.assistant = magician.assistant;
    this.confidencePercentage = 10;
    this.favoriteAccessory = magician.clothing;
    if(magician.clothing === undefined){
      this.favoriteAccessory = "top hat";
    }
  }

  performIncantation (saying) {
    return `${saying.toUpperCase()}!`;
  }

  performTrick () {
    this.confidencePercentage += 10;
    if(this.favoriteAccessory === "top hat"){
      return "PULL RABBIT FROM TOP HAT";
    } else{
      return "PULL DOVE FROM SLEEVE";
    }
  }

  performShowStopper () {
    if(this.confidencePercentage >= 100 && this.assistant === true) {
      return "WOW! The magician totally just sawed that person in half!";
    }
    else {
      return "Oh no, this trick is not ready!";
    } 
  }
}

module.exports = Magician;
