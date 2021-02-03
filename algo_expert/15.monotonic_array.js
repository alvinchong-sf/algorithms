function isMonotonic(array) {
  let isIncreasing = true;
	let isDecreasing = true;
	
	for(let i = 0; i < array.length - 1; i++) {
		let currNum = array[i];
		let nextNum = array[i + 1];
		if(nextNum > currNum) isDecreasing = false;
		if(nextNum < currNum) isIncreasing = false;
	}
	
	return isIncreasing || isDecreasing;
}

// time = o(n)
// space = o(1)