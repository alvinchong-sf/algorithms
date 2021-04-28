function removeIslands(matrix) {

    // loop through entire matrix
    // if 0 or out of bounds; skip
    // if 1; we call dfs helper function on it
	for(let i = 0; i < matrix.length; i++) {     // o(n * m * p)
		for(let j = 0; j < matrix[0].length; j++) {
			if(matrix[i][j] === 0) {
				continue;
			} else if (matrix[i][j] === 1) {
				if(i <= 0 || i >= matrix.length - 1 || j <= 0 || j >= matrix[0].length - 1) {
					continue;
				} else {
					dfs(i, j, matrix);
				}
			}
		}
	}

    // final loop to turn visited back to 1
	for(let row = 0; row < matrix.length; row++) {
		for(let col = 0; col < matrix[row].length; col++) {       // o(n * m)
			if(matrix[row][col] === "V") matrix[row][col] = 1
		}
	}
	return matrix;
}

const dfs = (i, j, matrix) => {
	let stack = [ [i, j] ]
	let list = [];
	
    // iterative stack that adds all 1's into a list array
	while(stack.length) {
		let node = stack.pop();
		let idx1 = node[0];
		let idx2 = node[1];
		
		if(matrix[idx1][idx2] === 1) {
			matrix[idx1][idx2] = "V"
			list.push(node);
			// left
			if(idx2 - 1 >= 0) stack.push([idx1, idx2 - 1])
			// right
			if(idx2 + 1 <= matrix[0].length - 1) stack.push([idx1, idx2 + 1])
			// top
			if(idx1 - 1 >= 0) stack.push([idx1 - 1, idx2])
			// bottom
			if(idx1 + 1 <= matrix.length - 1) stack.push([idx1 + 1, idx2])
		}
	}
	
    // loop thru list array and check for out of bounds and if none found
    // convert all coordinates into 0's
	for(let k = 0; k < list.length; k++) {
		let id1 = list[k][0];
		let id2 = list[k][1];
		if(id1 <= 0 || id1 >= matrix.length - 1 || id2 <= 0 || id2 >= matrix[0].length - 1) {
			break;
		}
		if(k === list.length - 1) {
			list.forEach((coordinate) => {
				let i1 = coordinate[0];
				let i2 = coordinate[1];
				matrix[i1][i2] = 0;
			})
		}
	}
	
}

// time o(n * m * p) where n and m is the dimention of matrix; p is the length of all good coordinates
// space o(q + p) extra space, q is stack and p is length of all good coordinates

