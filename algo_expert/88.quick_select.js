function quickselect(array, k) {
  let startIdx = 0, endIdx = array.length - 1;
	const targetIdx = k - 1;
	while(startIdx <= endIdx) {
		const randomIdx = randomIdxGenerator(startIdx, endIdx);
		const resultIdx = partition(array, startIdx, endIdx, randomIdx);
		
		if(resultIdx === targetIdx) {
			return array[resultIdx];
		} else if (resultIdx > targetIdx) {
			endIdx = resultIdx - 1;
		} else {
			startIdx = resultIdx + 1;
		}
	}
	return null;
}

const partition = (array, startIdx, endIdx, randomIdx) => {
	const partitionVal = array[randomIdx];
	swap(array, randomIdx, endIdx);
	let j = startIdx;
	
	for(let i = startIdx; i < endIdx; i++) {
		const currVal = array[i];
		if(currVal <= partitionVal) {
			swap(array, i, j);
			j++;
		}
	}
	swap(array, endIdx, j);
	return j;
};

const swap = (array, i , j) => {
	[ array[i], array[j] ] = [ array[j], array[i] ];
};

const randomIdxGenerator = (startIdx, endIdx) => {
	return Math.floor(Math.random() * (endIdx - startIdx + 1)) + startIdx;
}

// time o(n) space o(1)