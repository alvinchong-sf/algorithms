function kadanesAlgorithm(array) {
  let maxSum = array[0];
	let currSum = array[0];
	
	for(let i = 1; i < array.length; i++) {
		currSum = Math.max( currSum + array[i], array[i] );
		maxSum = Math.max(currSum, maxSum)
	}
	return maxSum;
}

// time o(n)
// space o(1)