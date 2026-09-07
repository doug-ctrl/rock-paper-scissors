/* ============================================================
   ROCK, PAPER, SCISSORS
============================================================ */

const WINNING_SCORE = 3;
const validChoices = ['rock', 'paper', 'scissors'];
const CHOICES = ['rock', 'paper', 'scissors'];

function showinstruction() {
    alert("Welcome to Rock, Paper, Scissors!\n\nInstructions:\n- Choose rock, paper, or scissors.\n- The computer will also make a choice.\n- Rock beats scissors, scissors beats paper, and paper beats rock.\n- First to reach 3 wins is the overall winner. Good luck!");
}

// returns a random choice for the computer: 'rock', 'paper' or 'scissors'
function computerPlay() {
  const index = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[index];
}

// show instructions then run a single prompt-based round
showinstruction();

const computerSelection = computerPlay();
console.log('Computer chose:', computerSelection);
const playerSelection = prompt("Enter your choice (rock, paper, or scissors):")?.trim().toLowerCase();

if (!validChoices.includes(playerSelection)) {
    alert("Invalid choice. Please enter rock, paper, or scissors.");
} else {
    // Valid selection — original branch showed instructions after validation; kept flow but instructions already shown above
}

