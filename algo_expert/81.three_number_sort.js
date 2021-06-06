function threeNumberSort(array, order) {
  let firstIdx = 0, secondIdx = 0, thirdIdx = array.length - 1;
	
	while(secondIdx <= thirdIdx) {
		if(array[secondIdx] === order[0]) {
			swap(array, secondIdx, firstIdx);
			secondIdx++; firstIdx++;
		} else if(array[secondIdx] === order[1]) {
			secondIdx++;
		} else if(array[secondIdx] === order[2]) {
			swap(array, secondIdx, thirdIdx);
			thirdIdx--;
		}
	}
	return array;
}

const swap = (array, i , j) => {
	[ array[i], array[j] ] = [ array[j], array[i] ];
}

// time o(n) | space o(1)