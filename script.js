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
//If user plays rock and computer plays scissors: user wins
//If user plays scissors and computer plays paper: user wins
//If user plays paper and computer plays rock: user wins