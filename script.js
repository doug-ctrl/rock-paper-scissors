/* ============================================================
   ROCK, PAPER, SCISSORS
============================================================ */

const WINNING_SCORE = 3
const CHOICES = ['rock', 'paper', 'scissors']

function showinstruction() {
  alert(
    '🪨📄✂️ Welcome to Rock, Paper, Scissors: Showdown!\n\n' +
      'Instructions:\n' +
      '- A pop-up box will ask you to type Rock, Paper, or Scissors each round.\n' +
      '- Choose rock, paper, or scissors.\n' +
      '- The computer will also make a choice.\n' +
      '- Rock beats scissors, scissors beats paper, and paper beats rock.\n' +
      '- First to reach 3 wins is the overall winner.\n\n' +
      'Important: This game has no visible page content, just uses your browser console to show round-by-round ' +
      'results and the running score, so keep it open while you play.\n' +
      'To open it: right-click the page → Inspect → Console tab (or press F12).\n\n' +
      'Good luck!',
  )
}

// returns a random choice for the computer: 'rock', 'paper' or 'scissors'
function computerPlay() {
  const index = Math.floor(Math.random() * CHOICES.length)
  return CHOICES[index]
}

// plays a single round and returns the result
function playRound(playerChoice, ComputerChoice) {
  if (playerChoice === ComputerChoice) {
    return {
      outcome: 'draw',
      message: `Draw! We both picked ${playerChoice}.`,
    }
  }

  const playerWinsAgainst = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  }

  if (playerWinsAgainst[playerChoice] === ComputerChoice) {
    return {
      outcome: 'player',
      message: `You win! ${playerChoice} beats ${ComputerChoice}.`,
    }
  }

  return {
    outcome: 'computer',
    message: `The computer wins this round! ${ComputerChoice} beats ${playerChoice}.`,
  }
}

function getPlayerChoice() {
  while (true) {
    const rawInput = prompt(
      'Enter your choice (rock, paper, scissors, cancel to quit):',
    )
    // prompt() returns null only when the user presses Cancel/Esc
    if (rawInput === null) {
      return null
    }

    const playerChoice = rawInput.trim().toLowerCase()

    if (CHOICES.includes(playerChoice)) {
      return playerChoice
    }

    alert('Invalid choice. Please enter rock, paper, or scissors.')
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

async function game() {
  console.log(
    `First to ${WINNING_SCORE} round wins takes the match. Draws score nothing. Here we go!\n`,
  )

  let playerScore = 0
  let computerScore = 0
  let roundNumber = 0

  while (playerScore < WINNING_SCORE && computerScore < WINNING_SCORE) {
    roundNumber++

    const playerChoice = getPlayerChoice()

    if (playerChoice === null) {
      alert('You quit the game. Thanks for playing!')
      return
    }

    const ComputerChoice = computerPlay()
    const roundOutcome = playRound(playerChoice, ComputerChoice)

    logRound(roundNumber, playerChoice, ComputerChoice, roundOutcome)

    if (roundOutcome.outcome === 'player') {
      playerScore++
    } else if (roundOutcome.outcome === 'computer') {
      computerScore++
    }
    // draws: no score change

    console.log(`Score — You: ${playerScore} | Computer: ${computerScore}\n`)

    // Hand control back to the browser for a moment so it can repaint
    // the console with this round's output before the next prompt()
    // blocks the thread again.
    await new Promise((resolve) => setTimeout(resolve, 0))
  }

  if (playerScore > computerScore) {
    console.log(
      `You win the match ${playerScore}-${computerScore}! ` +
        'The challenger bows out in defeat.',
    )
    alert(
      `You won the match ${playerScore}-${computerScore}! Check the console for the full battle log.`,
    )
  } else {
    console.log(
      `The computer wins the match ${computerScore}-${playerScore}. ` +
        'Better luck next time, challenger.',
    )
    alert(
      `The computer won the match ${computerScore}-${playerScore}. Refresh the page for a rematch!`,
    )
  }
}

showinstruction()
game()
