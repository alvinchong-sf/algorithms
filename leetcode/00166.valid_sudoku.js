// 36. Valid Sudoku

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to 
// be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true


var isValidSudoku = function(board) {
    
    // validate rows
    for(let row = 0; row < board.length; row++) {
        let hash = {};
        for(let col = 0; col < board.length; col++) {
            let ele = board[row][col];
            if(ele === ".") continue;
            if(hash[ele] === undefined) hash[ele] = 0;
            hash[ele]++;
            if(hash[ele] === 2) return false;
        }
    }
    
    // validate cols
    for(let col = 0; col < board.length; col++) {
        let hash = {};
        for(let row = 0; row < board.length; row++) {
            let ele = board[row][col];
            if(ele === ".") continue;
            if(hash[ele] === undefined) hash[ele] = 0;
            hash[ele]++;
            if(hash[ele] === 2) return false;
        }
    }
    
    // validate each sub-boxes
    if(validateSubBoxes(board, 0, 2, 0, 2) === false) return false;
    if(validateSubBoxes(board, 0, 2, 3, 5) === false) return false;
    if(validateSubBoxes(board, 0, 2, 6, 8) === false) return false;
    if(validateSubBoxes(board, 3, 5, 0, 2) === false) return false;
    if(validateSubBoxes(board, 3, 5, 3, 5) === false) return false;
    if(validateSubBoxes(board, 3, 5, 6, 8) === false) return false;
    if(validateSubBoxes(board, 6, 8, 0, 2) === false) return false;
    if(validateSubBoxes(board, 6, 8, 3, 5) === false) return false;
    if(validateSubBoxes(board, 6, 8, 6, 8) === false) return false;
    
    return true;
};

const validateSubBoxes = (board, startingRow, endingRow, startingCol, endingCol) => {
    let hash = {};
    for(let row = startingRow; row <= endingRow; row++) {
        for(let col = startingCol; col <= endingCol; col++) {
            let ele = board[row][col];
            if(ele === ".") continue;
            if(hash[ele] === undefined) hash[ele] = 0;
            hash[ele]++;
            if(hash[ele] === 2) return false;
        }
    }
};

// time o(n^2) | space o(n)
// https://leetcode.com/problems/valid-sudoku/