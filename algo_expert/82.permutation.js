function getPermutations(array) {
	let permutation = [];
	permHelper(array, permutation, 0);
	return permutation;
}

const permHelper = (array, permutation, idx) => {
	
	if(idx === array.length - 1) {
		permutation.push(array.slice());
		return;
	}
	
	for(let i = idx; i < array.length; i++) {
		swap(array, i, idx);
		permHelper(array, permutation, idx + 1);
		swap(array, i, idx);
	}
};

const swap = (arr, i, j) => {
	[ arr[i], arr[j] ] = [ arr[j], arr[i] ]
}

// time o(n * n!) | space o(n * n!)