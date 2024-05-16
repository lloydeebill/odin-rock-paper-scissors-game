

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let gameOver = false;


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
      if (!gameOver) {
        const humanChoice = button.id;

        const computerChoice = getComputerChoice();

        displayMove(humanChoice,computerChoice);

        playRound(humanChoice,computerChoice);


        displayScore();


        if (humanScore === 5 || computerScore === 5) {
          gameOver = true;
        } 

        const gameResult = document.querySelector("#game-result");
 

          if (humanScore === 5 ) {
            gameResult.textContent = "You win!";
          } else if ( computerScore === 5 ) {
            gameResult.textContent = "Computer wins";
          }

        
      }


    })
  }
)

function displayScore() {


  document.querySelector("#wins").textContent = `Wins: ${humanScore}`;
  document.querySelector("#losses").textContent = `Losses: ${computerScore}`;
  document.querySelector("#ties").textContent = `Ties: ${drawScore}`;





}

function displayMove(humanChoice,computerChoice) {

  const moveParagraph = document.querySelector(".move");
  moveParagraph.textContent = `You moved ${humanChoice}, computer moves ${computerChoice}`;

}









