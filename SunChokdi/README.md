# Tic Tac Toe Game

This is a simple Tic Tac Toe game implemented using HTML, CSS, and JavaScript. It features a 3x3 grid where two players take turns placing their symbols (X and O) to achieve three in a row.

---

## Features

1. **Interactive Gameplay:**
   - Two players (Player 1 and Player 2) take turns to play.
   - The turn is displayed dynamically on the screen.

2. **Winning Highlight:**
   - The winning combination is highlighted in yellow when a player wins.

3. **Reset Functionality:**
   - A reset button is provided to start a new game.

4. **Stylish Design:**
   - The board and symbols (X and O) have custom styling using CSS.
   - Hover effects are implemented for the boxes and the reset button.

---

## Files Included

### HTML
The structure of the game is defined in the `index.html` file. It includes:
- A board with 9 interactive boxes.
- A reset button to start a new game.
- A turn indicator for players.

### CSS
The styles are defined in the `MeraStyleHai.css` file:
- Custom fonts from Google Fonts.
- Board and symbol designs.
- Dynamic styling for hover and active states.

### JavaScript
The game logic is implemented in the `script.js` file:
- Turn-based gameplay logic.
- Win detection using a `RuleBook` function.
- Dynamic updates to the UI for moves and turns.
- Reset functionality using `location.reload()`.

---

## How to Play

1. Open the `index.html` file in any modern web browser.
2. Player 1 begins the game and places their symbol (X) by clicking on any available box.
3. Player 2 then places their symbol (O) by clicking on another available box.
4. The game alternates between the players until one achieves a winning combination or all boxes are filled.
5. Click the "Again" button to reset the game and start over.

---

## Winning Conditions

The game checks for the following winning combinations:
- Horizontal rows (Top, Middle, Bottom)
- Vertical columns (Left, Middle, Right)
- Diagonals (Top-left to Bottom-right, Top-right to Bottom-left)

If a player achieves any of these, their winning combination is highlighted in yellow.

---

## Customization

You can:
1. Modify the styles in `MeraStyleHai.css` to customize the appearance.
2. Add more features like AI for single-player mode, sound effects, or a scoreboard.
3. Enhance the reset button functionality to clear the board without reloading the page.

---

## Dependencies

- Google Font: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)

---

## Future Enhancements

- Add single-player mode with AI.
- Display a scoreboard to track wins, losses, and draws.
- Improve responsiveness for mobile devices.

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/siddharth-09/Web-Projects.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SunChokdi
   ```
3. Open the `index.html` file in your browser to start playing.

---

## Contributing

Contributions are welcome! If you have ideas or improvements, feel free to fork the repository and submit a pull request.

---

## Author

This project was created as a fun and interactive way to practice web development skills. Contributions and suggestions are welcome!

