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

// time o(log(n))
// space o(log(n))