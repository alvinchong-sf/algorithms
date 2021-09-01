function shiftedBinarySearch(array, target, left = 0, right = array.length - 1) {
	const midIdx = Math.floor((left + right) / 2),
				midVal = array[midIdx],
				leftVal = array[left],
				rightVal = array[right];
	
	if (target === midVal) {
		return midIdx;
	} else if (leftVal < midVal) {
		if (target >= leftVal && target <= midVal) {
			return shiftedBinarySearch(array, target, left, midIdx - 1);
		} else {
			return shiftedBinarySearch(array, target, midIdx + 1, right);
		}
	} else if (rightVal > midVal) {
		if (target >= midVal && target <= rightVal) {
			return shiftedBinarySearch(array, target, midIdx + 1, right);
		} else {
			return shiftedBinarySearch(array, target, left, midIdx - 1);
		}
	}
	return -1;
}  

// time o(log(n)) | space o(log(n));
// https://www.algoexpert.io/questions/Shifted%20Binary%20Search