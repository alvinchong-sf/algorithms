function searchInSortedMatrix(matrix, target) {
	let i = 0;
	let j = matrix[0].length - 1;
	
	while(i < matrix.length && j >= 0) {
		if(matrix[i][j] === target) {
			return [i, j]
		} else if (matrix[i][j] < target) {
			i++;
		} else if (matrix[i][j] > target) {
			j--;
		}
	}
	return [-1,-1];
}

// time o(n + m)
// space o(1)