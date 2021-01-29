
// solution 1

function moveElementToEnd(array, toMove) {
	let length = array.length;
    for(let i = 0; i < length; i++) {
        let num = array[i];
        if(num === toMove) {
            array.splice(i, 1);
            array.push(toMove);
            i--;
            length--;
        }
    }
	return array;
}

// time o(n^2) because js splice built in method is o(n) run time
// space o(1) extra space is o(1) but total space is o(n) because input array



// solution 2

function moveElementToEnd(array, toMove) {
  let i = 0;
	let j = array.length - 1;
	while(i < j) {
		while(i < j && array[j] === toMove) j--;
		if(array[i] === toMove) {
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		i++;
	}
	return array;
}

// time o(n) because 1 loop
// space o(1) extra space