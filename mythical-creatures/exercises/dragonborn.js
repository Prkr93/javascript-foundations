class Dragonborn {
  constructor({name, race, guilds}) {
    this.name = name || "Yyeurgen";
    this.race = race || "Nord";
    this.guilds = guilds || [];
    this.gold = 0;
    this.health = 100;
    this.suspicion = 0;
    this.imprisoned = false;
  }
  killDragon(dragon) {
    dragon.alive = false;
    return "The Dragonborn saved us all!!";
  }
  pickPocket(target) {
    if (this.scoutTarget(target)){
      return `${target.name} isn't here right now.`;
    }


    if (target.socialClass === 'merchant') {
      //lots of gold, takes some damage and raises suspicion
      this.gold += 100;
      this.suspicion += 25;
      this.riskImprisonment();
      return 'Maybe I should stick to my day job...';
    } else if (target.socialClass === 'peasant') {
      this.gold += 25;
      this.suspicion += 10;
      this.riskImprisonment();
      return 'Nobody suspects a thing!';
    } else if (target.socialClass === 'noble') {
      this.gold += 350;
      this.suspicion += 40;
      this.riskImprisonment();
      return `I'll either get rich or die trying!`;
    } else if (target.socialClass === 'scholar') {
      this.gold += 200;
      this.health -= 20;
      this.suspicion += 25;
      this.riskImprisonment();
      return 'OW! At least I got some scrolls to sell!';
    } else if (target.socialClass === 'underworld') {
      //kicked out of guild //random chance to die
      this.riskImprisonment();
    } else if (target.socialClass === 'guard') {
      this.gold += 50;
      this.riskImprisonment(target);
      return `Guess I'll be here a while...`;
    }
  }
  joinGuild(guild) {
    if (!this.guilds.includes(guild)) {
      this.guilds.push(guild);
    }
  }
  riskImprisonment(target = 'null') {
    if (this.suspicion >= 100 || target.socialClass === 'guard') {
      this.imprisoned = true;
    }
  }
  bribeGuard() {
    if (this.imprisoned === false) {
      return 'You have no reason to bribe a guard!';
    } else if (this.gold < 1000) {
      return `You don't have enough money!`;
    } else {
      this.imprisoned = false;
      this.gold -= 1000;
    }
  }
  scoutTarget(target) {
    if (target.socialClass !== 'guard' && this.imprisoned === true) {
      return true;
    }
  }
}

module.exports = Dragonborn;
