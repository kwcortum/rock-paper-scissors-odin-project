function computerPlay() {
  let randomNumber = Math.floor(Math.random()*3);
  let computerChoice;
  if (randomNumber % 3 === 0) {
    computerChoice = "rock"
    console.log(computerChoice);
  } else if (randomNumber % 3 === 1) {
    computerChoice = "paper";
    console.log(computerChoice);
  } else {
    computerChoice = "scissors";
    console.log(computerChoice);
  }
  return computerChoice;
}

function gamePlay(playerSelection, computerChoice) {

}

computerPlay();