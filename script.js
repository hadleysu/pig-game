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
let whichPlayer;

// Initialize the game
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  currentScore = 0;
  totalScore = [0, 0];
  whichPlayer = false;
};

init();

const handleDiceRoll = function (dice) {
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    (whichPlayer ? currentScore1El : currentScore0El).textContent =
      currentScore;
  } else {
    // Switch player
    currentScore = 0;
    (whichPlayer ? currentScore1El : currentScore0El).textContent = 0;
    whichPlayer = !whichPlayer;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};

// User rolls dice
btnRollEl.addEventListener('click', function () {
  // 1. Generating a random dice roll
  let dice = Math.trunc(Math.random() * 6 + 1);

  // 2. Display dice
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  // 3. Check for rolled 1
  handleDiceRoll(dice);
});
