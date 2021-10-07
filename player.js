const Game = require("./game.js");
const Deck = require("./deck.js");

// Player Class
const Player =  function(playerName){
    this.name = playerName; 
    // this.playerDeck = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
}; 

Player.prototype.numberOfCardsInPlayerDeck = function(){
    return this.playerDeck.length
}

Player.prototype.randomCard = function(){
    const deck = new Deck().latestDeck()
    return deck[Math.floor(Math.random() * 0)].value

}

Player.prototype.subtractingACard = function(){
        this.playerDeck.pop() 
}

Player.prototype.winner = function(){
    // if(){}

}
// const deck1 = suits.flatMap(suit => {return values.map(value =>{return new Card(suit,value)})})

// console.log(Math.floor(Math.random() * 51))

// console.log(deck1[Math.floor(Math.random() * 51)])

// console.log(Math.random())
// console.log(Card.latestDeck())

// console.log(Math.floor(Math.random()*52))

const Darania = new Player('Darania');
const Oliver = new Player('Oliver')

console.log(Darania.randomCard())
console.log(Oliver.randomCard())


// for(let i=0; i <= 25; i++){
//     const player1Cards = player1.randomCard()
//     const player2Cards = Oliver.randomCard()
//     console.log(player1Cards)
//     console.log(player2Cards)
// }

// player2.randomCardAssigned() //  King Hearts
// player2.compareCard(player1.randomCardAssigned());

// we have 52 organised cards 

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