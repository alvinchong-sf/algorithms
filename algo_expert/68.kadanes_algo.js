function kadanesAlgorithm(array) {
  let maxSum = -Infinity;
	let currSum = -Infinity;
	
	for(let i = 0; i < array.length; i++) {
		currSum = Math.max( currSum + array[i], array[i] );
		maxSum = Math.max(currSum, maxSum)
	}
	return maxSum;
}

// time o(n)
// space o(1)