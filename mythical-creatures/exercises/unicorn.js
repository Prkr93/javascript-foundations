class Unicorn {
  constructor(name, color = "white") {
    this.name = name;
    this.color = color;
    this.isWhite = function(){
      if(this.color === "white"){ return true; }
      else{ return false; }
    }
    this.says = function(string){
      return `**;* ${string} *;**`;
    };
  }
}

module.exports = Unicorn;
