

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;


function getComputerChoice() {



  let randomNumber = Math.random()


  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerChoice = 'rock'
  } else if ( randomNumber >= 1/3 && randomNumber < 2/3 ) {
    computerChoice = 'paper'
  } else if ( randomNumber >= 2/3 && randomNumber < 3/3) {
    computerChoice = 'scissors'
  }

  console.log(`computer move: ${computerChoice}`);
  return computerChoice;
}


function playRound(humanChoice,computerChoice) {



  if (humanChoice === computerChoice) {
    drawScore++;
    console.log("Draw");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log("Human scores!");
  } else {
    computerScore++;
    console.log("Computer scores!");
  }


}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click",() => {
      const humanChoice = button.id;

      const computerChoice = getComputerChoice();

      playRound(humanChoice,computerChoice);


    })
  }
) 











