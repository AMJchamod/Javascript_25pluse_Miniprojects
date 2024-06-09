const board = document.querySelector(".tickboard");
const squares = document.querySelectorAll(".square");
const message = document.querySelector(".message");
const restartBtn = document.querySelector(".resetbutton");
const players = ["X", "O"];

let currentPlayer = players[0];

message.textContent = `X's turn`;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if (squares[i].textContent !== "" || checkWinner(currentPlayer)) {
      return;
    }

    squares[i].textContent = currentPlayer;  //  wright the player sign

    if (currentPlayer === "X") {
        squares[i].style.color = "red"; // Set color to red for player "X"
      } else {
        squares[i].style.color = "blue"; // Set color to blue for player "O" (optional)
      }
  

    if (checkWinner(currentPlayer)) {
      message.textContent = `Game Over. ${currentPlayer} wins the game ! Please restart`;
      message.style.color ="red"; // change colors in massage
      return;
    }

    if (checkTieResult()) {
      message.textContent = `Game tied ! Please restart`;
      return;
    }

    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];

    if (currentPlayer === players[0]) {
      message.textContent = `X's Turn`;
      message.style.color ="red";
    } else {
      message.textContent = `O's Turn`;
      message.style.color ="red";
    }
  });
}

function checkWinner(currentPlayer) {
  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];

    if (
      squares[a].textContent === currentPlayer &&
      squares[b].textContent === currentPlayer &&
      squares[c].textContent === currentPlayer
    ) {
      return true;
    }
  }

  return false;
}

function checkTieResult() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === "") {
      return false;
    }
  }

  return true;
}

function restartGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }

  message.textContent = `X's turn`;
  currentPlayer = players[0];
}

restartBtn.addEventListener("click", () => {
  restartGame();
});