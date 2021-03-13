function tournamentWinner(competitions, results) {
  // [home, away]
	// 1 => home won
	// 0 => away won
	/////////////////
	// {
	// 	html: 0,
	// 	c#: 1,
	// 	pythod: 2
	// }
	
	// [[html, c#], [c#, python], [python, html]]
  //	                                  i
	// [0,0,1]
	//      j
	
	// time o(n)
	// space o(t) 
	
	let hash = {};
	
	for(let i = 0; i < competitions.length; i++) {
		let home = competitions[i][0];
		let away = competitions[i][1];
		
		if(hash[home] === undefined) hash[home] = 0;
		if(hash[away] === undefined) hash[away] = 0;
		
		if(results[i] === 1) {
			hash[home]++;
		} else {
			hash[away]++;
		}
	}
	let score = Object.values(hash);
	let winningScore = Math.max(...score);
	for(const[team, score] of Object.entries(hash)) {
		if(score === winningScore) return team;
	}
}

// time o(n)
// space o(t) where t is the number of teams