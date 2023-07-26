// 417. Pacific Atlantic Water Flow
// There is an m x n rectangular island that borders both the Pacific Ocean and 
// Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and 
// the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells.You are given an 
// m x n integer matrix heights where heights[r][c] represents the height above 
// sea level of the cell at coordinate(r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring 
// cells directly north, south, east, and west if the neighboring cell's height is 
// less than or equal to the current cell's height.Water can flow from any cell 
// adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] 
// denotes that rain water can flow from cell(ri, ci) to both the Pacific and Atlantic oceans.

// Example 1:
// Input: heights = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]
// Output: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
// Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
// [0, 4]: [0, 4] -> Pacific Ocean
// [0, 4] -> Atlantic Ocean
// [1, 3]: [1, 3] -> [0, 3] -> Pacific Ocean
// [1, 3] -> [1, 4] -> Atlantic Ocean
// [1, 4]: [1, 4] -> [1, 3] -> [0, 3] -> Pacific Ocean
// [1, 4] -> Atlantic Ocean
// [2, 2]: [2, 2] -> [1, 2] -> [0, 2] -> Pacific Ocean
// [2, 2] -> [2, 3] -> [2, 4] -> Atlantic Ocean
// [3, 0]: [3, 0] -> Pacific Ocean
// [3, 0] -> [4, 0] -> Atlantic Ocean
// [3, 1]: [3, 1] -> [3, 0] -> Pacific Ocean
// [3, 1] -> [4, 1] -> Atlantic Ocean
// [4, 0]: [4, 0] -> Pacific Ocean
// [4, 0] -> Atlantic Ocean
// Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.

// Example 2:
// Input: heights = [[1]]
// Output: [[0, 0]]
// Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.

function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length;
    const n = heights[0].length;
    const startingRow = 0;
    const endRow = m - 1;
    const startingCol = 0;
    const endCol = n - 1;

    const pacificSet = new Set<string>();
    const atlanticSet = new Set<string>();
    const results: number[][] = [];

    // rows
    for (let col = startingCol; col < n; col++) {
        dfs(heights, startingRow, col, heights[startingRow][col], m, n, pacificSet);
        dfs(heights, endRow, col, heights[endRow][col] , m, n, atlanticSet);
    }

    // cols
    for (let row = startingRow; row < m; row++) {
        dfs(heights, row, startingCol, heights[row][startingCol], m, n, pacificSet);
        dfs(heights, row, endCol, heights[row][endCol], m, n, atlanticSet);
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const pos = `${r}-${c}`;
            if (pacificSet.has(pos) && atlanticSet.has(pos)) {
                results.push([r, c]);
            }
        }
    }

    return results;
};

function dfs(heights, row, col, parentPeak, m, n, set): void {
    if (
        row < 0 || 
        row >= m || 
        col < 0 || 
        col >= n ||
        heights[row][col] < parentPeak ||
        set.has(`${row}-${col}`)
    ) {
        return;
    }
    const peak = heights[row][col];
    set.add(`${row}-${col}`);

    dfs(heights, row - 1, col, peak, m, n, set);
    dfs(heights, row + 1, col, peak, m, n, set);
    dfs(heights, row, col - 1, peak, m, n, set);
    dfs(heights, row, col + 1, peak, m, n, set);
}