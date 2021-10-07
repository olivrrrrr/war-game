const Player = require("./player.js");
const Game = require("./game.js");

 const suits = ["Hearts", "Clubs", "Diamonds", "Spades"]
 const values = [2,3,4,5,6,7,8,9,10,11,12,13,14];
 

//const suits = ["Hearts"]
//const values = [2,3,4,5,6,7,8,9];

// Card Class 
const Deck = function(suit, value){
    this.suit = suit; 
    this.value = value; 
    this.numericalValue = null
}

//Deck.prototype.renamingCards = function(value){
//console.log(value)
//}
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
