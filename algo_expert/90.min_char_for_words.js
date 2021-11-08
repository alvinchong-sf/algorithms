// Minimum Character For Words

// Write a function that takes in an array of words and returns the smallest array
// of characters needed to form all of the words. The characters don't need to be 
// in any particular order.

// For example, the characters [y, r , o u] are needed to form the words 
// [your, you, or, yo].Character

// words = [this, that, did, deed, them!, a]
// output = [t, t, h, i, s, a, d, d, e, e, m , !]

function minimumCharactersForWords(words) {
	const resultArr = [];
	const mainHash = {};
	
	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		helper(word, mainHash);
	}
	
	for(let [char, count] of Object.entries(mainHash)) {
		while(count !== 0) {
			resultArr.push(char);
			count--;
		}
	}
	
	return resultArr;
}

function helper(word, mainHash) {
	const sideHash = {};
	
	for(let j = 0; j < word.length; j++) {
		const char = word[j];
		if(sideHash[char] === undefined) sideHash[char] = 0;
		sideHash[char]++;
	}
	
	for(const [char, count] of Object.entries(sideHash)) {
		if(mainHash[char] === undefined) mainHash[char] = 0;
		mainHash[char] = Math.max(mainHash[char], sideHash[char]);
	};
}

// time o(n * m)
// space o(c)
// https://www.algoexpert.io/questions/Minimum%20Characters%20For%20Words