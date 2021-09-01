function indexEqualsValue(array) {
	let minIdx = Infinity;
	
	const binarySearch = (left, right) => {
		if (left > right) return;
		const midIdx = Math.floor((left + right) / 2);
		const midVal = array[midIdx];
		
		if (midIdx === midVal) {
			minIdx = Math.min(minIdx, midIdx)
		};
		
		if (array[midIdx - 1] >= midIdx - 1) {
			binarySearch(left, midIdx - 1);
		} else {
			binarySearch(midIdx + 1, right);
		}
	};
	
	binarySearch(0, array.length - 1);
	return minIdx === Infinity ? -1 : minIdx;
}

// time o(log(n)) | space o(log(n))
// https://www.algoexpert.io/questions/Index%20Equals%20Value