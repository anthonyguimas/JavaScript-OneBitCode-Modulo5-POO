const Character = require("./Character.js");

module.exports = class Mage extends Character {
  constructor(name, lifePts, attackPts, defensePts, magicPts) {
    super(name, lifePts, attackPts, defensePts);
    this.magicPts = magicPts;
  }

  attack(targetCharacter) {
    targetCharacter.lifePts -=
      this.atackPts + this.magicPts - targetCharacter.defensePts;
  }

  heal(targetCharacter) {
    targetCharacter.lifePts += this.magicPts * 2;
  }
};
