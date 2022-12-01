const chai = require("chai");
const expect = chai.expect;

const Game = require("../src/Game");
const Round = require("../src/Round");
const Deck = require("../src/Deck");


describe("Game", function () {
    let deck;
    let round;
    let game;

    beforeEach(function () {
        deck = new Deck();
        round = new Round();
        game = new Game()
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