function fourNumberSum(array, targetSum) {
	let resultArr = [];
	let hash = {};
	
	for(let i = 0; i < array.length - 1; i++) {
		const num1 = array[i];

		for(let j = i + 1; j < array.length; j++) {
			const num2 = array[j];
			const sum = num1 + num2;
			const diff = targetSum - sum;
			if(hash[diff] === undefined) continue;

			let tempArr = [num1, num2];
			const pairsArray = hash[diff];
			for(const pairs of pairsArray) {
				let result = tempArr.concat(pairs);
				resultArr.push(result)
			}
		}

		for(let k = 0; k < i; k++) {
			const num3 = array[k];
			const total = num1 + num3;
			if(hash[total] === undefined) hash[total] = [];
			hash[total].push([num1, num3])
		}
	}
	return resultArr;
}

// time o(n^2) | space o(n^2)
