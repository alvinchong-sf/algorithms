
// brute force: time o(n * k) | space o(n + k)
function mergeSortedArrays(arrays) {
	let resultArr = [];
	let tempArr = new Array(arrays.length).fill(0);
	let longestSubArr = 0;
	
	for(const subArr of arrays) {
		longestSubArr += subArr.length;
	}
	
	for(let k = 0; k < longestSubArr; k++) {
		let minVal = Infinity;
		let minIdx = null;
		
		for(let i = 0; i < arrays.length; i++) {
			let tempVal = tempArr[i] === undefined ? Infinity : tempArr[i];
			
			if(arrays[i][tempVal] < minVal) {
				minVal = arrays[i][tempVal]
				minIdx = i;
			}
		}
		
		resultArr.push(minVal);
		tempArr[minIdx]++;
	}
	return resultArr;
}

