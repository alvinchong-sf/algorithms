function smallestDifference(arrayOne, arrayTwo) {
	
	let closest = Infinity;
	let result = [null, null];
    let sorted1 = arrayOne.sort((a, b) => a - b);
	let sorted2 = arrayTwo.sort((a, b) => a - b);
	
	
	let i = 0;
	let j = 0;
	while(i < sorted1.length && j < sorted2.length) {
		let num1 = sorted1[i];
		let num2 = sorted2[j];
		
		if(num1 < num2) {
			let difference = Math.abs(num1 - num2);
			if(difference < closest) {
				closest = difference;
				result[0] = num1;
				result[1] = num2;
			}
			i++;
		} else if (num1 > num2) {
			let difference = Math.abs(num1 - num2);
			if(difference < closest) {
				closest = difference;
				result[0] = num1;
				result[1] = num2;
			}
			j++;
		} else {
			result[0] = num1;
			result[1] = num2;
			return result;
		}
	}
	return result;
}

// time: o(n log n);
// space: o(1);