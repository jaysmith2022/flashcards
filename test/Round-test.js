const chai = require('chai');
const expect = chai.expect;

const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Turn = require("../src/Turns")
const Round = require("../src/Round");



describe('Round', function() {
    let card1;
    let card2;
    let card3;
    let deck;
    let round;
    let turn;
    this.beforeEach(() => {
    card1 = new Card(2, "What is a comma-separated list of related values?", ["object", "array", "function"], "array");
    card2 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method");
    card3 = new Card(12, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()");
    deck = new Deck([card1, card2, card3]);
    turn = new Turn('object', card1)
    round = new Round(deck);
})

 it('should be a function', () =>  {
        expect(Round).to.be.a('function');
    })

it('should be an instance of round', () => {
    expect(round).to.be.an.instanceOf(Round)
})

it('should be able to store a deck', () => {
    expect(round.deck).to.equal(deck)
})

it('should start with a card', () => {
    expect(round.returnCurrentCard()).to.equal(card1)
})

it('turns should default to 0', () => {
    expect(round.turns).to.equal(0)
})

it('should start with no incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([])
})
it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn)
})

it('should update turn count when a turn is taken', () => {
    round.takeTurn('object')
    expect(round.turns).to.equal(1)
    round.takeTurn('array')
    expect(round.turns).to.equal(2)
})

it('should change cards after turn is taken', () => {
    expect(round.returnCurrentCard()).to.equal(card1)
    round.takeTurn('object')
    expect(round.returnCurrentCard()).to.equal(card2)
    round.takeTurn('map()')
    expect(round.returnCurrentCard()).to.equal(card3)
})

it('should store incorrect guesses', () => {
    expect(round.takeTurn('array')).to.equal('Correct!')
    expect(round.takeTurn('array')).to.equal('Incorrect!')
})

it('should calculate correct percent', () => {
    round.takeTurn('array')
    round.takeTurn('array')
    round.takeTurn('map()')
    expect(round.calculatePercentCorrect()).to.equal(66)
})

it('should print to console when round is over', () => {
    round.takeTurn('array')
    round.takeTurn('array')
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% correctly')

})
})