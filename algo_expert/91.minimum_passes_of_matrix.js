function minimumPassesOfMatrix(matrix) {
	const queue = [];
	placeAllPosToQueue(matrix, queue);
	
	let pass = 0;
	let prevQueueLength = Infinity;
	
	while (queue.length) {
		const convertible = [];
		const size = queue.length;
		if (prevQueueLength === size) return -1;
		
		for (let i = 0; i < size; i++) {
			const [row, col] = queue.shift();
			const num = matrix[row][col];
			if (num >= 0) {
				continue;
			} else {
				const result = isConvertible(matrix, row, col);
				result ? convertible.push([row, col]) : queue.push([row, col]);
			}
		}
		
		if (queue.length === 0 && convertible.length === 0) return pass;
		
		for (let j = 0; j < convertible.length; j++) {
			const [row, col] = convertible[j];
			matrix[row][col] *= -1
		};
		pass++;
		prevQueueLength = size;
	};
	return pass;
}

const isConvertible = (matrix, row, col) => {
	if (row - 1 >= 0 && matrix[row - 1][col] > 0) return true;
	if (row + 1 < matrix.length && matrix[row + 1][col] > 0) return true;
	if (col - 1 >= 0 && matrix[row][col - 1] > 0) return true;
	if (col + 1 < matrix[row].length && matrix[row][col + 1] > 0) return true;
	return false;
};

const placeAllPosToQueue = (matrix, queue) => {
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			queue.push([row, col]);
		};
	};
};

// time o(n * m) | space o(n * m)
// https://www.algoexpert.io/questions/Minimum%20Passes%20Of%20Matrix