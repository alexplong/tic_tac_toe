/** @format */
import gameAI from "./ai";
import renderBoard from "./render";

const gameEvents = (
  board,
  cells,
  restartGame,
  startGame,
  difficulty,
  winningMessage
) => {
  const X_CLASS = "x";
  const O_CLASS = "o";
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let circleTurn;

  const _startGame = () => {
    console.log(difficulty.value);
    if (difficulty.value == "pvp") {
      circleTurn = false;
      cells.forEach((cell) => {
        cell.addEventListener("click", _handleClick, { once: true });
        cell.classList.add("click");
      });
      _setHoverStatus();
    }

    if (difficulty.value != "pvp") {
      circleTurn = false;
      cells.forEach((cell) => {
        cell.addEventListener("click", _pveClick, { once: true });
        cell.classList.add("pve");
      });
    }
  };

  const _handleClick = (e) => {
    const cell = e.target;
    const currentClass = circleTurn ? O_CLASS : X_CLASS;
    _placeMark(cell, currentClass);
    _swapTurns();
    _setHoverStatus();
    if (_checkWinner(currentClass)) {
      winningMessage.children[0].textContent = `${currentClass} is the WINNER!`;
      winningMessage.classList.add("show");
    }
    //check for draw
  };

  const _pveClick = (e) => {
    const cell = e.target;
    const currentClass = circleTurn ? O_CLASS : X_CLASS;
    _placeMark(cell, currentClass);
    gameAI.AI(cells, difficulty.value);
  };

  const _placeMark = (cell, currentClass) => {
    cell.classList.add(currentClass);
    cell.classList.remove("click");
    cell.classList.remove("pve");
  };

  const _swapTurns = () => {
    circleTurn = !circleTurn;
  };

  const _setHoverStatus = () => {
    board.classList.remove(X_CLASS);
    board.classList.remove(O_CLASS);
    if (circleTurn) {
      board.classList.add(O_CLASS);
    } else {
      board.classList.add(X_CLASS);
    }
  };

  const _checkWinner = (currentClass) => {
    return WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => {
        return cells[index].classList.contains(currentClass);
      });
    });
  };
  // functional event listeners

  restartGame.addEventListener("click", (event) => {
    Gameboard.restartGame();
  });

  startGame.addEventListener("click", (event) => {
    _startGame();
  });

  // startGame.addEventListener("click", (event) => {
  //   let difficulty = document.querySelector(".difficulty");

  //   if (difficulty.value === "none") {
  //     console.log("Please select an AI difficulty level.");
  //   } else {
  //     // gameContainer.classList.add(difficulty.value);
  //     gameContainer.setAttribute("data-difficulty", difficulty.value);
  //     let grids = document.querySelectorAll(".square");
  //     grids.forEach((grid) => {
  //       grid.classList.add("click");
  //     });
  //   }
  // });

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
