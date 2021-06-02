function firstNonRepeatingCharacter(string) {
	let hash = {};
	
	for(let i = 0; i < string.length; i++) {
		let char = string[i];
		if(hash[char] === undefined) hash[char] = []
		hash[char].push(i)
	}
	
	for(const [k, v] of Object.entries(hash)) {
		if(v.length === 1) return v[0];
	}
	return -1;
}

// time o(n) | space o(n)