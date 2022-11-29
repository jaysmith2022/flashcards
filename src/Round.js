const Turn = require("./Turns")

class Round {
    constructor(deck) {
        this.deck = deck
        this.turns = 0
        this.incorrectGuesses = []
    }

    returnCurrentCard = () => {
        return this.deck.cards[0]
    }

    takeTurn = (guess) => {
        const newTurn = new Turn(guess, this.deck.cards[this.turns])
        this.turns ++
        console.log(guess)
    }
}


module.exports = Round;