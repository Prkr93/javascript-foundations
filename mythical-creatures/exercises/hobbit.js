class Hobbit {
  constructor(hobbit) {
    this.name = hobbit.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
    this.celebrateBirthday = function(){
      this.age += 1;
      if(this.age >= 33){
        this.adult = true;
      }
      if(this.age >= 101){
        this.old = true;
      }
    }
    this.getRing = function(){
      if(this.name === "Frodo"){
        this.hasRing = true;
        return "Here is the ring!";
      }
      if(this.name === "Samwise"){
        return "You can't have it!";
      }
    }
  }
}

module.exports = Hobbit;
