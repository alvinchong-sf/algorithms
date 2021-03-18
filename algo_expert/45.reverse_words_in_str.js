function reverseWordsInString(string) {
	let splitArr = [];
	let tempStr = "";
	
	for(let i = 0; i < string.length; i++) {
		let char = string[i];
		if(char === " ") {
			splitArr.push(tempStr);
			tempStr = "";
		} else {
			tempStr += char;
		}
	}
	splitArr.push(tempStr);
	// splitArr = splitArr.join(" ");
	
	let i = 0; 
	let j = splitArr.length - 1;
	
	while(i < j) {
		let temp = splitArr[i];
		splitArr[i] = splitArr[j];
		splitArr[j] = temp;
		i++; j--;
	}
	return splitArr.join(" ");
}

// time o( (n * m) + n)
// space o(n + m)