/** @format */

import header from "./app/framework/header";
import main from "./app/framework/gameboardcontainer";
import Gameboard from "./app/sandbox/gameboard";
import playerOne from ".//app/sandbox/player";
import gameAI from ".//app/sandbox/ai";
import renderBoard from "./app/sandbox/render";
import "./style.scss";

(() => {
  // framework
  const body = document.querySelector("body");
  body.append(header(), main()); // header

  // dom cache
  const gameContainer = document.querySelector(".gameboard-container");
  const restartGame = document.getElementById("reset-button");
  const startGame = document.getElementById("start-button");

  // functional event listenres
  restartGame.addEventListener("click", (event) => {
    Gameboard.restartGame();
  });

  startGame.addEventListener("click", (event) => {
    let difficulty = document.querySelector(".difficulty");

    if (difficulty.value === "none") {
      console.log("Please select an AI difficulty level.");
    } else {
      // gameContainer.classList.add(difficulty.value);
      gameContainer.setAttribute("data-difficulty", difficulty.value);
      let grids = document.querySelectorAll(".square");
      grids.forEach((grid) => {
        grid.classList.add("click");
      });
    }
  });

  gameContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("click")) {
      playerOne.myMove(event.target.id);
      event.target.classList.remove("click");
      renderBoard(gameContainer, event.target.id, "X");
      Gameboard.checkWin();

      setTimeout(function () {
        let x = gameAI.AI(event.target.parentNode.dataset.difficulty);
        gameContainer.children[x].classList.remove("click");
        renderBoard(gameContainer, x, "O");
        Gameboard.checkWin();
      }, 1000);
    }
  });
})();
