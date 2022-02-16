/** @format */

const main = () => {
  const container = document.createElement("div");
  const gameboard = document.createElement("div");

  const startGame = document.createElement("button");

  const aiLevel = document.createElement("select");
  const chooseLevel = document.createElement("option");
  const aiRNG = document.createElement("option");
  const aiMed = document.createElement("option");
  const aiHard = document.createElement("option");
  const aiUCANTWIN = document.createElement("option");
  2;

  container.setAttribute("class", "flex flex-dir-c flex-jc-c flex-ai-c");
  gameboard.setAttribute("class", "gameboard-container");
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
  aiRNG.setAttribute("selected", "selected");
  aiRNG.setAttribute("value", "rng");
  aiMed.setAttribute("value", "med");
  aiHard.setAttribute("value", "hard");
  aiUCANTWIN.setAttribute("value", "neverwin");

  startGame.textContent = "Start Game";
  chooseLevel.textContent = "Choose a difficulty level for the AI";
  aiRNG.textContent = "RNG";
  aiMed.textContent = "Medium";
  aiHard.textContent = "Hard";
  aiUCANTWIN.textContent = "Unbeatable";

  aiLevel.append(chooseLevel, aiRNG, aiMed, aiHard, aiUCANTWIN);

  container.append(gameboard, startGame, aiLevel);
  return container;
};

export default main;
