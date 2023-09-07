'use strict';

//Create the secret number that we are looking for.
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//give an initial score & highscore

let score = 20;
let highscore = 0;

//Check-Button response code
//js engine will call the function, as soon as the event happen.
//every input is generally a string in js, so we need to convert it using Number() into a number.

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //if guess=0
    displayMessage('⛔ NO Number');
  } else if (guess === secretNumber) {
    //in case player wins the game
    displayMessage('🎉Correct Number🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    // guess is not same secret number
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!!' : '📉Too low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👎 You Lost the game!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Again-Button response code
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
