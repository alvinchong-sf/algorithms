function radixSort(array) {
  let getMaxDigit = getMaxDigits(array);
	
	for(let i = 0; i < getMaxDigit; i++) {
		let table = new Array(10).fill().map(() => new Array().fill());
		
		for(let j = 0; j < array.length; j++) {
			let num = array[j];
			let digit = getNum(num, i);
			table[digit].push(num);
		}
		array = table.flat();
	}
	return array;
}

const getNum = (num, position) => {
	let result = Math.floor(num / Math.pow(10, position));
	return result % 10;
}

const getLength = (num) => {
	return num === 0 ? 1 : Math.floor(Math.log10(num)) + 1;
}

const getMaxDigits = (array) => {
	let count = -Infinity;
	
	for(let i = 0; i < array.length; i++) {
		let num = array[i];
		let temp = getLength(num);
		if(temp > count) count = temp;
	}
	return count;
}

// time o(n * k) n is the length of the array and k is the max number of digits
// space o(n + k)
