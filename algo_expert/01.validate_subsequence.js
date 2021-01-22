function isValidSubsequence(array, sequence) {
	// iterate thru sequence and check for inclusion in array
	// if sequence mathces with the first element in array,shift out array
	// once array is empty. we can return true. if not return false
	
	array.forEach((num) => {
		if(num === sequence[0]) sequence.shift();
	})
	
	return sequence.length === 0
}

// array = [5,1,22,25,6,-1,8,10]
// sequence = [1,6,-1,10]

// time: o(n) because of one iteration
// space: o(1) I think, because if anything my output array is not growing.
