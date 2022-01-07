class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust += 1;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(flowers) {
    flowers.forEach(flower => {
      this.clothes.dresses.push(flower);
    });
  }
  becomeProvoked() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(infant) {
    this.humanWards.push(infant);
    infant.disposition = 'Malicious';
    if (this.humanWards.length === 3) {
      this.disposition = 'Good natured';
    }
    return infant;
  }
}

module.exports = Fairy;
