const Card = require("./deck.js");
const Player = require("./player.js");

const Game = function(){

}

Game.prototype.dealCards = function(){

}

Game.prototype.checkWinner = function(){
    if(player1.cardValue() > player2.cardValue()){
        player2.subtractingACard()
        return ``
    }
}

Game.prototype.reset = function(){

}



module.exports = Game; 