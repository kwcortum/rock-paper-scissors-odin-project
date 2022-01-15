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
    console.log(computerChoice);
    return computerChoice;
}

computerPlay();