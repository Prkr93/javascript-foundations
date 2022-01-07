class Guard {
  constructor(name, socialClass, rank) {
    this.name = name;
    this.socialClass = socialClass;
    this.rank = rank || 'newbie';
    this.timesBattled = 0;
    this.arrowToTheKnee = false;
  }
  toBattle() {
    this.timesBattled += 1;
    if (this.timesBattled >= 3) {
      this.rank = 'veteran';
      this.arrowToTheKnee = true;
    }
  }
}

module.exports = Guard;
