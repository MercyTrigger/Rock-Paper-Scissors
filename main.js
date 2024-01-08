// writing function that suppose to store computer's input data and return 
// randomly ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice () {
    const container = 'Rock Paper Scissors';  // choices
    let splitString = container.split(' '); // makes an array
    let resultComputer = Math.floor(Math.random() * splitString.length); // getting random between 0 and 2
    let caseInsasitive = splitString[resultComputer] // returning the string result
    return caseInsasitive.toLowerCase() // makingn it case-insensitive
}

// this function chooses the winner of a game

function winnerOfTheGame (player, computer) {
    if (player > computer) {
        return `Player has won the game: ${player}`
    }
    else if (computer > player) {
        return `Computer has won the game: ${computer}`
    }
    else if (player === computer) {
        return `No one has won, a draw!`
    }
}

// these are global scope variables to update them after each iteration in the for loop
let player = Number();
let computer = Number();

// this function takes 2 parametors which are user's choice via prompt (look futher in the code)
// and computer random selection, if here's no valid input it will throw else statement

function oneRoundOfGame (playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        
        return (`You lose! ${computerSelection} beats ${playerSelection},\n
player: ${player} vs  computer: ${++computer}`)

    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {

        return (`You win! ${playerSelection} beats ${computerSelection},\n
player: ${++player} vs  computer: ${computer}`)

    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {

        return (`It's a draw (${playerSelection} and ${computerSelection}),\n
player: ${++player} vs  computer: ${++computer}`)
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {

        return (`You win! ${playerSelection} beats ${computerSelection},
player: ${++player} vs  computer: ${computer}`)
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
 
        return (`It's a draw (${playerSelection} and ${computerSelection}),\n
player: ${++player} vs  computer: ${++computer}`)
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {

        return (`You lose! ${computerSelection} beats ${playerSelection},\n
player: ${player} vs  computer: ${++computer}`)
    }
    else if (playerSelection === 'rock' && computerSelection === 'rock') {

        return (`It's a draw (${playerSelection} and ${computerSelection}),\n
player: ${++player} vs  computer: ${++computer}`)
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {

        return (`You lose! ${computerSelection} beats ${playerSelection},\n
player: ${player} vs  computer: ${++computer}`)
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {

        return (`You win! ${playerSelection} beats ${computerSelection},\n
player: ${++player} vs  computer: ${computer}`)
    }   
    else {
         return (`Please, enter valid data!`) 
    }

}




// this is a loop function to play a game 6 times in a row, it also return winner function as return
function game() {
    for (let i = 0; i < 6; i++) {
        let userChoice = prompt('Choose: rock, paper or scissors: ');
        const computerChoice = getComputerChoice();
        console.log(oneRoundOfGame(userChoice.toLowerCase(), computerChoice))
    }
    return winnerOfTheGame(player, computer)
    

}

// console log here so winner function would be able to show result
console.log(game())

