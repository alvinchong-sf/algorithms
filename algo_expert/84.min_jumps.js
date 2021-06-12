// DP time o(n^2) | space o(n)
function minNumberOfJumps(array) {
  const table = new Array(array.length).fill(Infinity);
	table[table.length - 1] = 0;
	
	for(let i = array.length - 1; i >= 0; i--) {
		const maxJump = Math.min(array.length - 1, i + array[i]);
		for(let j = i + 1; j <= maxJump; j++) {
			table[i] = Math.min(table[i], 1 + table[j]);
		}
	}
	return table[0];
}

// greedy time o(n) | space o(1)
function minNumberOfJumps(array) {
	if(array.length === 1) return 0;
    let maxJump = array[0], steps = array[0], jump = 0;
	
	for(let i = 1; i < array.length - 1; i++) {
		steps--;
		maxJump = Math.max(maxJump, i + array[i]);
		if(steps === 0) {
			jump++;
			steps = maxJump - i;
		} 
	}
	return jump + 1;
};
