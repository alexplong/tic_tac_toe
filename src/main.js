/** @format */

import header from "./app/framework/header";
import main from "./app/framework/gameboardcontainer";
import gameEvents from "./app/sandbox/eventsfunction";
import "./style.scss";

(() => {
  // framework
  const body = document.querySelector("body");
  body.append(header(), main()); // header

  // dom cache
  const board = document.querySelector(".board");
  const cells = document.querySelectorAll(".square");
  const restartGame = document.getElementById("reset-button");
  const startGame = document.getElementById("start-button");
  const newGame = document.getElementById("new-game");
  const difficulty = document.querySelector(".difficulty");
  const winningMessage = document.getElementById("winningMessage");

  gameEvents(
    board,
    cells,
    restartGame,
    startGame,
    newGame,
    difficulty,
    winningMessage
  );
})();
