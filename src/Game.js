const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');




class Game {
  constructor(round) {
    this.currentRound = round
    this.cards = prototypeQuestions
  }

  start() {
    this.startGame()
    this.printMessage(this.createNewDeck())
    this.printQuestion(this.startGame())
  }

  startGame = () => {
    this.currentRound = new Round(this.createNewDeck(), this)
    return this.currentRound
  }

  createNewDeck = () => {
    const newStartDeck = new Deck(this.createNewCards())
    return newStartDeck
  }

  createNewCards = () => {
    const newCards = this.cards.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    return newCards
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