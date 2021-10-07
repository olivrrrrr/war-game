const Player = require("./player.js");
const Game = require("./game.js");

// const suits = ["Hearts", "Clubs", "Diamonds", "Spades"]
// const values = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

const suits = ["Hearts"]
const values = [2];

// Card Class 
const Deck = function(suit, value){
    this.suit = suit; 
    this.value = value; 
}

Deck.prototype.winner = function() {

}

Deck.prototype.latestDeck = function(){
    return suits.flatMap(suit => {
        return values.map(value =>{
            return new Deck(suit,value)
        })
    })
}

module.exports = Deck