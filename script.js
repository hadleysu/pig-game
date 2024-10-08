'use strict';

const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const btnNewEl = document.querySelector('.btn--new');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScore;
let totalScore;
let activePlayer;
let playing;

// Initialize the game
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  currentScore = 0;
  totalScore = [0, 0];
  activePlayer = 0; // Initialize 0 for player 0
  playing = true;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
};

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const handleDiceRoll = function (dice) {
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch player
    switchPlayer();
  }
};

const currentPlayerWins = function () {
  // Finish the game
  playing = false;
  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
};

// User rolls dice
btnRollEl.addEventListener('click', function () {
  // 1. Generating a random dice roll
  if (playing) {
    let dice = Math.trunc(Math.random() * 6 + 1);

    // 2. Display dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    // 3. Check for rolled 1
    handleDiceRoll(dice);
  }
});

// User handles score
btnHoldEl.addEventListener('click', function () {
  // Add curent score to total score
  if (playing) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    // Check if player's total score is >= 100
    if (totalScore[activePlayer] >= 100) {
      currentPlayerWins();
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

// User resets game
btnNewEl.addEventListener('click', init);
