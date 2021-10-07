const Game = require('../src/game.js');
const Deck = require('../src/deck.js');

test ("who wins", function(){
    //Arrange 
    const player1 = new Player1("player1");
    const player2 = new Player2("player2");
    //Act
    const highestCard = player1.Card;
    const highestCard = player2.Card;
    //Assert
    expect(highestCard).toBe();
});

