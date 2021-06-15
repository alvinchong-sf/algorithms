function phoneNumberMnemonics(phoneNumber) {
	const hash = {
		0: ["0"],
		1: ["1"],
		2: ["a","b","c"],
		3: ["d","e","f"],
		4: ["g","h","i"],
		5: ["j","k","l"],
		6: ["m","n","o"],
		7: ["p","q","r","s"],
		8: ["t","u","v"],
		9: ["w","x","y","z"]
	};
	
	const resultArr = [];
	const tempArr = new Array(phoneNumber.length).fill(null);
	
	const helper = (idx) => {
		if(idx === phoneNumber.length) {
			const res = tempArr.join("");
			resultArr.push(res);
			return
		}
		
		const value = phoneNumber[idx];
		const lettersArr = hash[value];
		for(const char of lettersArr) {
			tempArr[idx] = char;
			helper(idx + 1);
		}
	}
	helper(0);
	return resultArr;
};

// time o(n * 4^n) | space o(n * 4^n)