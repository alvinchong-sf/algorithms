function sortStack(stack) {
	let i = 0;
	
	while (i < stack.length) {
		recursiveSort(stack);
		i++;
	}
	
	return stack;
};

function recursiveSort(stack) {
	if (stack.length <= 1) return;
		
	const val = stack.pop();
	recursiveSort(stack);
	const peek = stack[stack.length - 1];
	
	if (val < peek) {
		const large = stack.pop();
		stack.push(val, large);
	} else {
		stack.push(val);
	}
	
}

// time o(n^2) | space o(n)