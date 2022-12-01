const Turn = require('./turns')



class Round {
    constructor(deck, game) {
        this.deck = deck
        this.turns = 0
        this.incorrectGuesses = []
        this.game = game
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
        if (this.calculatePercentCorrect() < 90) {
            console.log(`Your score was ${this.calculatePercentCorrect()}% and below 90%. You need more practice! Lets start again!`)
            this.game.start()
            return `Your score was ${this.calculatePercentCorrect()}% and below 90%. You need more practice! Lets start again!`
        } else {
            console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% correctly`)
            return `** Round over! ** You answered ${this.calculatePercentCorrect()}% correctly`
        }
    }
}


module.exports = Round;