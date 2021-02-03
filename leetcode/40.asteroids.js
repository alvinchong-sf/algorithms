// We are given an array asteroids of integers representing asteroids in a row.
// For each asteroid, the absolute value represents its size, and the sign 
// represents its direction (positive meaning right, negative meaning left). 
// Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, 
// the smaller one will explode. If both are the same size, both will explode. 
// Two asteroids moving in the same direction will never meet.



const collision = (asteroids) => {
	for(let i = 0; i < asteroids.length - 1; i++) {
		Let asteroid = asteroids[i];
		Let nextAst = asteroids[i + 1];
        if( (asteroid < 0 && nextAst < 0) || (asteroid > 0 && nextAst > 0) || (asteroid < 0 || nextAst > 0) ) {
            continue;
        }
        if( (asteroid > 0 && nextAst < 0)) {
            // Let smallerVal = Math.min(asteroid, nextAst);
            // Let smallerIdx = asteroids.indexOf(smallerVal);
            // asteroids.splice(smallerIdx, 1);
            if(asteroid === Math.abs(nextAst)){
                asteroids.splice(i, 2);
            } else if(asteroid > Math.abs(nextAst)) {
                asteroids.splice(i + 1, 1)
            } else (asteroid < Math.abs(nextAst)) {
                asteroids.splice(i, 1)
            }
                i = -1;
            }
        }
        return asteroids;
}

// Input:
// asteroids = [1,2,3,-3,4,-2]
// Output = [1, 2, 4]
// asteroids = [1,2,2,-3,4,-2]
// Output = [-3,4]
// Time o(n * m) for sure polynomial
// Space o(1) extra space