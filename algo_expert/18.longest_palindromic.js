function longestPalindromicSubstring(string) {
  let longest = [0, 1];
	
	for(let i = 1; i < string.length; i++) {
		let odd = findLongest(string, i - 1, i + 1);
		let even = findLongest(string, i - 1, i);
		let oddDiff = odd[1] - odd[0];
		let evenDiff = even[1] - even[0];
		let currLongest = oddDiff > evenDiff ? odd : even
		longest = longest[1] - longest[0] > currLongest[1] - currLongest[0] ? longest : currLongest;
	}
	return string.slice(longest[0], longest[1]);
}

const findLongest = (str, left, right) => {
	while(left >= 0 && right < str.length) {
		if(str[left] !== str[right]) break;
		left--;
		right++;
	}
	return [left + 1, right];
}

// time o(n^2)
// space o(n)