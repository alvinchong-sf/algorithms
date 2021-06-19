// Given two different positions on a chess board, find the least number of moves 
// it would take a knight to get from one to the other. The positions will be 
// passed as two arguments in algebraic notation. For example, knight("a3", "b5") 
// should return 1.

// The knight is not allowed to move off the board. The board is 8x8.

// For information on knight moves, see https://en.wikipedia.org/wiki/Knight_%28chess%29

// For information on algebraic notation, see https://en.wikipedia.org/wiki/Algebraic_notation_%28chess%29

// (Warning: many of the tests were generated randomly. If any do not work, the test 
//     cases will return the input, output, and expected output; please post them.)

function knight(start, finish) {
  const directions = [[2,1], [2,-1], [1,2], [1,-2], [-2,1], [-2,-1], [-1,2], [-1,-2]];
  const hash = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };
  const startPos = [ 8 - start[1], hash[start[0]] ];
  const endPos = [ 8 - finish[1], hash[finish[0]] ];
  const visitedSet = new Set([`${startPos[0]}-${startPos[1]}`]);
  let moves = 0;
  const queue = [startPos];
  
  while(queue.length) {
    const size = queue.length;
    for(let i = 0; i < size; i++) {
      const oldPos = queue.shift();
      for(const dir of directions) {
        const newRow = oldPos[0] + dir[0];
        const newCol = oldPos[1] + dir[1];
        if(newRow > 7 || newCol > 7 || newRow < 0 || newCol < 0 || visitedSet.has(`${newRow}-${newCol}`)) continue;
        if(newRow === endPos[0] && newCol === endPos[1]) return moves + 1;
        queue.push([newRow, newCol]);
        visitedSet.add(`${newRow}-${newCol}`)
      }
    }
    moves++;
  }
};

// time o(1) | space o(1)
// https://www.codewars.com/kata/549ee8b47111a81214000941/javascript