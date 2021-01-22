function twoNumberSum(array, targetSum) {
	let set = new Set();
	
	for(let i = 0; i < array.length; i++) {
		let num = array[i];
		let res = targetSum - num;
		if(set.has(res)) {
			return [res, num];
		} else {
			set.add(num)
		}
	}
	return [];
}

// time: o(n) because 1 iteration
// space: o(n) because as the input array grows, the set grows in linear