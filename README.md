# Pig Game

Welcome to the Pig Game! This is a simple two-player dice game implemented using HTML, CSS, and JavaScript. Players take turns rolling dice and accumulating scores, with the goal of reaching a score of 100 first.

## Features

- **Two-player mode**: Play against another player.
- **Dice rolling**: Randomly generate dice rolls and display the result.
- **Score tracking**: Keep track of the current and total scores for both players.
- **Player switching**: Automatically switch turns when rolling a 1.
- **Game reset**: Start a new game at any time.

## Usage

1. **Roll the Dice**:

   - Click the "Roll dice" button to roll the dice. If the dice roll is not 1, the value is added to the current score of the active player. If the dice roll is 1, the turn switches to the other player.

2. **Hold the Score**:

   - Click the "Hold" button to add the current score to the total score of the active player. If the total score reaches or exceeds 100, the active player wins and the game ends. Otherwise, the turn switches to the other player.

3. **Reset the Game**:
   - Click the "New game" button to reset the game and start over.

## Code Structure

- **index.html**: Contains the HTML structure of the game.
- **style.css**: Provides the styles and layout for the game interface.
- **script.js**: Implements the game logic, including dice rolling, score tracking, and player switching.
