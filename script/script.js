console.log("Hello World! Let's play Rock, Paper, Scissors five times!");

function getComputerChoice() {
    let selector = Math.random();
    switch (true) {
        case selector <= 0.3:
            return "Rock";
        case selector > 0.3 && selector <= 0.6:
            return "Paper";
        case selector > 0.6:
            return "Scissors";
        default:
            return "Something went wrong";
    }
}


function playRound(computerSelection, playerSelection) {

    playerSelection = playerSelection.toLowerCase();

    switch (true) {
        case computerSelection == 'Rock' && playerSelection == 'rock':
            return "It's a Match! Nobody wins";
            
        case computerSelection == 'Rock' && playerSelection == 'paper':
            return "You Win! Paper beats Rock";
           
        case computerSelection == 'Rock' && playerSelection == 'scissors':
            return "You Lose! Rock beats Scissors";
            
        case computerSelection == 'Paper' && playerSelection == 'rock':
            return "You Lose! Paper beats Rock";
            
        case computerSelection == 'Paper' && playerSelection == 'paper':
            return "It's a Match! Nobody wins";
            
        case computerSelection == 'Paper' && playerSelection == 'scissors':
            return "You Win! Scissors beats Paper";
            
        case computerSelection == 'Scissors' && playerSelection == 'rock':
            return "You Win! Rock beats Scissors";
            
        case computerSelection == 'Scissors' && playerSelection == 'paper':
            return "You Lose! Scissors beats Paper";
            
        case computerSelection == 'Scissors' && playerSelection == 'scissors':
            return "It's a Match! Nobody wins";
            
        case computerSelection == 'Something went wrong':
            return "Something went wrong.";
             
        default:
            return "Error. Try again.";
            

    }

}

function game() {
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Type either 'Rock', 'Paper' or 'Scissors'");
        console.log("Computer choice: " + computerSelection);
        console.log("Player choice: " + playerSelection);
        console.log(playRound(computerSelection,playerSelection));
    }
}

game();


