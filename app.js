/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer answer if they lose
- Let player choose to play again
*/

let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxnum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxnum.textContent = max;

// Listen for guess 
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if Won
  if (guess === winningNum) {
    // Game over - WON
    gameOver(true, `${winningNum} is correct, YOU WIN!`)

  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // game over LOST
      gameOver(false, `Game over, you lost. The correct number was ${winningNum}!`);

    } else {
      // game Continues - Answer wrong

      // change border to green
      guessInput.style.borderColor = 'red';

      // clear Input
      guessInput.value = '';

      // Tell user its wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable input
  guessInput.disabled = true;
  // change border to green
  guessInput.style.borderColor = color;
  // Set text color to green
  message.style.color = color;
  // Set winning message
  setMessage(msg);
}


// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}