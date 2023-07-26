// 1197. Minimum Knight Moves
// In an infinite chess board with coordinates from -infinity to +infinity, you 
// have a knight at square [0, 0].

// A knight has 8 possible moves it can make, as illustrated below. Each move is 
// two squares in a cardinal direction, then one square in an orthogonal direction.

// Return the minimum number of steps needed to move the knight to the square [x, y].  
// It is guaranteed the answer exists.

// Example 1:
// Input: x = 2, y = 1
// Output: 1
// Explanation: [0, 0] → [2, 1]


var minKnightMoves = function(x, y) {
    const movesArr = [[2,1], [2,-1], [-2,1], [-2,-1], [1,2], [1,-2], [-1,2], [-1,-2]];
    const set = new Set(["0-0"]);
    let numMoves = 0;
    const queue = [[0, 0]];
    
    while(queue.length) {
        const size = queue.length;
        for(let i = 0; i < size; i++) {
            const pos = queue.shift();
            for(const move of movesArr) {
                const newXPos = pos[0] + move[0];
                const newYPos = pos[1] + move[1];
                if(!set.has(`${newXPos}-${newYPos}`)) {
                    if (newXPos === x && newYPos === y) return numMoves + 1;
                    set.add(`${newXPos}-${newYPos}`);
                    queue.push([newXPos, newYPos]);
                }
            }
        }
        numMoves++
    }
};

// const movements = [[1,2], [1,-2], [2,1], [2,-1], [-1,2], [-1,-2], [-2,1], [-2,-1]];
    // const queue = [[startRow, startCol]];
    // const visitedSet = new Set();
    // let moves = 0;
    
    // while (queue.length) {
    //     const size = queue.length;
    //     for (let i = 0; i < size; i++) {
    //         const [oldRow, oldCol] = queue.shift();
    //         if (oldRow === endRow && oldCol === endCol) return moves;
    //         visitedSet.add(`${oldRow}-${oldCol}`);
    //         for (let j = 0; j < movements.length; j++) {
    //             const movement = movements[j];
    //             const [x, y] = movement;
    //             const newRow = oldRow + x;
    //             const newCol = oldCol + y;
    //             if (newRow >= n || newRow < 0 || newCol >= n || newCol < 0) continue;
    //             if (!visitedSet.has(`${newRow}-${newCol}`)) continue;
    //             queue.push([newRow, newCol]);
    //         };
    //     }
    //     moves++;
    // }
    
    // return -1;

// time o((n * m)^2) | space o((n * m)^2)
//https://leetcode.com/problems/minimum-knight-moves/solution/