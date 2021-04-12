function productSum(array, carry = 1) {
	let sum = 0;
	for(let i = 0; i < array.length; i++) {
		let ele = array[i];
		if(Array.isArray(ele)) {
			sum += productSum(ele, carry + 1);
		} else {
			sum += ele;
		}
	}
	return sum * carry;
}

// time o(n) n is the number of non-array elements
// space o(d) d is the depth of the nested array hence d amount of recursive call
