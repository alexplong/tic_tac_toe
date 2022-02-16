const Gameboard = (() => {

  const playerOne = "X";
  const playerTwo = "O";

  let grid = [
    {id: 0, turn: null},{id: 1, turn: null},{id: 2, turn: null},
    {id: 3, turn: null},{id: 4, turn: null},{id: 5, turn: null},
    {id: 6, turn: null},{id: 7, turn: null},{id: 8, turn: null},
  ];

  // cache DOM
    const square = document.querySelectorAll('.square');
    const notify = document.querySelector('.notify');
    const winAlert = document.querySelector('.winner-announce')
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')


  // _private methods
  const _makeGrid = () => {
    return [
      {id: 0, turn: null},{id: 1, turn: null},{id: 2, turn: null},
      {id: 3, turn: null},{id: 4, turn: null},{id: 5, turn: null},
      {id: 6, turn: null},{id: 7, turn: null},{id: 8, turn: null},
    ];
  }

  const _isNull = (value) => {
    return value.turn === null;
  }

  const _isXO = (value) => {
    return value.turn === 'X' || value.turn === "O"
  }

  const _render = () => {
    grid.forEach((item, index) => {
            if (item.turn === null)      {square[index].children[0].textContent = " "; square[index].classList.toggle('no-click', false)} 
            if (item.turn === playerOne) {square[index].children[0].textContent = "X"; square[index].classList.toggle('no-click', true)}
            if (item.turn === playerTwo) {square[index].children[0].textContent = "O"; square[index].classList.toggle('no-click', true)}
      }) 

      let turn = grid.filter(_isNull);
      if(turn.length % 2 > 0) {notify.textContent = "Your turn bruvs"}
                         else {notify.textContent = "Let the AI choose a spot by clicking anywhere on the open board"}
      if(turn.length === 9)   {notify.textContent = "Hey You! Player One! Make the first bruvs"}
  }

  const _closePop = () => {
    winAlert.classList.toggle('none', true)
  }

  const _triggerWin = (winner) => {
    console.log(winner)
    let player = null;
    if(winner === "XXX") {player = "Player One"}
    if(winner === "OOO") {player = "AI"}
    if(winner === "draw") {player = "NOBODY"}

    winAlert.children[0].textContent = `${player} WINS!!!`
    winAlert.classList.toggle('none')
    winAlert.children[1].addEventListener('click', () => {grid = _makeGrid()
                                                         _closePop()
                                                         _render()})
    winAlert.children[2].addEventListener('click', () => _closePop())
  }

  const _checkWinner = () => {

    if(grid[0].turn !== null && grid[0].turn === grid[1].turn && grid[0].turn === grid[2].turn)  {_triggerWin(grid[0].turn + grid[1].turn + grid[2].turn)}
    if(grid[3].turn !== null && grid[3].turn === grid[4].turn && grid[3].turn === grid[5].turn)  {_triggerWin(grid[3].turn + grid[4].turn + grid[5].turn)}
    if(grid[6].turn !== null && grid[6].turn === grid[7].turn && grid[6].turn === grid[8].turn)  {_triggerWin(grid[6].turn + grid[7].turn + grid[8].turn)}
    if(grid[0].turn !== null && grid[0].turn === grid[3].turn && grid[0].turn === grid[6].turn)  {_triggerWin(grid[0].turn + grid[3].turn + grid[6].turn)}
    if(grid[1].turn !== null && grid[1].turn === grid[4].turn && grid[1].turn === grid[7].turn)  {_triggerWin(grid[1].turn + grid[4].turn + grid[7].turn)}
    if(grid[2].turn !== null && grid[2].turn === grid[5].turn && grid[2].turn === grid[6].turn)  {_triggerWin(grid[2].turn + grid[5].turn + grid[6].turn)}
    if(grid[0].turn !== null && grid[0].turn === grid[4].turn && grid[0].turn === grid[8].turn)  {_triggerWin(grid[0].turn + grid[4].turn + grid[8].turn)}
    if(grid[2].turn !== null && grid[2].turn === grid[4].turn && grid[2].turn === grid[6].turn)  {_triggerWin(grid[2].turn + grid[4].turn + grid[6].turn)}
    if(grid.filter(_isXO).length === 9) {_triggerWin("draw")}
  }

  const _runAI = () => {
    let options = grid.filter(_isNull);
    let selector = Math.floor(Math.random() * options.length);
    let aiID = options[selector].id;
    return aiID;
  }

  const _turn = (turn, e) => {
    console.log(e)
    if (e !== undefined) {
      if (turn === "one"){
        let x = e.target.id;
        grid[x].turn = playerOne
      } else {
        let x = _runAI();
        grid[x].turn = playerTwo
        }
    }
  }

  const _checkTurn = (e) => {
    let turn = Number(grid.length - grid.filter(_isXO).length);
        if (turn == 1 || turn % 2 !== 0) {_turn("one", e)} 
                                    else {_turn("two", e)}
     _checkWinner();
  }
  
  // public methods
    const availableMove = (e) => {
    _checkTurn(e)
    _render()
  }
 
  const resetBoard = () => {
     grid = _makeGrid()
    _checkTurn();
    _render();
  }

  return {availableMove, resetBoard}
})();



