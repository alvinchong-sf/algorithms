function mergeSort(array) {
	if(array.length <= 1) return array;
  let midIdx = Math.floor(array.length / 2);
	let leftArr = array.slice(0, midIdx);
	let rightArr = array.slice(midIdx);
	
	let sortedLeft = mergeSort(leftArr);
	let sortedRight = mergeSort(rightArr);
	
	return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
	let arr = [];
	
	while(left.length && right.length) {
		if(left[0] < right[0]) {
			arr.push(left.shift())
		} else {
			arr.push(right.shift())
		}
	}
	return arr.concat(left).concat(right);
}

// time o(n log(n))
// space o(n log(n))