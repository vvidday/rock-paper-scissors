const moves = ["rock", "paper", "scissors"];

let computerPlay = () =>{
    let random = Math.floor(Math.random() * (2) + 1);
    return moves[random];
}

let playRound = (playerSelection, computerSelection) =>{
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

let game = () =>{
    let playerWins = 0;

    for (let i = 0; i < 5; i++){
        let playerMove = window.prompt("Please choose rock, paper or scissors: ").toLowerCase();
        while(!moves.includes(playerMove)){
            playerMove = window.prompt("Invalid input. Please only choose between rock, paper and scissors").toLowerCase();
        }
        let result = playRound(playerMove, computerPlay());
        console.log(result);
        if (result.includes("Win")){
            playerWins ++;
        }
    }

    alert("You won " + playerWins + " out of the 5 games.");

}

// Need to wait for document to finish loading first. Else getElementById returns null, since the DOM hasn't loaded before the script executes.
window.onload = () =>{ document.getElementById("play-game").addEventListener("click", () =>{
    game();
})
}