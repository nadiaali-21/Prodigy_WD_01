const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let running = true;

const winConditions = [
  [0,1,2], [3,4,5], [6,7,8], 
  [0,3,6], [1,4,7], [2,5,8], 
  [0,4,8], [2,4,6]
];

function initializeGame(){
  cells.forEach(cell => cell.addEventListener("click", cellClicked));
  resetBtn.addEventListener("click", resetGame);
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function cellClicked(){
  const index = this.getAttribute("data-index");
  if(board[index] !== "" || !running) return;
  
  updateCell(this, index);
  checkWinner();
}

function updateCell(cell, index){
  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add("taken");
}

function changePlayer(){
  currentPlayer = (currentPlayer === "X") ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner(){
  let roundWon = false;

  for(let condition of winConditions){
    const [a,b,c] = condition;
    if(board[a] && board[a] === board[b] && board[a] === board[c]){
      roundWon = true;
      break;
    }
  }

  if(roundWon){
    statusText.textContent = `Player ${currentPlayer} wins! 🎉`;
    running = false;
  } else if(!board.includes("")){
    statusText.textContent = "It's a Draw! 🤝";
    running = false;
  } else {
    changePlayer();
  }
}

function resetGame(){
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  running = true;
  statusText.textContent = `Player ${currentPlayer}'s turn`;
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("taken");
  });
}

initializeGame();
