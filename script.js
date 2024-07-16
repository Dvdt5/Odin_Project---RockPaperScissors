function getHumanChoice() {
    let humanChoice = prompt("Rock - Paper - Scissors");
    const regex = /(rock)|(paper)|(scissors)/ig;
    while (!(regex.test(humanChoice))) {
        humanChoice = prompt("Please enter a valid choice!");
    }
    return humanChoice;
}

function getComputerChoice() {

}

function playGame() {
    const humanSelection = getHumanChoice();
    
    const computerSelection = getComputerChoice();
}

