// If we were to set up a Tic-Tac-Toe game, we would want to know whether the 
// board's current state is solved, wouldn't we? Our goal is to create a 
// function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 
// if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  // check for all rows
  for(let row = 0; row < board.length; row++) {
    let temp = board[row][0];
    for(let col = 0; col < board.length; col++) {
      if(board[row][col] !== temp) break;
      if(col === board.length - 1) {
        if(board[row][col] === temp) {
          if(temp === 0) {
            break
          } else {
            return temp
          }
        }
      }
    }
  }
  
  // check for all cols 
  for(let col = 0; col < board.length; col++) {
    let temp = board[0][col];
    for(let row = 0; row < board.length; row++) {
      if(board[row][col] !== temp) break;
      if(row === board.length - 1) {
        if(board[row][col] === temp) {
          if(temp === 0) {
            break
          } else {
            return temp
          }
        }
      }
    }
  }
  
  // check for topLeft -> botRight diagonal
  for(let i = 0; i < board.length; i++) {
    let temp = board[0][0];
    if(board[i][i] !== temp) break;
    if(i === board.length - 1) {
      if(board[i][i] === temp) {
        if(temp === 0) {
            break
          } else {
            return temp
          }
      }
    }
  }
  
  // check for topRight -> botLeft diagonal
  for(let i = 0; i < board.length; i++) {
    let temp = board[0][board.length - 1];
    for(let j = board.length - 1; j >= 0; j--) {
      if(board[i][j] !== temp) break;
      if(i === board.length - 1) {
        if(board[i][j] === temp) {
          if(temp === 0) {
            break
          } else {
            return temp
          }
        }
      }
    }
  }
  
  // check for 0's; return -1
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board.length; j++) {
      if(board[i][j] === 0) return -1;
    }
  }
  
  // return 0 at the end if nothing is found
  return 0;
}

// time o(n^2)
// space o(1)
// https://www.codewars.com/kata/525caa5c1bf619d28c000335/javascript