var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var newStatue = new Statue(victim.name);
    this.statues.push(newStatue);
    if ( this.statues.length > 3 ) {
      var curedPerson = new Person(this.statues[0].name);
      curedPerson.mood = 'relieved';
      this.statues.shift();
      return curedPerson;
    }
  }
}

module.exports = Medusa;
