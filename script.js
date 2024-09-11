'use strict';

const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const btnNewEl = document.querySelector('.btn--new');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

let score;

// Initialize the game
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
};
init();

// User rolls dice
btnRollEl.addEventListener('click', function () {
  score = Math.trunc(Math.random() * 6 + 1);
  console.log(score);
});
