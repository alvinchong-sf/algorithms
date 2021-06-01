// 289. Game of Life

// According to Wikipedia's article: "The Game of Life, also known simply as Life, 
// is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial 
// state: live (represented by a 1) or dead (represented by a 0). Each cell interacts 
// with its eight neighbors (horizontal, vertical, diagonal) using the following 
// four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell 
// in the current state, where births and deaths occur simultaneously. Given the 
// current state of the m x n grid board, return the next state.

// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

var gameOfLife = function(board) {
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[0].length; col++) {
            
            let count;
            if(board[row][col] === 1) {
                count = countOnes(board, row, col);
                if(count > 3 || count < 2) board[row][col] = true;
            } else if (board[row][col] === 0) {
                count = countOnes(board, row, col);
                if(count === 3) board[row][col] = false;
            }
        }
    }
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === true) {
                board[i][j] = 0
            } else if (board[i][j] === false) {
                board[i][j] = 1
            }
        }
    }
    
    return board;
};

const countOnes = (board, row, col) => {
    let count = 0;
    
    // top
    if(row - 1 >= 0) {
        if(board[row - 1][col] === 1 || board[row - 1][col] === true) count++;
    }
    
    // left
    if(col - 1 >= 0) {
        if(board[row][col - 1] === 1 || board[row][col - 1] === true) count++;
    }
    
    // right
    if(col + 1 <= board[0].length - 1) {
        if(board[row][col + 1] === 1 || board[row][col + 1] === true) count++;
    }
    
    // bottom
    if(row + 1 <= board.length - 1) {
        if(board[row + 1][col] === 1 || board[row + 1][col] === true) count++;
    }
    
    // top-left
    if(row - 1 >= 0 && col - 1 >= 0) {
        if(board[row - 1][col - 1] === 1 || board[row - 1][col - 1] === true) count++;
    }
    
    // top-right
    if(row - 1 >= 0 && col + 1 <= board[0].length - 1) {
        if(board[row - 1][col + 1] === 1 || board[row - 1][col + 1] === true) count++;
    }
    
    // bottom-left 
    if(row + 1 <= board.length - 1 && col - 1 >= 0) {
        if(board[row + 1][col - 1] === 1 || board[row + 1][col - 1] === true) count++;
    }
    
    // bottom-right
    if(row + 1 <= board.length - 1 && col + 1 <= board[0].length - 1) {
        if(board[row + 1][col + 1] === 1 || board[row + 1][col + 1] === true) count++;
    }
    
    return count;
}

// time o(n * m) | space o(1)
// https://leetcode.com/problems/game-of-life/