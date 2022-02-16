/** @format */
import Gameboard from "./gameboard";

const renderBoard = (container, tictac, player) => {
  container.children[tictac].textContent = player;
};

export default renderBoard;
