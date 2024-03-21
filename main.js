function getComputerChoice() {
    const container = ["rock", "paper", "scissors"];
    let resultComputer = Math.floor(Math.random() * container.length); // getting random between 0 and 2
    let randomChoice = container[resultComputer]; 
    return randomChoice;
};

function winnerOfTheGame(player, computer) {
    if (player > computer) {
        return `Player has won the game: ${player} against computer: ${computer}`;
    }
    else if (computer > player) {
        return `Computer has won the game: ${computer} against player: ${player}`;
    }
    else if (player === computer) {
        return `No one has won, a draw! ${player} : ${computer}`;
    };
};

let player = 0;
let computer = 0;

// this function takes 2 parametors which are user's choice via prompt (look futher in the code)
// and computer random selection, if here's no valid input it will throw else statement

function oneRoundOfGame(playerSelection, computerSelection) {

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


// event listeners here
const userChoiceDiv = document.querySelector('.user');
const computerButton = document.querySelector('.container')

computerButton.addEventListener('mouseover', () => {
    let visiablePop = document.querySelector('.pop-up');
    visiablePop.style.opacity = '1'
    visiablePop.style.transition = '1s'

    computerButton.addEventListener('mouseout', () => {
        let visiablePop = document.querySelector('.pop-up');
        visiablePop.style.opacity = '0'
    
    })
})

let divResult = document.createElement('div');
divResult.setAttribute('id', 'result');
document.querySelector('body').appendChild(divResult)
let displayingResult = document.querySelector('#result')
displayingResult.style.marginTop = '30px'
divResult.style.color = '#fff'
let scorePlayer = document.querySelector('.player-score')
let scoreComputer = document.querySelector('.computer-score')

userChoiceDiv.addEventListener('click', eventFun)

function eventFun(event) {
    const eventTarget = event.target;
    switch(eventTarget.id) {        
        case 'rock':
            divResult.textContent = oneRoundOfGame(eventTarget.textContent.toLowerCase(), getComputerChoice())
            break;

        case 'paper':   
            divResult.textContent = oneRoundOfGame(eventTarget.textContent.toLowerCase(), getComputerChoice())
            break;

        case 'scissors':
            divResult.textContent = oneRoundOfGame(eventTarget.textContent.toLowerCase(), getComputerChoice())
    }

    scorePlayer.textContent = `Player: ${player}`
    scoreComputer.textContent = `Computer: ${computer}`
    
    if (player >= 5 || computer >= 5) {
        divResult.textContent = winnerOfTheGame(player, computer)
        divResult.style.fontSize = '30px'
        userChoiceDiv.removeEventListener('click', eventFun)
    }
}





