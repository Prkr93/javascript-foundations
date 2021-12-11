const Direwolf = require('./direwolf');

class Stark {
  constructor(stark) {
    this.name = stark.name;
    if(!stark.area){this.location = "Winterfell";}
    else{this.location = stark.area;}
    this.safe = false;
  }
  sayHouseWords() {
    if(this.safe){
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }
  callDirewolf(name, area) {
    var newDirewolf = new Direwolf(name, this.location);
    newDirewolf.starksToProtect.push(this);
    this.safe = true;
    return newDirewolf;
  }
}

module.exports = Stark;
