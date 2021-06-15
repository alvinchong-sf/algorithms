function powerset(array) {	
	const resultArr = []; 					
	resultArr.push([]);
	
	for(let i = 0; i < array.length; i++) { 
		const num = array[i];
		const size = resultArr.length;     
		for(let j = 0; j < size; j++) {				
			const tempArr = resultArr[j].slice();	
			tempArr.push(num);									
			resultArr.push(tempArr.slice());
		}
	}
	return resultArr;
}

// time o(n^2^n) | space o(n^2^n)
// https://www.algoexpert.io/questions/Powerset
