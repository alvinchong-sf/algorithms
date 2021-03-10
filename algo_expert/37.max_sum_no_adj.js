// max subset sum no adjacent

function maxSubsetSumNoAdjacent(array) {
	// [75, 105, 195, 195, 285, 330]
	// [] => 0
	// [75] => 75
	// [75,105] => 105
	// [75,105,120] => 75 + 120 || 105
	// //              table[i - 2] + array[i] || table[i - 1]
	// [75,105,120,75] => 75 + 120 || 105 + 75
	// //                    195   ||    180                 
	// [75,105,120,75,90] => 195 + 90 || 195
	// //                       285   ||  195
	// [75,105,120,75,90,135] =>  135 + 195 || 285
	
	let table = new Array(array.length).fill(null);
	
	if (!array.length) return 0;
	if (array.length === 1) return array[0];
	if (array.length === 2) return Math.max(array[0], array[1]);
	table[0] = array[0];
	table[1] = Math.max(array[0], array[1]);
	
	for(let i = 2; i < table.length; i++) {
		table[i] = Math.max(table[i - 2] + array[i], table[i - 1]);
	}
	return table[table.length - 1];
}

// time o(n)
// space o(n)