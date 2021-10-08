const ROCK_PAPER_SCISSORS = ['rock', 'paper', 'scissors'];
const RESULT = { player: 0, ai: 0, gamesPlayed: 0 };
const BUTTONS = document.querySelectorAll('button');

initializeGame();

function initializeGame() {
    BUTTONS.forEach(button => {
        button.addEventListener('click', startRound);
    });
}

function startRound(e) {
    resetSelections();
    let button = e.target;
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    let roundWinner = playRound(playerSelection, computerSelection);
    showSelections(roundWinner, this, computerSelection);
    updateCounter();
    checkWinner();
}

function playRound(playerSelection, computerSelection) {
    let roundWinner = null;
    let playerSelectionIndex = ROCK_PAPER_SCISSORS.indexOf(playerSelection.toLowerCase());
    let computerSelectionIndex = ROCK_PAPER_SCISSORS.indexOf(computerSelection);
    let indexDiff = playerSelectionIndex - computerSelectionIndex;
    switch (indexDiff) {
        case (0):
            text = `It's a draw! You both chose ${computerSelection}`;
            break;
        case (1):
        case (-2):
            RESULT.player += 1;
            roundWinner = 'player';
            text = `You Win! ${properCase(playerSelection)} beats ${properCase(computerSelection)}`;
            break;
        case (-1):
        case (2):
            RESULT.ai += 1;
            roundWinner = 'ai';
            text = `You Lose! ${properCase(computerSelection)} beats ${properCase(playerSelection)}`;
            break;
    }
    RESULT.gamesPlayed++;
    return roundWinner;
}

function showSelections(roundWinner, playerButton, computerSelection) {
    let computerButton = document.querySelector(`button[id=${computerSelection}]`);
    if (roundWinner == 'player') {
        playerButton.classList.add('winner');
        computerButton.classList.add('loser');
    } else if (roundWinner == 'ai') {
        playerButton.classList.add('loser');
        computerButton.classList.add('winner');
    } else {
        playerButton.classList.add('draw');
    }
}

function resetSelections() {
    BUTTONS.forEach(button => {
        button.classList.remove('winner', 'loser', 'draw');
    });
}

function updateCounter() {
    let playerCounter = document.querySelector('span[id=player-count]');
    let gamesCounter = document.querySelector('span[id=games-count]');
    let aiCounter = document.querySelector('span[id=computer-count]');
    playerCounter.textContent = RESULT.player;
    gamesCounter.textContent = RESULT.gamesPlayed;
    aiCounter.textContent = RESULT.ai;
}

function checkWinner() {
    let winner = getWinner();
    let message = '';
    if (winner === null) {
        return;
    } else if (winner === 'player') {
        message = 'Congrats, you\'ve won!'
    } else {
        message = 'Too bad, you\'ve lost!'
    }
    alert(message);
}

function getWinner() {
    let winner = null;
    if (RESULT.player === 5) {
        winner = 'player';
    } else if (RESULT.ai === 5) {
        winner = 'ai';
    }
    return winner;
}

function computerPlay() {
    return ROCK_PAPER_SCISSORS[Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length)];
}

function properCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}