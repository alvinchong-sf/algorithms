var exist = function(board, word) {
    
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[0].length; col++) {
            if(board[row][col] === word[0]) {
                let bool = dfs(board, row, col, word, 0)
                if(bool) return true;
            }
        }
    }
    return false;
};

const dfs = (board, row, col, word, i) => {
    if(row < 0 || col < 0 || row >= board.length || col >= board[0].length) {
        return false;
    }
    if(board[row][col] !== word[i]) return false;
    
    if(i === word.length - 1) return true;
    let temp = board[row][col];
    board[row][col] = true;

    // top
    let top = dfs(board, row - 1, col, word, i + 1);
    
    // right
    let right = dfs(board, row, col + 1, word, i + 1);
    
    // left 
    let left = dfs(board, row, col - 1, word, i + 1);
    
    // bottom
    let bottom = dfs(board, row + 1, col, word, i + 1);
    
    board[row][col] = temp;
    return top || right || left || bottom;
}

// time o(n * m)
// space o(w) w is the length of the word and w recursive stack calls

// https://leetcode.com/problems/word-search/