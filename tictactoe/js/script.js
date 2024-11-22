var board = ["", "", "", "", "", "", "", "", ""]; // this is the board spaces

var currentPlayer = "X"; // Player 1 = "X"


var gameActive = true; // track if the game is still going





/* && MEANS THIS IS ONLY TRUE IF EVERYTHING IN THERE IS RUE */


// box 1

function box1() {
  if (board[0] === "" && gameActive) { // THIS IS TO SEE IF THE BOX IS EMPTY AND IF ITS WORKING
    board[0] = currentPlayer;
    document.getElementById("box1").innerText = currentPlayer;
    checkGame(); // the function for this is lower in the doc
    switchPlayer(); // the function for this is lower in the doc
  }
}



// box 2
function box2() {
  if (board[1] === "" && gameActive) {
    board[1] = currentPlayer;
    document.getElementById("box2").innerText = currentPlayer;
    checkGame();
    switchPlayer();
  }
}



// box 3
function box3() {
  if (board[2] === "" && gameActive) {
    board[2] = currentPlayer;
    document.getElementById("box3").innerText = currentPlayer;
    checkGame();
    switchPlayer();
  }
}



// box 4
function box4() {
  if (board[3] === "" && gameActive) {
    board[3] = currentPlayer;
    document.getElementById("box4").innerText = currentPlayer;
    checkGame();
    switchPlayer();
  }
}



// box 5
function box5() {
  if (board[4] === "" && gameActive) {
    board[4] = currentPlayer;
    document.getElementById("box5").innerText = currentPlayer;
    checkGame();
    switchPlayer();
  }
}



// box 6
function box6() {
  if (board[5] === "" && gameActive) {
    board[5] = currentPlayer;
    document.getElementById("box6").innerText = currentPlayer;
    checkGame();
    switchPlayer();
  }
}



// box 7
function box7() {
  if (board[6] === "" && gameActive) {
    board[6] = currentPlayer;
    document.getElementById("box7").innerText = currentPlayer;
    checkGame();
    switchPlayer();
  }
}


// box 8
function box8() {
  if (board[7] === "" && gameActive) {
    board[7] = currentPlayer;
    document.getElementById("box8").innerText = currentPlayer;
    checkGame();
    switchPlayer();
  }
}



// box 9
function box9() {
  if (board[8] === "" && gameActive) {
    board[8] = currentPlayer;
    document.getElementById("box9").innerText = currentPlayer;
    checkGame();
    switchPlayer();
  }
}




// switch players
function switchPlayer() {
  if (gameActive) { // if the game its still working 
    currentPlayer = currentPlayer === "X" ? "O" : "X";  // go between x and o
    document.getElementById("turn").innerText = "Player " + (currentPlayer === "X" ? "1" : "2"); // change the turn status to the right player
  }
}




// check for win or draw
function checkGame() {
  

  // Winning combos

  var winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];




  for (var i = 0; i < winPatterns.length; i++) { //Loops through the winPatterns array
    var [a, b, c] = winPatterns[i]; // get "a, b, and c" that make up this win combo


/*  == IS WHEN THEY MEAN THE SAME THING AND === THEY ARE THE SAME THING */
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      document.getElementById("turn").innerText = "Player " + (currentPlayer === "X" ? "1" : "2") + " Wins!";
      gameActive = false;
      return;
    }
  }

  // Check for a draw
  if (!board.includes("")) {
    document.getElementById("turn").innerText = "It's a Draw!"; // change the text to say its a draw
    gameActive = false; // if the combo is a draw then its not working. the game is done
  }
}

// restart the game
function restart() {
  board = ["", "", "", "", "", "", "", "", ""]; // Clear the board combo
  currentPlayer = "X"; // back to the the starting player
  gameActive = true; // make the game working again
  document.getElementById("turn").innerText = "Player 1 Start the Game"; //update status



  // Clear the board display & status text
  for (var i = 1; i <= 9; i++) {
    document.getElementById("box" + i).innerText = "";
  }
}

