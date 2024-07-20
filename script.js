const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

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

function playRound(PlayerChoice) {
    const humanSelection = PlayerChoice;
    const computerSelection = getComputerChoice();
    switch (humanSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection) {
                case "Rock":
                    return "Tie";
                    break;
                case "Paper":
                    return "Computer";
                    break;
                case "Scissors":
                    return "Player";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "Rock":
                    return "Player";
                    break;
                case "Paper":
                    return "Tie";
                    break;
                case "Scissors":
                    return "Computer";
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "Rock":
                    return "Computer";
                    break;
                case "Paper":
                    return "Player";
                    break;
                case "Scissors":
                    return "Tie";
                    break;
            }
            break;
    }

}

function playGame () {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i < 6; i++) {
    console.log("Round - "+i);
    console.log("-------------")
    const roundWinner = playRound();
    if (roundWinner === "Player") {
        console.log("Player wins the Round!");
        playerScore++;
    } else if (roundWinner === "Computer") {
        console.log("Computer wins the Round!");
        computerScore++;
    } else if (roundWinner === "Tie") {
        console.log("Its a Tie!");
    }
    console.log("Player - " + playerScore);
    console.log("Computer - " + computerScore);
    console.log("--------------")
    }
    if (playerScore > computerScore) {
        console.log("Player wins the game with "+ playerScore+ " points.")
    } else if (computerScore > playerScore) {
        console.log("Computer wins the game with "+ computerScore+ " points.")
    } else {
        console.log("Game ended with a Tie!")
    }
}

rockButton.addEventListener("click", playRound("Rock"));