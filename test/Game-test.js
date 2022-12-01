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

    it('should be an instance of Round', () => {
        expect(game.startGame()).to.be.an.instanceOf(Round);
    })
    
    it("Should be an instance of Deck", () => {
        expect(game.createNewDeck()).to.be.an.instanceOf(Deck);
    });

    it('should create a new card', () => {
        expect(game.createNewCards()).to.be.an('array')
    })


    it('should have new deck with new round', () => {
        expect(game.startGame()).to.be.an('object')
    })

})