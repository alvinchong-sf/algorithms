function generateDocument(characters, document) {
	let hash = {};
	
	for(const char of characters) {
		if(hash[char] === undefined) hash[char] = 0;
		hash[char]++;
	}
	
	for(const char of document) {
		if(hash[char] === undefined) hash[char] = 0;
		hash[char]--;
	}
	
	return Object.values(hash).every(ele => ele >= 0);
}

// time o(n) | space o(n)
