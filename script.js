'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreDecrease = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //if no guess (si rien n'est dans l'input)

    displayMessage('Not a number');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (scoreDecrease > highscore) {
      highscore = scoreDecrease;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (scoreDecrease > 1) {
      //   document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too hight!' : 'To Low!';
      displayMessage(guess > secretNumber ? 'Too hight!' : 'To Low!');
      scoreDecrease--;
      document.querySelector('.score').textContent = scoreDecrease;
    } else {
      //   document.querySelector('.message').textContent = 'You loose !';
      document.querySelector('.score').textContent = '0';
      displayMessage('You loose !');
    }
  }

});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
//   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
