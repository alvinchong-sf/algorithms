function groupAnagrams(words) {
	// hash ; key => sorted word ; value = [ words[i] ]
	// hash[sorted version of words[i]] = [words[i], words[i + 1]];
	// ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
	//  hash["oy"] => ["yo"],
	//  hash["act"] => ["act", "tac"],
	//  hash["flop"] => ["flop"]
	
	let hash = {};
	for(let i = 0; i < words.length; i++) {
		let word = words[i];
		let sorted = word.split("").sort();
		if(hash[sorted] === undefined) hash[sorted] = [];
		hash[sorted].push(word);
	}
	return Object.values(hash);
}

// time o( n * mlog(m) )
// space o(n * m)