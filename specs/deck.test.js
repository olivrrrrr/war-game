const Deck = require('../src/deck');
const Player = require('../src/player');

test("checking for 52 cards", function(){
   //Arrange 
    const deck = new Deck ();
    //Act
    const hasCards = deck.cards
    //Assert
    expect (hasCards).toBe52(); 
});





