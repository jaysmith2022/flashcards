const chai = require("chai");
const expect = chai.expect;

const Game = require("../src/Game");
const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card");


describe("Game", function () {
    let card1;
    let card2;
    let card3;
    let deck;
    let round;
    let game;

    beforeEach(function () {
        card1 = new Card(2, "What is a comma-separated list of related values?", ["object", "array", "function"], "array");
        card2 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method");
        card3 = new Card(12, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()");
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
        game = new Game(round, deck)
    })

    it('should be a function', () => {
        expect(Game).to.be.a('function')
    })

    it('should be instance of Game', () => {
        expect(game).to.be.an.instanceOf(Game)
    })

    it("Should be an instance of Deck", () => {
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it('should be an instance of Round', () => {
        expect(round).to.be.an.instanceOf(Round);
    })
})