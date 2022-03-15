/** @format */
import { render } from "mustache";
import "../../main";

const Gameboard = (() => {
  let grid = [
    { id: 0, turn: null },
    { id: 1, turn: null },
    { id: 2, turn: null },
    { id: 3, turn: null },
    { id: 4, turn: null },
    { id: 5, turn: null },
    { id: 6, turn: null },
    { id: 7, turn: null },
    { id: 8, turn: null },
  ];

  const _resetGrid = () => {
    return [
      { id: 0, turn: null },
      { id: 1, turn: null },
      { id: 2, turn: null },
      { id: 3, turn: null },
      { id: 4, turn: null },
      { id: 5, turn: null },
      { id: 6, turn: null },
      { id: 7, turn: null },
      { id: 8, turn: null },
    ];
  };

  const _isNull = (value) => {
    return value.turn === null;
  };

  const _isXO = (value) => {
    return value.turn === "X" || value.turn === "O";
  };

  const _checkWinner = () => {
    let winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // each new move replaces #'s in winners with player and then join/concat === XXX || OOO > game win

    winners.forEach((win) => {
      // console.log((grid[win[0]].turn, grid[win[1]].turn, grid[win[2]].turn));
    });
  };

  const _reduceBoard = () => {
    let winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let xzones = grid.filter((element) => element.turn === "X");
    let ozones = grid.filter((element) => element.turn === "O");

    let xwin = xzones.map((element) => element.id);
    let owin = ozones.map((element) => element.id);
    
  };

  const currBoard = () => {
    return grid;
  };

  const makeMove = (selection, player) => {
    // console.log(selection, player);
    // console.log(grid);
    grid[selection].turn = player;
    _reduceBoard();
  };

  const restartGame = () => {
    grid = _resetGrid();
  };

  const checkWin = () => {
    _checkWinner();
  };

  return {
    currBoard,
    makeMove,
    restartGame,
    checkWin,
  };
})();

export default Gameboard;
