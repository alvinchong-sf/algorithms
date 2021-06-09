function minMoves(n, startRow, startCol, endRow, endCol) {
    const knightMoves = [ [2,1], [2,-1], [-2,1], [-2,-1], [1,2], [1,-2], [-1,2], [-1,-2] ];
    const visitedSet = new Set([`${startRow}-${startCol}`]);
    let count = 0;
    const queue = [[startRow, startCol]];

    while(queue.length) {
        const size = queue.length;
        for(let i = 0; i < size; i++) {
            const node = queue.shift();
            const [oldRow, oldCol] = node;
            for(const move of knightMoves) {
                const newRow = oldRow + move[0];
                const newCol = oldCol + move[1];
                if(newRow >= 0 && newCol >= 0 && newRow < n && newCol < n && !visitedSet.has(`${newRow}-${newCol}`)) {
                    if(newRow === endRow && newCol === endCol) return count + 1;
                    queue.push([newRow, newCol]);
                    visitedSet.add(`${newRow}-${newCol}`);
                }
            }
        }
        count++;
    }
    return -1;
}