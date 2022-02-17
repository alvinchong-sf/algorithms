/*
	brute force way | permutation
	time o(n!)
	minWaitTime = 6
	"queries": [1, 4, 5]
	[5, 1, 4]
	 0  5  6 = 11
	[1, 4, 5]
	 0  1  5 = 6
	[4, 5, 1]
	 0  4  9 = 13
	[4, 1, 5]
	 0  4  5 = 9
	[1, 5, 4] 
	 0  1  6 = 7
	[5, 4, 1]
	 0  5  9 = 14
*/


function minimumWaitingTime(queries) {
	queries.sort((a, b) => a - b);
	
	let totalTime = 0,
			prevTime = 0;
	
	for (let i = 1; i < queries.length; i++) {
		const prevQuery = queries[i - 1];
		prevTime += prevQuery;
		totalTime += prevTime;
	}
	
	return totalTime;
}