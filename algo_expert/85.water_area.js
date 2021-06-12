// Brute Force: time o(n) | space o(n)
function waterArea(heights) {
	let largestLeft = heights[0], largestRight = heights[heights.length - 1];
    const leftArr = [0];
	const rightArr = [0];
	
	for(let i = 1; i < heights.length; i++) {
		const currHeight = heights[i];
		if(currHeight > largestLeft) {
			largestLeft = currHeight;
		}
		const diff = largestLeft - currHeight;
		const res = diff > 0 ? diff : 0;
		leftArr.push(res);
	}
	
	for(let j = heights.length - 1; j >= 0; j--) {
		const currHeight = heights[j];
		if(currHeight > largestRight) {
			largestRight = currHeight
		}
		const diff = largestRight - currHeight;
		const res = diff > 0 ? diff : 0;
		rightArr.unshift(res);
	}
	
	let sum = 0;
	for(let k = 0; k < heights.length; k++) {
		sum += Math.min(leftArr[k], rightArr[k]);
	}
	return sum;
}		

// Optimal: time o(n) : space o(1);
