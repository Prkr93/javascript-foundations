var assert = require('chai').assert;
var Dragonborn = require('../exercises/dragonborn');
var Dragon = require('../exercises/dragon');
var Guard = require('../exercises/guard');
var Person = require('../exercises/person');

describe('Dragonborn', function() {

  it('should be a function', function() {
    assert.isFunction(Dragonborn);
  });

  it('should instatiate the hero, Dragonborn', function() {
    var dragonborn = new Dragonborn({name:'Yyeurgen'});

    assert.isObject(dragonborn);
  });

  it('should have a name', function() {
    var yyeurgen = new Dragonborn({name:'Yyeurgen'});

    assert.equal(yyeurgen.name, 'Yyeurgen');
  });

  it('should have a race, and be Nord by default', function() {
    var yyeurgen = new Dragonborn({name:'Yyeurgen'});
    var arnie = new Dragonborn({name:'Arnie', race:'Breton'});

    assert.equal(yyeurgen.race, 'Nord');
    assert.equal(arnie.race, 'Breton');
  });

  it('should be able to kill a dragon', function() {
    var yyeurgen = new Dragonborn({});
    var dragon = new Dragon();

    assert.equal(dragon.alive, true);
    yyeurgen.killDragon(dragon);
    assert.equal(dragon.alive, false);
    assert.deepEqual(yyeurgen.killDragon(dragon), 'The Dragonborn saved us all!!')
  });

  it('should be able to interact with people, given their social status', function() {
    var margo = new Person('Margo', 'merchant');

    assert.instanceOf(margo, Person);
    assert.equal(margo.socialClass, 'merchant');
  });

  it('should be able to pickpocket', function() {
    var yyeurgen = new Dragonborn({});
    var victim = new Person('Margo', 'merchant');

    assert.equal(yyeurgen.gold, 0);
    yyeurgen.pickPocket(victim);

    assert.equal(yyeurgen.gold, 100);
  });


  it('should have a different outcome for different social classes', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var hanashan = new Dragonborn({name: `Hana'Shan`, race: 'Khajiit'});
    var emma = new Person('Emma', 'peasant');
    var bernie = new Person('Bernadette', 'noble');
    var margo = new Person('Margo', 'scholar');
    var mertle = new Person('Mertle', 'merchant');
    //var theo = new Guard('Theodore', 'guard');
    //var shadow = new Person('Shadow', 'underworld');

    yyeurgen.pickPocket(emma);
    assert.equal(yyeurgen.gold, 25);
    assert.deepEqual(yyeurgen.pickPocket(emma), 'Nobody suspects a thing!');
    yyeurgen.pickPocket(margo);
    assert.equal(yyeurgen.gold, 250);
    assert.equal(yyeurgen.health, 80);
    assert.deepEqual(yyeurgen.pickPocket(margo), 'OW! At least I got some scrolls to sell!');
    yyeurgen.pickPocket(mertle);
    assert.equal(yyeurgen.gold, 550);
    assert.deepEqual(yyeurgen.pickPocket(mertle), `Maybe I should stick to my day job...`);
    hanashan.pickPocket(bernie);
    assert.equal(hanashan.gold, 350);
    assert.deepEqual(hanashan.pickPocket(bernie), `I'll either get rich or die trying!`);

    /*assert.equal(yyeurgen.health, );
    /*assert.equal(yyeurgen.gold, );
    /*assert.equal(yyeurgen.health, );*/
  });

  it('should gain varying amounts of suspicion after pickpocket', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var emma = new Person('Emma', 'peasant');
    var bernie = new Person('Bernadette', 'noble');
    var margo = new Person('Margo', 'scholar');
    var mertle = new Person('Mertle', 'merchant');

    assert.equal(yyeurgen.suspicion, 0);
    yyeurgen.pickPocket(emma);
    assert.equal(yyeurgen.suspicion, 10);
    yyeurgen.pickPocket(bernie);
    assert.equal(yyeurgen.suspicion, 50);
    yyeurgen.pickPocket(margo);
    assert.equal(yyeurgen.suspicion, 75);
    yyeurgen.pickPocket(mertle);
    assert.equal(yyeurgen.suspicion, 100);
  });

  it('should be unimprisoned by default', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    assert.equal(yyeurgen.imprisoned, false);
  });

  it('should result in imprisonment if suspicion gets too high', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var bernie = new Person('Bernadette', 'noble');

    yyeurgen.pickPocket(bernie);
    yyeurgen.pickPocket(bernie);
    yyeurgen.pickPocket(bernie);

    assert.equal(yyeurgen.imprisoned, true);
  });


  it('should result in imprisonment if pickpocketing a guard', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var theo = new Guard('Theodore', 'guard');

    yyeurgen.pickPocket(theo);
    assert.equal(yyeurgen.imprisoned, true);
  });

  it('should be able to be released for a certain amount of gold', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var bernie = new Person('Bernadette', 'noble');
    var theo = new Guard('Theodore', 'guard');
    var margo = new Person('Margo', 'scholar');

    assert.deepEqual(yyeurgen.bribeGuard(), `You have no reason to bribe a guard!`);

    yyeurgen.pickPocket(bernie);
    yyeurgen.pickPocket(bernie);
    yyeurgen.pickPocket(margo);
    assert.equal(yyeurgen.gold, 900);
    assert.equal(yyeurgen.imprisoned, true);
    assert.deepEqual(yyeurgen.bribeGuard(), `You don't have enough money!`);
    yyeurgen.pickPocket(theo);
    assert.deepEqual(yyeurgen.pickPocket(theo), `Guess I'll be here a while...`);
    yyeurgen.bribeGuard();
    assert.equal(yyeurgen.imprisoned, false);
    assert.equal(yyeurgen.gold, 0);
  });

  it('should be able to pickpocket only guard in prison', function() {
    var yyeurgen = new Dragonborn({name: 'Yyeurgen'});
    var bernie = new Person('Bernadette', 'noble');
    var theo = new Guard('Theodore', 'guard');
    var margo = new Person('Margo', 'scholar');

    yyeurgen.pickPocket(theo);
    assert.deepEqual(yyeurgen.pickPocket(margo), `Margo isn't here right now.`);
    assert.deepEqual(yyeurgen.pickPocket(bernie), `Bernadette isn't here right now.`);
    assert.deepEqual(yyeurgen.pickPocket(theo), `Guess I'll be here a while...`);
  });

  it.skip('should be able to gain gold/lose health during that pickpocket', function() {

  });

  it.skip('should be alive by default, and die if health ever gets too low', function() {

  });

  it.skip('should be able to join a guild', function() {

  });

  it.skip('should only be able to join a guild once', function() {

  });

  it.skip('should be thrown out of guild if victim is also in guild', function() {

  });



  //should only be arrested if suspicion is high
});
