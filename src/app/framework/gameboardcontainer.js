/** @format */

const main = () => {
  const container = document.createElement("div");
  const gameboard = document.createElement("div");

  const startGame = document.createElement("button");

  const aiLevel = document.createElement("select");
  const chooseLevel = document.createElement("option");
  const pvp = document.createElement("option");
  const aiRNG = document.createElement("option");
  const aiMed = document.createElement("option");
  const aiHard = document.createElement("option");
  const aiUCANTWIN = document.createElement("option");
  2;

  container.setAttribute("class", "flex flex-dir-c flex-jc-c flex-ai-c");
  gameboard.setAttribute("class", "board");
  for (let i = 0; i < 9; i++) {
    let x = document.createElement("div");
    let y = document.createElement("span");
    x.setAttribute("id", `${i}`);
    x.setAttribute("class", "square");
    x.append(y);
    gameboard.append(x);
  }

  startGame.setAttribute("id", "start-button");
  startGame.setAttribute("class", "btn");
  aiLevel.setAttribute("name", "difficulty");
  aiLevel.setAttribute("class", "difficulty");
  chooseLevel.setAttribute("value", "none");
  pvp.setAttribute("value", "pvp");
  aiRNG.setAttribute("selected", "selected");
  aiRNG.setAttribute("value", "rng");
  aiMed.setAttribute("value", "med");
  aiHard.setAttribute("value", "hard");
  aiUCANTWIN.setAttribute("value", "neverwin");

  startGame.textContent = "Start Game";
  chooseLevel.textContent = "Choose a difficulty level for the AI";
  pvp.textContent = "PVP Battle";
  aiRNG.textContent = "RNG";
  aiMed.textContent = "Medium";
  aiHard.textContent = "Hard";
  aiUCANTWIN.textContent = "Unbeatable";

  aiLevel.append(chooseLevel, pvp, aiRNG, aiMed, aiHard, aiUCANTWIN);

  const winningMessage = document.createElement("div");
  const winnerText = document.createElement("div");
  const newGameButton = document.createElement("button");

  winningMessage.setAttribute("id", "winningMessage");
  winnerText.setAttribute("id", "winnerText");
  newGameButton.setAttribute("id", "new-game");
  winnerText.textContent = "Winner!";
  newGameButton.textContent = "New Game";

  winningMessage.append(winnerText, newGameButton);

  container.append(gameboard, startGame, aiLevel, winningMessage);
  return container;
};

export default main;
