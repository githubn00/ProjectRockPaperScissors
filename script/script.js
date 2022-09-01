
console.log("Hello World! Let's play Rock, Paper, Scissors five times!");

function getComputerChoice(cheat, hoverSel) {
    let selector = Math.random();
    let val1 = cheat && hoverSel == "Scissors" ? 0.5 : 0.3;
    let val2 = cheat && hoverSel == "Rock" ? 1.0 : 0.6;
    let val3 = cheat && hoverSel == "Paper" ? 0.3 : 0.6;

    switch (true) {
        case selector <= val1:
            return "Rock";
        case selector > 0.3 && selector <= val2:
            return "Paper";
        case selector > val3:
            return "Scissors";
        default:
            return "Something went wrong";
    }
}


function playRound(computerSelection, playerSelection) {

    playerSelection = playerSelection.toLowerCase();

    switch (true) {
        case computerSelection == 'Rock' && playerSelection == 'rock':
            matchCount += 1;
            return "It's a Match! Nobody wins";
            
        case computerSelection == 'Rock' && playerSelection == 'paper':
            playerScore += 1;
            return "You Win! Paper beats Rock";
           
        case computerSelection == 'Rock' && playerSelection == 'scissors':
            computerScore += 1;
            return "You Lose! Rock beats Scissors";
            
        case computerSelection == 'Paper' && playerSelection == 'rock':
            computerScore += 1;
            return "You Lose! Paper beats Rock";
            
        case computerSelection == 'Paper' && playerSelection == 'paper':
            matchCount += 1;
            return "It's a Match! Nobody wins";
            
        case computerSelection == 'Paper' && playerSelection == 'scissors':
            playerScore += 1;
            return "You Win! Scissors beats Paper";
            
        case computerSelection == 'Scissors' && playerSelection == 'rock':
            playerScore += 1;
            return "You Win! Rock beats Scissors";
            
        case computerSelection == 'Scissors' && playerSelection == 'paper':
            computerScore += 1;
            return "You Lose! Scissors beats Paper";
            
        case computerSelection == 'Scissors' && playerSelection == 'scissors':
            matchCount += 1;
            return "It's a Match! Nobody wins";
            
        case computerSelection == 'Something went wrong':
            return "Something went wrong.";
             
        default:
            return "Error. Try again.";
            

    }

}


function game(playerSelection) {
    let computerSelection = modeLegendary ? getComputerChoice(true,playerSelection) : getComputerChoice();
    let result = playRound(computerSelection,playerSelection);
    
    compChoiceh2.innerText = 'Computer choice: ' + computerSelection;
    userChoiceh2.innerText = 'Player choice: ' + playerSelection;
    resulth2.innerText = result;

    playerScoreH2.innerText = "Player Score: " + playerScore;
    compScoreH2.innerText = "Computer Score: " + computerScore;
    matchCountH2.innerText = "Match Count: " + matchCount;

    console.clear();
    console.log("Computer choice: " + computerSelection);
    console.log("Player choice: " + playerSelection);
    console.log(result);
    return console.log('Game played'); 

}

//game();

//const body = document.querySelector("body");

function createButtons() {
    var confirmation = confirm("Caution: This is a mean game. Want to continue?");
    if(!confirmation){
        this.addEventListener('click', createButtons, { once: true});
        return;
    }
    
    const playDiv = document.querySelector('div[class="play-buttons"]');
    const controlsDiv = document.querySelector('#controlsId');
    
    //-----Button creation section-----
    var rockButton = document.createElement("BUTTON");
    var rockButtonText = document.createTextNode("Rock");
    rockButton.appendChild(rockButtonText);
    playDiv.appendChild(rockButton);
    rockButton.id = "rockBtn";
    rockButton.className = "play-button";
    rockButton.addEventListener('click', () => game("Rock"));

    var paperButton = document.createElement("BUTTON");
    var paperButtonText = document.createTextNode("Paper");
    paperButton.appendChild(paperButtonText);
    playDiv.appendChild(paperButton);
    paperButton.id = "paperBtn";
    paperButton.className = "play-button";
    paperButton.addEventListener('click', () => game("Paper"));
    
    var scissorsButton = document.createElement("BUTTON");
    var scissorsButtonText = document.createTextNode("Scissors");
    scissorsButton.appendChild(scissorsButtonText);
    playDiv.appendChild(scissorsButton);
    scissorsButton.id = "scissorsBtn";
    scissorsButton.className = "play-button";
    scissorsButton.addEventListener('click', () => game("Scissors"));

    const modeButton = document.createElement('button');
    modeButton.innerText = "Mode Toggle = Normal";
    modeButton.id = 'modeButtonId';
    controlsDiv.appendChild(modeButton);
    modeButton.addEventListener('click', () => modeToggle());

    btn.innerText = "Clear";
    btn.addEventListener('click', () => clear());

    playerScoreH2.innerText = "Player Score: " + playerScore;
    compScoreH2.innerText = "Computer Score: " + computerScore;
    matchCountH2.innerText = "Match Count: " + matchCount;
   
  }

  function modeToggle(){
    const modeButton = document.querySelector('#modeButtonId');
    modeButton.innerText = modeButton.innerText == "Mode Toggle = Normal" ? "Mode Toggle = Legendary" : "Mode Toggle = Normal";
    modeLegendary = modeButton.innerText == "Mode Toggle = Normal" ? false
     : true;

  }

  function clear(){
    computerScore = 0;
    playerScore = 0;
    matchCount = 0;

    playerScoreH2.innerText = "Player Score: " + playerScore;
    compScoreH2.innerText = "Computer Score: " + computerScore;
    matchCountH2.innerText = "Match Count: " + matchCount;

    compChoiceh2.innerText ='';
    userChoiceh2.innerText ='';
    resulth2.innerText = '';
    
  }


let computerScore = 0;
let playerScore = 0;
let matchCount = 0;
let modeLegendary = false;



const btn = document.querySelector("#btn");
const playerScoreH2 = document.querySelector("#playerScoreId");
const compScoreH2 = document.querySelector("#compScoreId");
const matchCountH2 = document.querySelector("#matchCountId");

const compChoiceh2 = document.querySelector('h2[id="compChoice"]');
const userChoiceh2 = document.querySelector('h2[id="userChoice"]');
const resulth2 = document.querySelector('h2[id="result"]');

console.log(playerScoreH2);
btn.addEventListener('click', createButtons, { once: true});

