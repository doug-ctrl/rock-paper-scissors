/* ============================================================
   ROCK, PAPER, SCISSORS
============================================================ */

const CHOICES = ['Rock', 'Paper', 'Scissors'];

// returns a random choice for the computer: 'Rock', 'Paper' or 'Scissors'
function computerPlay() {
  const index = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[index];
}


// open the browser, then dev tools, refresh the page to see the random choice 
console.log(computerPlay());