

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

let humanChoice;
let computerChoice;

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


function getHumanChoice() {

  let humanInput = prompt("What's your Choice? (Rock, Paper or Scissors): ");
  humanChoice = humanInput.toLowerCase();


  console.log(`human move: ${humanChoice}`);
  return humanChoice;


}


function playRound(humanChoice,computerChoice) {



  //ROCK

  

  if (humanChoice === 'rock' && computerChoice === 'rock') {
    ++drawScore; 
    console.log('Round Result: Draw');
  } else if ( humanChoice === 'rock' && computerChoice === 'paper') {
    ++computerScore;
    console.log('Round Result: Computer Scores!');
  } else if ( humanChoice === 'rock' && computerChoice === 'scissors') {
    ++humanScore;
    console.log('Round Result: Human Scores!');
  }

  //PAPER

  if (humanChoice === 'paper' && computerChoice === 'paper') {
    ++drawScore; 
    console.log('Round Result: Draw');
  } else if ( humanChoice === 'paper' && computerChoice === 'scissors') {
    ++computerScore;
    console.log('Round Result: Computer Scores!');
  } else if ( humanChoice === 'paper' && computerChoice === 'rock') {
    ++humanScore;
    console.log('Round Result: Human Scores!');
  }

  //SCISSORS

  if (humanChoice === 'scissors' && computerChoice === 'scissors') {
    ++drawScore; 
    console.log('Round Result: Draw');
  } else if ( humanChoice === 'scissors' && computerChoice === 'rock') {
    ++computerScore;
    console.log('Round Result: Computer Scores!');
  } else if ( humanChoice === 'scissors' && computerChoice === 'paper') {
    ++humanScore;
    console.log('Round Result: Human Scores!');
  }

  console.log(`Draw: ${drawScore}`);
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);

 


}


function playGame() {
  for (i = 0 ; i < 5 ; i++) {

    console.log(`Round ${i + 1}`);
    let humanSelection = getHumanChoice(); 
    let computerSelection= getComputerChoice();
    playRound(humanSelection, computerSelection);

    
 

  }

  if ( humanScore > computerScore) {
    console.log('Human wins the game!');
  } else if ( humanScore < computerScore) {
    console.log('Computer wins the game!'); 
  } else if ( humanScore === computerScore) {
    console.log("It's a tie!");
  }

}




playGame();










