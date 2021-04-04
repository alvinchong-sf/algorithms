
function numberOfWaysToMakeChange(n, denoms) {
	let table = new Array(n + 1).fill(0);
	table[0] = 1;
	
	denoms.forEach((coin) => {
		for(let i = 1; i < table.length; i++) {
			if(coin <= i) {
				table[i] += table[i - coin];
			}
		}
	})
	return table[table.length - 1];
}

// time o(n * m)
// space o(n)