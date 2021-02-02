function findThreeLargestNumbers(array) {
	let newArr = [];
  while ( newArr.length < 3) {
		let largest = Math.max(...array);
		newArr.push(largest);
		let largestIdx = array.indexOf(largest);
		array.splice(largestIdx, 1);
	}
	return newArr.reverse();
}

// time o(n) may look nested but since while loop does not grow with the input array it is constant time
// space o(1) because it is always going to be 3 num inside the array.