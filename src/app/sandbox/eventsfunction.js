/** @format */
import Gameboard from "./gameboard";
import renderBoard from "./render";

const gameEvents = (
  board,
  cells,
  restartGame,
  startGame,
  newGame,
  difficulty,
  winningMessage
) => {
  const X_CLASS = "x";
  const O_CLASS = "o";
  const BOARD = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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

  const _newGame = () => {
    cells.forEach((cell) => {
      cell.classList.remove("x", "o", "click", "pve");
    });
    winningMessage.classList.remove("show");
    winningMessage.children[0].textContent = "";
  };

  const _startGame = () => {
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
        cell.classList.add("click", "pve");
      });
      _setHoverStatus();
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
    // place user mark
    _placeMark(cell, currentClass);

    // check for win
    if (_checkWinner(currentClass)) {
      winningMessage.children[0].textContent = `${currentClass} is the WINNER!`;
      winningMessage.classList.add("show");
    } else {
      // check for draw
      // swap turns

      // place ai mark
      setTimeout(function () {
        _rngAI(O_CLASS);
      }, 500);
      // check for win
      // check for draw
      // swap turns
      // _swapTurns();
      // _setHoverStatus();
    }
  };

  const _rngAI = (O_CLASS) => {
    // check board for classlist containing pve/click, place index #'s into Array
    let options = BOARD.filter((index) =>
      cells[index].classList.contains("pve")
    );
    // Math.random to pick random index # from array
    let target = Math.floor(Math.random() * options.length);
    // console.log(cells[options[target]]);

    // place AI mark at cell
    _placeMark(cells[options[target]], O_CLASS);
    if (_checkWinner(O_CLASS)) {
      winningMessage.children[0].textContent = `${O_CLASS} is the WINNER!`;
      winningMessage.classList.add("show");
    }
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

  restartGame.addEventListener("click", (event) => {
    // Gameboard.restartGame(); // change
  });

  startGame.addEventListener("click", (event) => {
    _startGame();
  });

  newGame.addEventListener("click", (event) => {
    _newGame();
    console.log("click");
  });
};

export default gameEvents;
