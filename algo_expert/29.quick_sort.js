function quickSort(array) {
	if(array.length <= 1) return array;
	let pivot = array[0];
	let left = [];
	let right = [];
	
	for(let i = 1; i < array.length; i++) {
		let num = array[i];
		if(num < pivot) {
			left.push(num);
		} else {
			right.push(num);
		}
	}
	
	let sortedLeft = quickSort(left);
	let sortedRight = quickSort(right);
	
	return sortedLeft.concat([pivot]).concat(sortedRight);
}

// time o(n log(n))
// space o(n log(n))