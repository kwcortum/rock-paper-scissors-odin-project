function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice;
    if (randomNumber % 3 === 0) {
      computerChoice = "rock"
      
    } else if (randomNumber % 3 === 1) {
      computerChoice = "paper";
    
    } else {
      computerChoice = "scissors";
      
    }
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function gamePlay(playerSelection, computerChoice) {
  computerChoice = computerPlay();
  playerSelection = prompt("Choose rock, paper, or scissors");
  playerSelection.toLowerCase();
  if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    console.log("Please choose a valid choice.")
    playerSelection = prompt("Choose rock, paper, or scissors ONLY!!!")
  } else if (playerSelection === computerChoice) {
    console.log("It's a draw. Play again!");
  } else {
    if (playerSelection === "rock" && computerChoice === "scissors") {
      console.log("Rock beats scissors. You win!");
      playerScore++;
    } else if (playerSelection === "rock" && computerChoice === "paper") {
      console.log("Paper covers rock. You lose. Try again.");
      computerScore++;
    } else if (playerSelection === "paper" && computerChoice === "rock") {
      console.log("Paper covers rock. You win!");
      playerScore++;
    } else if (playerSelection === "paper" && computerChoice === "scissors") {
      console.log("Scissors cuts paper. You lose. Try again.");
      computerScore++;
    } else if (playerSelection === "scissors" && computerChoice === "paper") {
      console.log("Scissors cuts paper. You win!");
      playerScore++;
    } else if (playerSelection === "scissors" && computerChoice === "rock") {
      console.log("Rock crushes scissors. You lose. Try again!");
      computerScore++;
    }
  }
  return playerScore && computerScore;
}

function game() {
  for (let i=0; i < 5; i++) {
    gamePlay();
  }
  console.log(`Player received ${playerScore} points. The computer received ${computerScore}.`)
  if (playerScore > computerScore) {
    console.log("Player wins!");
  } else if (playerScore === computerScore) {
    console.log("It's a draw.");
  } else {
    console.log("The computer wins.")
  }
}

game();