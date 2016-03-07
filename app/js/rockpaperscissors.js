////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
  if (move !== null) {
    return move;
  }
  else {
    return getInput();
  }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
  if (move !== null) {
    return move;
  }
  else {
    return randomPlay();
  }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove === 'rock') {
      if (computerMove === 'scissors') {
        winner = 'player';
      }
      else if (computerMove === 'paper') {
        winner = 'computer';
      }
      else {
        winner = 'tie'
      }
    }

    if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        winner = 'player';
      }
      else if (playermove === 'scissors') {
        winner = 'computer';
      }
      else {
        winner = 'tie';
      }
    }

    if (playerMove === 'scissors') {
      if (computerMove === 'paper') {
        winner = 'player';
      }
      else if (computerMove === 'rock') {
        winner = 'computer';
      }
      else {
        winner = 'tie';
      }
    }
    return winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 6 || computerWins < 6) {
      getPlayerMove();
      getComputerMove();
      getWinner();

      if (winner === 'player') {
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove '+ '.' + ' The score is currently ' + playerWins + ' to ' + computerWins + '\n);
      }
      else if (winner === 'computer') {
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove '+ '.' + ' The score is currently ' + playerWins + ' to ' + computerWins + '\n);
      }
      else if (winner === 'tie') {
        console.log('This round is a tie. The score is currently ' + playerWins + ' to ' + computerWins + \n);
      }
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}
