module.exports = class Character {
  constructor(name, lifePts, atackPts, defensePts) {
    this.name = name;
    this.lifePts = lifePts;
    this.atackPts = atackPts;
    this.defensePts = defensePts;
  }

  atack(targetCharacter) {
    targetCharacter.lifePts -= this.atackPts - targetCharacter.defensePts;
  }
};
