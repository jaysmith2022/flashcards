const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');



class Game {
  constructor(round) {
    this.currentRound = round
    this.cards = prototypeQuestions
  }

  start() {
    this.cards.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    const newStartDeck = new Deck(this.cards)
    this.currentRound = new Round(newStartDeck, this)
    this.printMessage(newStartDeck)
    this.printQuestion(this.currentRound)
  }

  printQuestion(round) {
    util.main(round);
}
  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
  -----------------------------------------------------------------------`)
  }
}
module.exports = Game;