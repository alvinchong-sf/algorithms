
// Dynamic Programming Solution
// time o(n * m) | space o(n * m)
function numberOfWaysToTraverseGraph(width, height) {
  let table = new Array(height).fill().map(subArr => new Array(width).fill());
	
	for(let col = 0; col < width; col++) {
		for(let row = 0; row < height; row++) {
			if(row === 0 || col === 0) {
				table[row][col] = 1
			} else {
				table[row][col] = table[row - 1][col] + table[row][col - 1];
			}
		}
	}
	return table[height - 1][width - 1];
}

// DFS
// time o(2^n) | space o(n + m)
function numberOfWaysToTraverseGraph(width, height) {
	let count = 0;
	let maxWidth = width - 1;
	let maxHeight = height - 1;
	
	const dfs = (row, col) => {
		if(row > maxHeight || col > maxWidth) return;
		
		if(row === maxHeight && col === maxWidth) {
			count++;
			return;
		}
		
		dfs(row + 1, col);
		dfs(row, col + 1);
	}
	dfs(0, 0);
	return count;
}

// Permutation
// time o(n + m) | space o(1)
function numberOfWaysToTraverseGraph(width, height) {
	// permutation = (r + d)! / r! * d!
	let right = width - 1;
	let down = height - 1;
	
	let top = factorial(right + down);
	let bottom = factorial(right) * factorial(down);
	return Math.floor(top / bottom);
}

const factorial = (num) => {
	// iterative factorial
	let total = 1;
	for(let i = 1; i <= num; i++) {
		total *= i
	}
	return total;
	
	// recursive factorial
	// if(num === 0) return 1;
	// return num * factorial(num - 1);
}

