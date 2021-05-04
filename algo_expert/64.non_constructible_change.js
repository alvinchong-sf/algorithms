function nonConstructibleChange(coins) {
  // [5, 7, 1, 1, 2, 3, 22]
	// sorted = [1,1,1]
	//                 i
	// change = 4
	
	if(!coins.length) return 1;
	if(coins.length === 1) {
		if(coins[0] > 1) {
			return 1
		} else {
			return coins[0] + 1;
		}
	}
	let sorted = coins.sort((a, b) => a - b);
	let change = sorted[0];
	for(let i = 1; i < sorted.length; i++) {
		let coin = sorted[i];
		if(coin > change + 1) {
			return change + 1;
		} else {
			change += coin
		}
	}
	return change + 1;
}

// time o(n log(n))
// space o(n) 