/* ============================================================
   ROCK, PAPER, SCISSORS
============================================================ */

const WINNING_SCORE = 3
const CHOICES = ['rock', 'paper', 'scissors']

function showinstruction() {
  alert(
    'Welcome to Rock, Paper, Scissors!\n\nInstructions:\n- Choose rock, paper, or scissors.\n- The computer will also make a choice.\n- Rock beats scissors, scissors beats paper, and paper beats rock.\n- First to reach 3 wins is the overall winner. Good luck!',
  )
}

// returns a random choice for the computer: 'rock', 'paper' or 'scissors'
function computerPlay() {
  const index = Math.floor(Math.random() * CHOICES.length)
  return CHOICES[index]
}

// plays a single round and returns the result
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return {
      outcome: 'draw',
      message: `Draw! We both picked ${playerSelection}.`,
    }
  }

  const playerWinsAgainst = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  }

  if (playerWinsAgainst[playerSelection] === computerSelection) {
    return {
      outcome: 'player',
      message: `You win! ${playerSelection} beats ${computerSelection}.`,
    }
  }

  return {
    outcome: 'computer',
    message: `The computer wins this round! ${computerSelection} beats ${playerSelection}.`,
  }
}

// show instructions then run a single prompt-based round
showinstruction()

const computerSelection = computerPlay()
console.log('Computer chose:', computerSelection)
const rawInput = prompt('Enter your choice (rock, paper, or scissors):')
  ?.trim()
  .toLowerCase()

if (rawInput === null) {
  alert('You quit the game. Thanks for playing!')
} else {
  const playerSelection = rawInput.trim().toLowerCase()

  if (!CHOICES.includes(playerSelection)) {
    alert('Invalid choice. Please enter rock, paper, or scissors.')
  } else {
    const result = playRound(playerSelection, computerSelection)
    console.log(result.message)
  }
}

/**
 * Logs one round's details to the console in a friendly, readable way.
 */
function logRound(roundNumber, playerChoice, computerChoice, roundOutcome) {
  console.log(`— Round ${roundNumber} —`)
  console.log(`You picked:      ${playerChoice}`)
  console.log(`Computer picked: ${computerChoice}`)
  console.log(roundOutcome.message)
}

function game() {
  console.log(
    `First to ${WINNING_SCORE} round wins takes the match. Draws score nothing. Here we go!\n`,
  )

  let playerScore = 0
  let computerScore = 0
  let roundNumber = 0

  while (playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
    roundNumber++

    const roundOutcome = playRound(playerSelection, computerSelection)

    logRound(roundNumber, playerSelection, computerSelection, roundOutcome)

    if (roundOutcome.outcome === 'player') {
      playerScore++
    } else if (roundOutcome.outcome === 'computer') {
      computerScore++
    }
    // draws: no score change

    console.log(`Score — You: ${playerScore} | Computer: ${computerScore}\n`)
  }
  if (playerScore > computerScore) {
    console.log(
      ` You win the match ${playerScore}-${computerScore}! ` +
        'The challenger bows out in defeat.',
    )
    alert(
      ` You won the match ${playerScore}-${computerScore}! Check the console for the full battle log.`,
    )
  } else {
    console.log(
      ` The computer wins the match ${computerScore}-${playerScore}. ` +
        'Better luck next time, challenger.',
    )
    alert(
      ` The computer won the match ${computerScore}-${playerScore}. Refresh the page for a rematch!`,
    )
  }
}

game()
