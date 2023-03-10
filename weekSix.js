/* checklist
define classes
cards: suit types,
available card numbers, J Q K A
deck amount
create player decks, ie half the full deck
draw cards for players
game ends when one player is out of cards
show whether player one or player two wins

project instructions:
Deal 26 Cards to each Player from a Deck of 52 cards.
• Iterate through the turns where each Player plays a Card.
• The Player who played the higher card is awarded a point
o Ties result in zero points for both Players
• After all cards have been played, display the score and declare the winner.
• Write a Unit Test using Mocha and Chai for at least one of the functions you write.
*/

 

//define players original score
let shuffleDeck =(arr)=>arr.sort(()=>0.5 - Math.random());
let playerOneScore = 0;
let playerTwoScore = 0;
let cards = [];
//create deck of cards
for(let i = 0; i < 4; i++){
    for (let num = 2; num < 11; num++){
        cards.push(num);
    }
    cards.push('J','Q','K','A');
}
let shuffledDeck = shuffleDeck(cards);
//create player decks
class Players{
    constructor(playerOne, playerTwo){
        this.playerOneCard = [];
        this.playerTwoCard = [];
        this.pOneCard = playerOne;
        this.pTwoCard = playerTwo;
    }
    //deal cards to players
    dealCards(){
        for(let i = 0; i < cards.length; i++){
            if(i%2 === 0){
                this.playerOneCard.push(shuffledDeck[i]);
            }else{
                this.playerTwoCard.push(shuffledDeck[i]);
            }
        };
        console.log('Cards have been dealt')
    };
    //drawing cards for players
    takingTurns(){
        console.log("Round Begin");
        for(let i = 0; i<cards.length/2;i++){
            console.log(`
            Turn: ${i+1}
            Player One Card: ${this.playerOneCard[i]}
            Player Two Card: ${this.playerTwoCard[i]}
            `);
            //assigning higher values to string cards
        switch(this.playerOneCard[i]){
            case 'J': this.pOneCard = 11;
            break;
            case 'Q': this.pOneCard = 12;
            break;
            case 'K': this.pOneCard = 13;
            break;
            case 'A': this.pOneCard = 14;
            break;
            default: this.pOneCard = this.playerOneCard[i];
        }
        switch(this.playerTwoCard[i]){
            case 'J': this.pTwoCard = 11;
            break;
            case 'Q': this.pTwoCard = 12;
            break;
            case 'K': this.pTwoCard = 13;
            break;
            case 'A': this.pTwoCard = 14;
            break;
            default: this.pTwoCard = this.playerTwoCard[i];
        }
        //determing who wins each round
        if(this.pOneCard > this.pTwoCard){
            playerOneScore += 1;
            console.log('Player One wins this round');
        }else if (this.pOneCard < this.pTwoCard) {
            playerTwoScore += 1;
            console.log("Player Two wins this rounds");
        }else {
            console.log('Tie');
        }
        };
    };
}  

//starting the game
class Game{
    start(){
        console.log
        (`Play the Game of War!
         Player with the most points wins.`);
    let deal = new Players();
    deal.dealCards();
    deal.takingTurns();
    }
    winner(){
        if(playerOneScore > playerTwoScore){
            return 'Player One Wins'
        } else if (playerOneScore < playerTwoScore){
            return 'Player Two Wins'
        } else{
            return 'TIE'
        };
    }
    gameOver(){
        console.log
            console.log
            (`
            Game Over 
            Player One Score: ${playerOneScore}
            Player Two Score: ${playerTwoScore}
            
            ${game.winner(playerOneScore, playerTwoScore)}
            `);
        }
    }
let game = new Game();
game.start();
game.gameOver();
