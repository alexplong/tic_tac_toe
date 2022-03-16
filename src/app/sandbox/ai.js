/** @format */

import Gameboard from "./gameboard";

const gameAI = (() => {
  // private methods
  const _isNull = (value) => {
    return value.turn === null;
  };

  const _isXO = (value) => {
    return value.turn === "X" || value.turn === "O";
  };

  // public methods

  const AI = (cells, difficulty) => {
    if (difficulty === "rng") {
      let options = cells.forEach((cell, index) => {
        // console.log(cell.classList.contains("pve"));
      });
      console.log(options);
      // console.log(cells.classList.contains("pve"));
      // let options = currentBoard.filter(_isNull);
      let selector = Math.floor(Math.random() * options.length);
      let rngSelection = options[selector].id;
      Gameboard.makeMove(rngSelection, "O");
      return rngSelection;
    }
  };

  return {
    AI,
  };
})();

export default gameAI;
