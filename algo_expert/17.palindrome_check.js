function isPalindrome(string) {
  let mid = Math.floor(string.length / 2);
	let i = 0;
	let j = string.length - 1;
	
	while (i < mid && j >= mid) {
		if(string[i] !== string[j]) return false;
		i++;
		j--;
	}
	return true;
}

// time o(n) one loop
// space o(1) no additional storing of space
