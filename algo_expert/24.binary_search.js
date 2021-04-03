function binarySearch(array, target) {
	if(!array.length) return -1;
	
	let midIdx = Math.floor(array.length / 2);
	let midPos = array[midIdx];
	if(target === midPos) {
		return midIdx
	} else if (target < midPos) {
		let leftArr = array.slice(0, midIdx);
		return binarySearch(leftArr, target);
	} else if( target > midPos) {
		let rightArr = array.slice(midIdx + 1);
		let resIdx = binarySearch(rightArr, target);
		return resIdx === -1 ? -1 : resIdx + midIdx + 1
	}
}

// time o(n) => because of array slicing
// space o(log(n)) => because the array is always halved of original input and recursive stack is also halved

/////////////////////////////////////////////////////////////////////////////////

function binarySearch(array, target, left = 0, right = array.length - 1) {
	if(left > right) return -1;

	let midIdx = Math.floor((left + right) / 2);
	let midEle = array[midIdx];

	if(target === midEle) {
		return midIdx;
	} else if(target < midEle) {
		return binarySearch(array, target, left, midIdx - 1);
	} else if (target > midEle) {
		return binarySearch(array, target, midIdx + 1, right);
	}
}

// time o(log(n)) => no slicing, accessing left and right pointer in constant time
// space o(log(n)) => recursive call stack 

/////////////////////////////////////////////////////////////////////////////////

function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;
	
	while (left <= right) {
		let midIdx = Math.floor((left + right) / 2);
		let midEle = array[midIdx];
		
		if(target === midEle) {
			return midIdx;
		} else if(target < midEle) {
			right = midIdx - 1;
		} else if(target > midEle) {
			left = midIdx + 1;
		}
	}
	return -1;
}

// time o(log(n))
// space o(1) no call stack, no extra array