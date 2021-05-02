function arrayOfProducts(array) {
	// input = [5,1,4,2]
	// leftArr = [1,5,5,20]
  let leftProduct = 1; // 40
	let leftArr = new Array(array.length).fill(1);
	
	for(let i = 0; i < array.length; i++) {
		leftArr[i] = leftProduct;
		let num = array[i]; // num = 2
		leftProduct *= num;
	}
	
	// input = [5,1,4,2]
	// rightArr = [8,8,2,1]
	let rightProduct = 1; // 40
	let rightArr = new Array(array.length).fill(1);
	
	for(let j = array.length - 1; j >= 0; j--) {
		rightArr[j] = rightProduct;
		let num = array[j];
		rightProduct *= num;
	}
	
	let resultArr = [];
	for(let i = 0; i < array.length; i++) {
		let res = leftArr[i] * rightArr[i];
		resultArr.push(res);
	}
	return resultArr;
}

// time o(3n) => o(n)
// space o(3n) => o(n)


function arrayOfProducts(array) {
  let leftProduct = 1;
	let rightProduct = 1;
	let resultArr = new Array(array.length).fill(1);
	
	for(let i = 0; i < array.length; i++) {
		resultArr[i] = leftProduct
		leftProduct *= array[i];
	}
	
	for(let j = array.length - 1; j >= 0; j--) {
		let res = rightProduct * resultArr[j];
		resultArr[j] = res;
		rightProduct *= array[j];
	}
	
	return resultArr;
}

// time o(2n) => o(n)
// space o(n)