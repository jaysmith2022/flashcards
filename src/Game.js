const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor(newRound) {
    this.currentRound = newRound
  }



  start() {
    const newStartDeck = new Deck(prototypeQuestions)
    this.currentRound = new Round(newStartDeck)
    this.printMessage(newStartDeck, this.currentRound)
    this.printMessage(this.currentRound)

  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
  -----------------------------------------------------------------------`)
  }
  
  printQuestion(round) {
      util.main(round);
  }



}
module.exports = Game;