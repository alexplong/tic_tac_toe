/** @format */
import Gameboard from "./gameboard";

const playerOne = (() => {
  const myMove = (selection) => {
    Gameboard.makeMove(selection, "X");
  };

  return {
    myMove,
  };
})();

export default playerOne;
