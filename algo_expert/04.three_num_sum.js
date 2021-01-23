function threeNumberSum(array, targetSum) {
  // sort the array
	// set up a for loop
	// set up an inner while loop
	// set 2 pointers
	// sum all 3 elemens up.
	// if sum is less than target increment left pointer
	// if sum is greater than target decrement right pointer
	// if equals push into an array
	
	let sorted = array.sort((a, b) => a - b);
	let newArr = [];
	
	for(let i = 0; i < sorted.length - 2; i++) {
	  let left = i + 1;
		let right = sorted.length - 1;
		let num = sorted[i];
		while( left < right) {
				let sum = num + sorted[left] + sorted[right];
				if(sum === targetSum) {
					newArr.push([num, sorted[left], sorted[right]])
					left++;
					right--;
				} else if(sum < targetSum) {
					left++;
				} else {
					right--;
				}
		}
	}
	return newArr;
}

// time: o(n^2);
// space: o(n);