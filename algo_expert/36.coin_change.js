function minNumberOfCoinsForChange(n, denoms) {
	// denoms [$2, $4]
	// n = $7
	// T[0,x,1,x,1,x,2,x]
	// $[0,1,2,3,4,5,6,7]
	// check to see if money bill is less than or equal to index dollar
	// index dollar - denom dollar  = ans 
	// Math.min( 1 + t[ans], t[index dollar])
	//           1 +   0,         x
	
	let table = new Array(n + 1).fill(Infinity);
	table[0] = 0;
	for(let valueOfCoin of denoms) {
		for(let i = 0; i < table.length; i++) {
			if(valueOfCoin <= i) {
				let ans = i - valueOfCoin;
				table[i] = Math.min(table[i], 1 + table[ans])
			}
		}
	}
	if(table[table.length - 1] === Infinity) {
		return -1;
	} else {
		return table[table.length - 1];
	}
}

// time o(n * m) ; n is length of table; m is length of coins array
// space o(n) because of the table