// Good morning! Here's your coding interview problem for today.

// This problem was asked by Amazon.

// Given an integer k and a string s, find the length of the longest substring 
// that contains at most k distinct characters.

// For example, given s = "abcba" and k = 2, the longest substring with k 
// distinct characters is "bcb"


const longestSubstringWithKDistinctChar = (s, k) => {
    let max = 0, j = 0;
    const hash = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (hash[char] === undefined) hash[char] = 0;
        hash[char]++;

        while (findSize(hash) > k) {
            const jChar = s[j];
            hash[jChar]--;
            if (hash[jChar] === 0) delete hash[jChar];
            j++;
        };

        max = Math.max(max, i - j + 1);
    }

    return max;
};

const findSize = (hash) => {
    let size = 0;
    for (const key in hash) { size++; };
    return size;
};

const res = longestSubstringWithKDistinctChar("abcba", 2);
console.log(res);


/**
 *  return length of longest substring
 *  max = 3
 *  hash length = 2
 *  hash = {b: 1, a: 1}
 *  s = "a b c b a" and k = 2
 *               i
 *             j
 * 
 * 
 * 
 *  max = Max(max, i - j + 1)
 */