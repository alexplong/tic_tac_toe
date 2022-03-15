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
  const gameContainer = document.querySelector(".gameboard-container");
  const restartGame = document.getElementById("reset-button");
  const startGame = document.getElementById("start-button");

  gameEvents(gameContainer, restartGame, startGame);
})();
