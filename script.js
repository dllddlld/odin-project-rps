const ROCK_PAPER_SCISSORS = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return ROCK_PAPER_SCISSORS[Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)];
}

function getPlayerSelection() {
    let playerSelection;
    let input;
    do {
        input = prompt('Select rock, paper or scissors:');
        if (input !== null) {
            if (ROCK_PAPER_SCISSORS.indexOf(input.toLowerCase()) !== -1) {
                playerSelection = input.toLowerCase();
            }
        }
    } while (playerSelection === undefined && input !== null);
    return playerSelection;
}

function properCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let result = '';
    let playerSelectionIndex = ROCK_PAPER_SCISSORS.indexOf(playerSelection.toLowerCase());
    let computerSelectionIndex = ROCK_PAPER_SCISSORS.indexOf(computerSelection);
    let indexDiff = playerSelectionIndex - computerSelectionIndex;
    switch (indexDiff) {
        case (0):
            result = `It's a draw! You both chose ${computerSelection}`;
            break;
        case (1):
        case (-2):
            result = `You Win! ${properCase(playerSelection)} beats ${properCase(computerSelection)}`;
            break;
        case (-1):
        case (2):
            result = `You Lose! ${properCase(computerSelection)} beats ${properCase(playerSelection)}`;
            break;
    }
    return result;
}

function game(loops) {
    for (var i = 0; i < loops; i++) {
        console.log('Start Loop ' + i);
        let computerSelection = computerPlay();
        console.log('Computer selection = ' + computerSelection);
        let playerSelection = getPlayerSelection();
        if (playerSelection === undefined) {
            alert('No input detected, skipping round');
            continue;
        }
        console.log('Player selection = ' + playerSelection);
        console.log('%c' + playRound(playerSelection, computerSelection), 'color: green');
    }
}

game(5);
