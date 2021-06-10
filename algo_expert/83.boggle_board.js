function boggleBoard(board, words) {
  const boggleArr = [];
	for(const word of words) { 
		const result = boardHelper(board, word);
		if(result !== null) boggleArr.push(word)
	}
	return boggleArr;
};

const boardHelper = (board, word) => {
	for(let row = 0; row < board.length; row++) {
		for(let col = 0; col < board[0].length; col++) {
			if(board[row][col] === word[0]) {
				const result = dfs(board, row, col, word, 0);
				if(result) return word;
			}
		}
	}
	return null;
};

const dfs = (board, row, col, word, idx) => {
	if(row < 0 || col < 0 || row >= board.length || col >= board[0].length) {
		return false;
	}
	if(word[idx] !== board[row][col]) return false;
	if(idx === word.length - 1) return true;
	const tempChar = board[row][col];
	board[row][col] = true;
	
	const top = dfs(board, row - 1, col, word, idx + 1);
	const left = dfs(board, row, col - 1, word, idx + 1)
	const right = dfs(board, row, col + 1, word, idx + 1)
	const bottom = dfs(board, row + 1, col, word, idx + 1)
	const topLeft = dfs(board, row - 1, col - 1, word, idx + 1)
	const topRight = dfs(board, row - 1, col + 1, word, idx + 1)
	const bottomLeft = dfs(board, row + 1, col - 1, word, idx + 1)
	const bottomRight = dfs(board, row + 1, col + 1, word, idx + 1)
	
	board[row][col] = tempChar;
	return top || left || right || bottom || topLeft || topRight || bottomLeft || bottomRight;
};

 // time o(w * n * m * 8s)
 // space o(w * 8s)