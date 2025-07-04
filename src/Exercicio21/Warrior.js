const Character = require("./Character.js");

module.exports = class Warrior extends Character {
  constructor(name, lifePts, attackPts, defensePts, shieldPts) {
    super(name, lifePts, attackPts, defensePts);
    this.shieldPts = shieldPts;
    this.stance = "attacking";
  }

  attack(targetCharacter) {
    if (this.stance === "attacking") {
      super.atack(targetCharacter);
    } else {
      console.error("character not attacking");
    }
  }

  switchStance() {
    if (this.stance === "attacking") {
      this.stance = "defending";
      this.defensePts += this.shieldPts;
    } else {
      this.stance = "attacking";
      this.defensePts -= this.shieldPts;
    }
  }
};
