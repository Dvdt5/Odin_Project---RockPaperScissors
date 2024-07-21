const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const restartButton = document.getElementById("restartButton");
const textBox = document.getElementById("textInfo");
const roundNumberSign = document.getElementById("roundNumber");
const playerScoreSign = document.getElementById("playerScoreNumber");
const computerScoreSign = document.getElementById("computerScoreNumber");


let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;



function restartGame() {
    humanScore = 0;
    computerScore = 0;
    roundNumber = 0;
    restartButton.classList.add("hide");
    textBox.innerText = "Click an option to start the game.";
    roundNumberSign.innerText = roundNumber;
    computerScoreSign.innerText = computerScore;
    playerScoreSign.innerText = humanScore;
    rockButton.style.pointerEvents ="all";
    paperButton.style.pointerEvents ="all";
    scissorsButton.style.pointerEvents ="all";
}


function getComputerChoice() {
    const computersRandom = Math.floor(Math.random() * 3) + 1;
    switch (computersRandom) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return "Rock";
    }
}

function playRound(choice) {
    const humanSelection = choice;
    const computerSelection = getComputerChoice();
    roundNumberSign.innerText = roundNumber;


    roundNumber++;

    switch (humanSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection) {
                case "Rock":
                    textBox.innerText = "You choose Rock, Computer chooses Rock. Its a tie!";
                    break;
                case "Paper":
                    textBox.innerText = "You choose Rock, Computer chooses Paper. Computer wins the round.";
                    computerScore++;
                    computerScoreSign.innerText = computerScore;
                    break;
                case "Scissors":
                    textBox.innerText = "You choose Rock, Computer chooses Scissors. You win the round.";
                    humanScore++;
                    playerScoreSign.innerText = humanScore;
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "Rock":
                    textBox.innerText = "You choose Paper, Computer chooses Rock. You win the round.";
                    humanScore++;
                    playerScoreSign.innerText = humanScore;
                    break;
                case "Paper":
                    textBox.innerText = "You choose Paper, Computer chooses Paper. Its a tie!";
                    break;
                case "Scissors":
                    textBox.innerText = "You choose Paper, Computer chooses Scissors. Computer wins the round.";
                    computerScore++;
                    computerScoreSign.innerText = computerScore;
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "Rock":
                    textBox.innerText = "You choose Scissors, Computer chooses Rock. Computer wins the round.";
                    computerScore++;
                    computerScoreSign.innerText = computerScore;
                    break;
                case "Paper":
                    textBox.innerText = "You choose Scissors, Computer chooses Paper. You win the round.";
                    humanScore++;
                    playerScoreSign.innerText = humanScore;
                    break;
                case "Scissors":
                    textBox.innerText = "You choose Scissors, Computer chooses Scissors. Its a tie!";
                    break;
            }
            break;
    }
    if (humanScore >= 5) {
        textBox.innerText = "You win the game!";
        restartButton.classList.remove("hide");
        rockButton.style.pointerEvents ="none";
        paperButton.style.pointerEvents ="none";
        scissorsButton.style.pointerEvents ="none";
    } else if ( computerScore >= 5) {
        textBox.innerText = "Computer wins the game!";
        restartButton.classList.remove("hide");
        rockButton.style.pointerEvents ="none";
        paperButton.style.pointerEvents ="none";
        scissorsButton.style.pointerEvents ="none";
    }

}




restartButton.addEventListener("click", function(){restartGame()});
rockButton.addEventListener("click", function(){playRound("Rock")});
paperButton.addEventListener("click", function(){playRound("Paper")});
scissorsButton.addEventListener("click", function(){playRound("Scissors")});