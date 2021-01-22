// recursive 
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



// iterative
function getNthFib(n) {
    let currentFib = [0, 1];
    let count = 3;

    while(count <= n) {
        let nextFib = currentFib[0] + currentFib[1];
        currentFib.shift();
        currentFib.push(nextFib);
        count++;
    }
    if(n === 1) return 0;
    return currentFib[1];
}

// time : o(n);
// space: o(1);

