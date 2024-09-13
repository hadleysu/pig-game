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
  activeplayer = false;
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
  (activeplayer ? currentScore1El : currentScore0El).textContent = 0;
  activeplayer = !activeplayer;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const handleDiceRoll = function (dice) {
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    (activeplayer ? currentScore1El : currentScore0El).textContent =
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
  activeplayer
    ? player1El.classList.add('player--winner')
    : player0El.classList.add('player--winner');
  activeplayer
    ? player1El.classList.remove('player--active')
    : player0El.classList.remove('player--active');
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
    activeplayer
      ? (totalScore[1] += currentScore)
      : (totalScore[0] += currentScore);
    activeplayer
      ? (score1El.textContent = totalScore[1])
      : (score0El.textContent = totalScore[0]);
    // Check if player's total score is >= 100
    if (activeplayer && totalScore[1] >= 100) {
      currentPlayerWins();
    } else if (!activeplayer && totalScore[0] >= 100) {
      currentPlayerWins();
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

// User resets game
btnNewEl.addEventListener('click', init);
