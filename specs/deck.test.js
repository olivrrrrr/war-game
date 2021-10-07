const Deck = require('../src/deck');
const Player = require('../src/player');

test("checking for 52 cards", function(){
   //Arrange 
    const deck = new Deck (52);
    //Act
    const hasCards = deck.cards
    //Assert
    expect (hasCards).toBe52(); 
});





