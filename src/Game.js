const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Deck = require('./Deck');



class Game {
  constructor(round) {
    this.currentRound = round
  }

  start() {
    const newStartDeck = new Deck(prototypeQuestions)
    this.currentRound = new Round(newStartDeck)
    this.printMessage(newStartDeck, this.currentRound)
    this.printQuestion(this.currentRound)
  }
  printQuestion(round) {
    util.main(round);
}
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
 
  -----------------------------------------------------------------------`)
  }
}
module.exports = Game;