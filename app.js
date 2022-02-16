

(function() {

  // cache DOM
  const board = document.querySelector('.gameboard-container');
  const reset = document.querySelector('.reset-button');

  // load the available moves from Array to DOM
  Gameboard.availableMove();

  const _catchEvent = (e) => {
    Gameboard.availableMove(e);
  };
  
  // event listeners
  reset.addEventListener('click', Gameboard.resetBoard);
  board.addEventListener('click', (e) => {if(e.target.classList[0] === 'click') return _catchEvent(e)});
})();
