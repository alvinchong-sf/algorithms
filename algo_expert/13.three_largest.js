function findThreeLargestNumbers(array) {
	let first = -Infinity,
		second = -Infinity,
		third = -Infinity;
	
	for (const num of array) {
		if (num >= first) {
			[first, second, third] = [num, first, second];
		} else if (num >= second) {
			[first, second, third] = [first, num, second];
		} else if (num >= third) {
			[first, second, third] = [first, second, num];
		}
	};
	
	return [third, second, first];
}

// time o(n) | space o(1) 
// https://www.algoexpert.io/questions/Find%20Three%20Largest%20Numbers