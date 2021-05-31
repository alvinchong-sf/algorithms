function heapSort(array) {
    for(let i = array.length - 1; i >= 0; i--) {
		siftDown(array, array.length, i);
	}
	
	for(let j = array.length - 1; j >= 0; j--) {
		swap(array, j, 0);
		siftDown(array, j, 0)
	}
	
	return array;
}

const siftDown = (array, n, idx) => {
	let leftIdx = 2 * idx + 1;
	let rightIdx = 2 * idx + 2;
	
	let leftVal = leftIdx >= n ? -Infinity : array[leftIdx];
	let rightVal = rightIdx >= n ? -Infinity : array[rightIdx];
	
	if(array[idx] > leftVal && array[idx] > rightVal) return;
	
	let swapIdx;
	if(leftVal > rightVal) {
		swapIdx = leftIdx;
	} else {
		swapIdx = rightIdx;
	}
	
	swap(array, idx, swapIdx);
	siftDown(array, n, swapIdx);
}

const swap = (array, i , j) => {
	[ array[i], array[j] ] = [ array[j], array[i] ];
}

// time o(n log(n)) | space o(1)