function caesarCipherEncryptor(string, key) {
	let alphaHash = {};
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	for(let i = 0; i < alphabet.length; i++) {
		let char = alphabet[i];
		if(alphaHash[char] === undefined) alphaHash[char] = i
	}
	
	let newStr = "";
	
	for(let i = 0; i < string.length; i++) {
		let char = string[i];
		let oldIdx = alphaHash[char];
		let newIdx = (oldIdx + key) % alphabet.length;
		let newChar = alphabet[newIdx];
		newStr = newStr.concat(newChar);
	}
	return newStr;
}

// time o(n) no nested iteration or includes or indexOf;
// space o(n)