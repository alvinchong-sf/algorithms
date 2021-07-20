// Memoization
// time o(n^2) | space o(n)
function numberOfBinaryTreeTopologies(n) {
	const hash = {0: 1};
	
	const helper = (n) => {
		if(hash[n] !== undefined) return hash[n];
		let currTotal = 0;
		for(let i = 0; i < n; i++) {
			let j = n - 1 - i;
			const left = helper(i);
			const right = helper(j);
			currTotal += left * right;
		}
		hash[n] = currTotal;
		return currTotal;
	}
	
	return helper(n);
}

// Tabulation
// time o(n^2) | space o(n)
function numberOfBinaryTreeTopologies(n) {
	if(n <= 1) return 1;
	const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
	
    for(let i = 2; i <= n; i++){
        for(let j = 1; j <= i; j++){
            dp[i] = dp[i] + (dp[i - j] * dp[j - 1])
        }
    }
	
    return dp[n]
};