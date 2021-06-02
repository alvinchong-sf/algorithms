function runLengthEncoding(string) {
  let resultArr = [];
	let i = 0;
	while( i < string.length) {
		let count = 0;
		let j = i;
		while(string[j] === string[i]) {
			if(count === 9) {
				resultArr.push(`${count}${string[i]}`)
				count = 0; 
				continue;
			}
			count++; j++;
		}
		resultArr.push(`${count}${string[i]}`)
		i = j;
	}
	return resultArr.join("");
}

// time o(n) | space o(n)