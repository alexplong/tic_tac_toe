/** @format */
import Gameboard from "./gameboard";
import playerOne from "./player";
import gameAI from "./ai";
import renderBoard from "./render";

const gameEvents = (gameContainer, restartGame, startGame) => {
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

  // gameContainer.addEventListener("click", (event) => {
  //   if (event.target.classList.contains("click")) {
  //     playerOne.myMove(event.target.id);
  //     event.target.classList.remove("click");
  //     renderBoard(gameContainer, event.target.id, "X");
  //     Gameboard.checkWin();

  //     setTimeout(function () {
  //       let x = gameAI.AI(event.target.parentNode.dataset.difficulty);
  //       gameContainer.children[x].classList.remove("click");
  //       renderBoard(gameContainer, x, "O");
  //       Gameboard.checkWin();
  //     }, 1000);
  //   }
  // });
};

export default gameEvents;
