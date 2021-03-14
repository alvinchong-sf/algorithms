function sortedSquaredArray(array) {
	let resultArr = new Array(array.length).fill(0);
	
	let i = 0;
	let j = array.length - 1;
	for(let k = array.length - 1; k >= 0; k--) {
		let left = array[i];
		let right = array[j];
		if(Math.abs(left) > Math.abs(right)) {
			resultArr[k] = left * left;
			i++;
		} else {
			resultArr[k] = right * right;
			j--;
		}
	}
	return resultArr;
}

// time o(n) // 
// space o(n)