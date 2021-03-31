function sameBsts(arrayOne, arrayTwo) {
	if(!arrayOne.length && !arrayTwo.length) return true;
	if(arrayOne[0] !== arrayTwo[0]) return false;
	if(arrayOne.length !== arrayTwo.length) return false;
	
	let leftArr1 = arrayOne.slice(1).filter(num1 => num1 < arrayOne[0]);
	let rightArr1 = arrayOne.slice(1).filter(num2 => num2 >= arrayOne[0]);
	
	let leftArr2 = arrayTwo.slice(1).filter(num1 => num1 < arrayTwo[0]);
	let rightArr2 = arrayTwo.slice(1).filter(num1 => num1 >= arrayTwo[0]);
	
	return sameBsts(leftArr1, leftArr2) && sameBsts(rightArr1, rightArr2);
}

// time o(n^2)
// space o(n^2)