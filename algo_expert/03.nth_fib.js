function getNthFib(n, memo={1: 0, 2: 1}) {
	if(n in memo) {
		return memo[n];
	} else {
		memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
		return memo[n];
	}
}

// time : o(n) because of memo, if not it will be o(n^2)
// space : o(n) callstacks stores linear space