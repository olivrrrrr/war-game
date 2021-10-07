const Game = require("./game.js");
const Deck = require("./card.js");

// Player Class
const Player =  function(playerName){
    this.name = playerName;
    // this.playerDeck = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
}; 

Player.prototype.numberOfCardsInPlayerDeck = function(){
    return this.playerDeck.length
}

Player.prototype.randomCard = function(){
    const deck1 = Card.latestDeck();
    deck1[Math.floor(Math.random() * 51)]

}

Player.prototype.subtractingACard = function(){
        this.playerDeck.pop() 
}

const deck1 = suits.flatMap(suit => {return values.map(value =>{return new Card(suit,value)})})

console.log(Math.floor(Math.random() * 51))

console.log(deck1[Math.floor(Math.random() * 51)])

console.log(Math.random())

// console.log(Math.floor(Math.random()*52))

const player1 = new Player('player1');
const player2 = new Player('Oliver')

player2.randomCardAssigned() //  King Hearts
player2.compareCard(player1.randomCardAssigned());





// console.log(player1.numberOfCardsInPlayerDeck())


// console.log(player1);


// class Deck {
//     const (cards = latestDeck){
//         this.cards = cards
//     }
// }

// const deck = new Deck()

// console.log(deck.cards)

module.exports = Player; 