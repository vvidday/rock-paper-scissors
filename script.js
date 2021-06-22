const moves = ["rock", "paper", "scissors"];
const startGameButton = document.getElementById("play-game");
const resetGameButton = document.getElementById("reset");
const resultPara = document.getElementById("result");
const scores = document.querySelectorAll(".score");
const playButtons = document.querySelectorAll(".play-button");
const container = document.getElementById("results-container");
const playerScoreCounter = document.getElementById("player-score");
const computerScoreCounter = document.getElementById("computer-score");
let computerWins = 0;
let playerWins = 0;

const computerPlay = () =>{
    let random = Math.floor(Math.random() * (2) + 1);
    return moves[random];
}

const playRound = (playerSelection, computerSelection) =>{
    if(playerSelection === computerSelection){
        return "Draw!"
    }
    switch(playerSelection){
        case "rock":
            if(computerSelection === "paper"){
                return "You Lose! Paper beats Rock";
            }
            else{
                return "You Win! Rock beat Scissors";
            }
            break;
        
        case "scissors":
            if(computerSelection === "rock"){
                return "You Lose! Rock beats Scissors";
            }
            else{
                return "You Win! Scissors beats Paper";
            }
            break;
        
        case "paper":
            if(computerSelection === "scissors"){
                return "You Lose! Scissors beats Paper";
            }
            else{
                return "You Win! Paper beats Rock";
            }
            break;
    }
}


const displayResult = (result) => {
    let newParagraph = document.createElement('p');
    newParagraph.classList.add("results-text");
    //TODO: create results text CSS class
    newParagraph.textContent = result;
    if(container.childNodes.length > 0){
        container.insertBefore(newParagraph, container.childNodes[0]);
    }
    else{
        container.appendChild(newParagraph);
    }
}

const executeRound = (playerSelection) => {
    let result = playRound(playerSelection, computerPlay());
    // Add result to results container
    displayResult(result);
    console.log(result);
    if(result.includes("Win")){
        playerWins++;
        playerScoreCounter.textContent = playerWins;
    }
    else{
        computerWins++;
        computerScoreCounter.textContent = computerWins;
    }
    if(playerWins === 5){
        resultPara.textContent = "Congratulations, you win!";
        endGame();
    }
    else if (computerWins === 5){
        resultPara.textContent = "You Lose, better luck next time!";
        endGame();
    }
}   

function buttonListener(e){
    let move = this.id.replace("-button","");
    executeRound(move);
}

const startGame = () =>{
    resultPara.textContent = "Pick an option!";
    scores.forEach(element => element.classList.toggle("invisible"));
    startGameButton.classList.toggle("invisible");
    console.log(playButtons);
    playButtons.forEach((button) => {
        button.classList.toggle("invisible");
        button.addEventListener("click", buttonListener);
    });
}

const endGame = () => {
    console.log("end");
    playButtons.forEach(button => button.removeEventListener("click", buttonListener));
    resetGameButton.classList.toggle("invisible");
    resetGameButton.addEventListener("click", resetGame);
}

const resetGame = () => {
    container.innerHTML = "";
    resetGameButton.classList.toggle("invisible");
    startGameButton.classList.toggle("invisible");
    playerScoreCounter.innerText = 0;
    computerScoreCounter.innerText = 0;
    scores.forEach(element => element.classList.toggle("invisible"));
    computerWins = 0;
    playerWins = 0;
    resultPara.innerText = "";
    playButtons.forEach(button => button.classList.toggle("invisible"));

}


startGameButton.addEventListener("click", startGame);


// Need to wait for document to finish loading first. Else getElementById returns null, since the DOM hasn't loaded before the script executes.
