// Rock, Paper, Scissors Game

const WINNING_SCORE = 3;
const validChoices = ['rock', 'paper', 'scissors'];

function showinstruction() {
    alert("Welcome to Rock, Paper, Scissors!\n\nInstructions:\n- Choose rock, paper, or scissors.\n- The computer will also make a choice.\n- Rock beats scissors, scissors beats paper, and paper beats rock.\n- First to reach 3 wins is the overall winner. Good luck!");
}

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const computerSelection = computerPlay();
const playerSelection = prompt("Enter your choice (rock, paper, or scissors):")?.trim().toLowerCase();

if (!validChoices.includes(playerSelection)) {
    alert("Invalid choice. Please enter rock, paper, or scissors.");
} else {
    showinstruction();
}

