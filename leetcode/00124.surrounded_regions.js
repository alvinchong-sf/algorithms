// 130. Surrounded Regions

// Given an m x n matrix board containing 'X' and 'O', capture all regions 
// surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Surrounded regions should not be on the border, which means that any 'O' 
// on the border of the board are not flipped to 'X'. Any 'O' that is not on the 
// border and it is not connected to an 'O' on the border will be flipped to 'X'. 
// Two cells are connected if they are adjacent cells connected horizontally or vertically.

var solve = function(board) {
    
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[row].length; col++) {
            if(row <= 0 || row >= board.length - 1 || col <= 0 || col >= board[0].length - 1) {
                if(board[row][col] === "O") dfs(row, col, board);
            }
        }
    }

    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[0].length; col++) {
            if(board[row][col] === "O") board[row][col] = "X";
            if(board[row][col] === "T") board[row][col] = "O"
        }
    }
};

const dfs = (row, col, board) => {
    if(row < 0 || col < 0 || row > board.length - 1 || col > board[0].length - 1) return;
    if(board[row][col] !== "O") return;
    
    board[row][col] = "T";
    dfs(row, col - 1, board);
    dfs(row, col + 1, board);
    dfs(row - 1, col, board);
    dfs(row + 1, col, board);
}

// time o(n * m)