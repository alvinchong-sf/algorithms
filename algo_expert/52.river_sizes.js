function riverSizes(matrix) {
  // resultArr = [2,1,5,2,2]
	// count = 2
	// 2 nested loops; i and j
		// [V, 0, 0, V, 0],
    // [V, 0, V, 0, 0],
    // [0, 0, V, 0, V],
    // [V, 0, V, 0, V],
    // [V, 0, V, V, 0]
	// if current iteration == 0 || == "V"; skip or continue
	// if current iteration == 1; dfs / bfs
	// dfs / bfs needs to consider out of bounds
	// left j >= 0 / right j <= matrix[0].length - 1 / top i >= 0 / bottom i <= matrix.length - 1
	// if visited mark as "V" and increment count++
	// at the end of bfs / dfs => resultArr.push(count)
	// return resultArr at the end
	
	let resultArr = [];
	for(let i = 0; i < matrix.length; i++) {
		for(let j = 0; j < matrix[0].length; j++) {
			if(matrix[i][j] === 0 || matrix[i][j] === "V") {
				continue;
			} else if (matrix[i][j] === 1) {
				let count = dfs(i, j, matrix);
				resultArr.push(count);
			}
		}
	}
	return resultArr;
}

const dfs = (i, j, matrix) => {
	let counter = 0;
	let stack = [[i, j]];
	
	while(stack.length) {
		let river = stack.pop();
		let idx1 = river[0];
		let idx2 = river[1];
		
		if(matrix[idx1][idx2] === 1) {
			matrix[idx1][idx2] = "V";
			counter++;
			
			// left
			if(idx2 - 1 >= 0) stack.push([idx1, idx2 - 1]);
			// right
			if(idx2 + 1 <= matrix[0].length - 1) stack.push([idx1, idx2 + 1])
			// top
			if(idx1 - 1 >= 0) stack.push([idx1 - 1, idx2]);
			// down
			if(idx1 + 1 <= matrix.length - 1) stack.push([idx1 + 1, idx2])
		}
	}
	return counter;
}

// time o(n * m)
// space o(n * m)