/** @format */

const header = () => {
  const navBar = document.createElement("header");
  const resetLink = document.createElement("button");

  // apply class and ID
  navBar.setAttribute(
    "class",
    "header flex flex-dir-r flex-jc-sb flex-ai-c h3 m-3"
  );
  resetLink.setAttribute("class", "btn");

  resetLink.setAttribute("id", "reset-button");

  navBar.textContent = "RNG vs You - Ticcy Taccy Toey";
  resetLink.textContent = "Restart Game";

  navBar.append(resetLink);
  return navBar;
};

export default header;
