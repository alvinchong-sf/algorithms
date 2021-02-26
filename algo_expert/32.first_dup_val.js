function firstDuplicateValue(array) {
  for(let i = 0; i < array.length; i++) {
		let num = array[i];           // 1
		let resIdx = Math.abs(num) - 1; // 0
		if(array[resIdx] < 0) {
			return Math.abs(num);
		} else {
			array[resIdx] = array[resIdx] * -1;
		}
	}
	return -1;
}

// time o(n)
// space o(1)