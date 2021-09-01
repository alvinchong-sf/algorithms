function searchForRange(array, target) {
	let start = -1, end = -1;
	
	const binarySearch = (left, right) => {
		if (left > right) return;
		
		const midIdx = Math.floor((left + right) / 2);
		const midVal = array[midIdx];
		if (target === midVal) {
			if (array[midIdx - 1] !== target) {
				start = midIdx;
			} else {
					if (start === -1) binarySearch(left, midIdx - 1);
			} 
			
			if (array[midIdx + 1] !== target) {
				end = midIdx;
			} else {
					if (end === -1) binarySearch(midIdx + 1, right);
			} 
			
			return;
		} else if (target < midVal) {
				binarySearch(left, midIdx - 1)
		} else {
				binarySearch(midIdx + 1, right);
		}
	};
	
	binarySearch(0, array.length - 1);
	return [start, end];
	
};

// time log(n) | space log(n)
// https://www.algoexpert.io/questions/Search%20For%20Range