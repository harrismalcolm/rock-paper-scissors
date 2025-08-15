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
    
    return newArr[randomNum];
}
//Stores computers input
//Compares users and computers input

function playRound(humanChoice, computerChoice) {
    let playerChoice = humanChoice.toLowerCase();
    
    if(playerChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win! Paper beats Rock");
        return humanScore ++;
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win! Rock beats Scissors");
        return humanScore ++;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win! Scissors beats Paper");
        return humanScore ++;
    } else if(computerChoice === 'paper' && playerChoice === 'rock') {
        console.log("You Lose! Paper beats Rock");
        return computerScore ++;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        console.log("You Lose! Rock beats Scissors");
        return computerScore ++;
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        console.log("You Lose! Scissors beats Paper");
        return computerScore ++;
    } else {
        console.log("It's a Tie!!!");
    }
}

function playGame() {

    // let humanScore = 0;
    // let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
        console.log(humanScore);
        console.log(computerScore);
    }

    if(humanScore > computerScore) {
        alert('You Win!!!');
    } else if (humanScore < computerScore){
        alert('You Lose!!!');
    } else {
        alert("It's a Tie!!!");
    }
}
