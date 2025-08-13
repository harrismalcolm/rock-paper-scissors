// console.log("Hello World");
let humanScore = 0;
let computerScore = 0;
//Ask user for input: rock, paper, or scissors
function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors!");
    console.log(choice);
    return choice;
}
//Stores users input
//Computer choses randomly rock, paper, or scissors
function getComputerChoice() {
    let newArr = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    
    return newArr[randomNum]
}
//Stores computers input
//Compares users and computers input

function playRound(humanChoice, computerChoice) {
    let playerChoice = humanChoice.toLowerCase();
    
    if(playerChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win! Paper beats Rock");
        humanScore ++;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win! Rock beats Scissors");
        humanScore ++;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win! Scissors beats Paper");
        humanScore ++;
    } else if(computerChoice === 'paper' && playerChoice === 'rock') {
        console.log("You Lose! Paper beats Rock");
        computerScore ++;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        console.log("You Lose! Rock beats Scissors");
        computerScore ++;
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        console.log("You Lose! Scissors beats Paper");
        computerScore ++;
    } else {
        console.log("It's a Tie!!!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(computerSelection);

//If user plays rock and computer plays scissors: user wins
//If user plays scissors and computer plays paper: user wins
//If user plays paper and computer plays rock: user wins