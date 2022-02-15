// ### Largest Range

// Write a function that takes in an array of integers and returns an array of length 2
// representing the largest range of intergers container in that array.

// The first number in the output array should be the first number in the range, 
// while the second number should be the last number in the range.

// A range of numbers is defined as a set of numbers that come right after each
// other in the set of real integers. For instanceof, the output array [2, 6]
// represents the range {2,3,4,5,6}, which is a range of length 5. Note that numbers
// don't need to be sorted or adjacent in the input array in order to form a range.

// You can assume that there will only be one largest range.

function largestRange(array) {
	let min = null,
        max = null,
        maxRange = -Infinity;
	const hash = {};
	placeNumFromArrayIntoHash(array, hash);
	
	for (const num of array) {
		if (hash[num] === false) {
			const [left, right] = findRange(num, hash);
			const range = right - left + 1;
			if (range > maxRange) {
				min = left, max = right; maxRange = range;
			}
		}
	}
	
	return [min, max];
}

function findRange(num, hash) {
	let left = num, right = num;
	
	while (left in hash) {
		hash[left] = true;
		left--;
	}
	
	while (right in hash) {
		hash[right] = true;
		right++;
	}
	
	return [left + 1, right - 1];
}

function placeNumFromArrayIntoHash(array, hash) {
	for (const num of array) {
		hash[num] = false;
	}
}