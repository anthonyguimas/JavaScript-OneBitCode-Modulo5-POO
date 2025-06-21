const Character = require("./Character.js");

module.exports = class Thief extends Character {
  atack(targetCharacter) {
    targetCharacter.lifePts -= (this.atackPts - targetCharacter.defensePts) * 2;
  }
};
