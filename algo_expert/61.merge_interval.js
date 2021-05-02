function mergeOverlappingIntervals(array) {
	
	let sorted = array.sort((a, b) => a[0] - b[0]);
	let resultArr = []; // [ [1,2], [3,8], [9,10]]
	let start = sorted[0][0]; // start = -20
	let end = sorted[0][1]; // end = 22
	
	for(let i = 1; i < sorted.length; i++) {  // [9,10]
		 if(end >= sorted[i][0]) {
			 end = Math.max(sorted[i][1], end)
		 } else {
			 resultArr.push([start, end])
			 start = sorted[i][0];
			 end = sorted[i][1]
		 }
	}
	
	resultArr.push([start, end])
	return resultArr;
}

// time o(n log(n));
// space o(n)

