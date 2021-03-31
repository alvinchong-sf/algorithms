function riverSizes(matrix) {
  let resultArr = [];
	const visitedMatrix = matrix.map(row => row.map(value => false));
	for(let i = 0; i < matrix.length; i++) {
		for(let j = 0; j < matrix[i].length; j++) {
			if(visitedMatrix[i][j] === true) continue;
			dfs(i, j, matrix, visitedMatrix, resultArr);
		}
	}
	return resultArr;
}

const dfs = (i, j, matrix, visitedMatrix, resultArr) => {
	let count = 0;
	let stack = [[i, j]];
	
	while(stack.length) {
		let currentNode = stack.pop();
		i = currentNode[0];
		j = currentNode[1];
		if(visitedMatrix[i][j] === true) continue;
		visitedMatrix[i][j] = true;
		if(matrix[i][j] === 0) continue;
		count++;
		const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visitedMatrix);
		for(const neighbor of unvisitedNeighbors) {
			stack.push(neighbor)
		}
	}
	if(count > 0) resultArr.push(count);
}

const getUnvisitedNeighbors = (i, j, matrix, visitedMatrix) => {
	const unvisitedArr = [];
	// top
	if(i > 0 && !visitedMatrix[i - 1][j]) unvisitedArr.push([i - 1, j]);
	// bottom
	if(i < matrix.length - 1 && !visitedMatrix[i + 1][j]) unvisitedArr.push([i + 1, j]);
	// left 
	if(j > 0 && !visitedMatrix[i][j - 1]) unvisitedArr.push([i, j - 1]);
	// right 
	if(j < matrix[0].length - 1 && !visitedMatrix[i][j + 1]) unvisitedArr.push([i, j + 1])
	return unvisitedArr;
}

// time o(n * m)
// space o(n * m)