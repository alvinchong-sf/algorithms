function staircaseTraversal(height, maxSteps, memo={0: 1, 1: 1}) {
	//              __
	//           __| 4 = 7
	//        __| 3 = 4
	//     __| 2 = 2
	//  __| 1 = 1
	//   0 = 1
	// maxstep 2    maxstep3
	// 1-1-1-1      1-1-1-1
	// 1-1-2        1-1-2
	// 1-2-1        1-2-1
	// 2-1-1        2-1-1
	// 2-2          2-2
	//              3-1
	//              1-3
	// fib(n - 1) + fib(n - 2) + fib(n - 3) + fib(n - 4) ..... fib(n - k)
	if(height in memo) {
		return memo[height]
	} else {
		let numWays = 0;
		for(let i = 1; i <= Math.min(maxSteps, height); i++) {
			numWays += staircaseTraversal(height - i, maxSteps, memo);
		}
		memo[height] = numWays;
		return memo[height];
	}
}

// time o(h * s) h is height and s is steps 
// space o(n)