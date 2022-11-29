const Turn = require("./Turns")

class Round {
    constructor(deck) {
        this.deck = deck
        this.turns = 0
        this.incorrectGuesses = []
    }

    returnCurrentCard = () => {
        return this.deck.cards[this.turns]
    }

    takeTurn = (guess) => {
        const newTurn = new Turn(guess, this.deck.cards[this.turns])
        if (!newTurn.evaluateGuess()) {
            this.incorrectGuesses.push(this.deck.cards[this.turns].id)
        }
        this.turns ++
        return newTurn.giveFeedback()
    }
    calculatePercentCorrect = () => {
        let totalScore = ((this.turns - this.incorrectGuesses.length) / this.turns) * 100
        return Math.floor(totalScore)
    }

    endRound = () => {
       console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% correctly`)
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% correctly`
    }
}


module.exports = Round;