// 212. Word Search II

// Given an m x n board of characters and a list of strings words, return all 
// words on the board.
// Each word must be constructed from letters of sequentially adjacent cells, 
// where adjacent cells are horizontally or vertically neighboring. The same 
// letter cell may not be used more than once in a word.

// Example 1:
// Input: board = [
//     ["o","a","a","n"],
//     ["e","t","a","e"],
//     ["i","h","k","r"],
//     ["i","f","l","v"]], 
//     words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

var findWords = function(board, words) {
    const resultArr = [];
    
    for(const word of words) {
        const result = matrixTraverse(board, word);
        if(result) resultArr.push(word);
    }
    return resultArr;
};

const matrixTraverse = (board, word) => {
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col <board[0].length; col++) {
            if(board[row][col] === word[0]) {
                const result = dfs(board, row, col, word, 0);
                if(result) return true;
            }
        }
    }
    return false;
}

const dfs = (board, row, col, word, idx) => {
    
    if(row < 0 || col < 0 || row >= board.length || col >= board[0].length) {
        return false;
    }
    if(board[row][col] !== word[idx]) return false;
    if(idx === word.length - 1) return true;
    
    const temp = board[row][col];
    board[row][col] = true;
    
    const top = dfs(board, row -1, col, word, idx + 1); // top
    const left = dfs(board, row, col - 1, word, idx + 1); // left
    const right = dfs(board, row, col + 1, word, idx + 1); // right
    const bottom = dfs(board, row + 1, col, word, idx + 1); // bottom
    
    board[row][col] = temp;
    return top || left || right || bottom;
};