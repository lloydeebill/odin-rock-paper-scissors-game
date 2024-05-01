


let humanScore = 0;
let computerScore = 0;
let tiesScore = 0;
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

  //check if humanchoice defeats or losses with the computer choice using if else
  // check for each instance of decision to win , lose or tie 

  //ROCK

  if (humanChoice === 'rock' && computerChoice === 'rock') {
    ++tiesScore; 
    console.log('tie');
  } else if ( humanChoice === 'rock' && computerChoice === 'paper') {
    ++computerScore;
    console.log('computer wins');
  } else if ( humanChoice === 'rock' && computerChoice === 'scissors') {
    ++humanScore;
    console.log('human wins');
  }

  //PAPER

  if (humanChoice === 'paper' && computerChoice === 'paper') {
    ++tiesScore; 
    console.log('tie');
  } else if ( humanChoice === 'paper' && computerChoice === 'scissors') {
    ++computerScore;
    console.log('computer wins');
  } else if ( humanChoice === 'paper' && computerChoice === 'rock') {
    ++humanScore;
    console.log('human wins');
  }

  //SCISSORS

  if (humanChoice === 'scissors' && computerChoice === 'scissors') {
    ++tiesScore; 
    console.log('tie');
  } else if ( humanChoice === 'scissors' && computerChoice === 'rock') {
    ++computerScore;
    console.log('computer wins');
  } else if ( humanChoice === 'scissors' && computerChoice === 'paper') {
    ++humanScore;
    console.log('human wins');
  }

  console.log(`Ties: ${tiesScore}`);
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score ${computerScore}`);


}




const humanSelection = getHumanChoice(); 

const computerSelection= getComputerChoice();

playRound(humanSelection, computerSelection);
