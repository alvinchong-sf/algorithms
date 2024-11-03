/*
51. N-Queens
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two 
queens attack each other. Given an integer n, return all distinct solutions to the n-queens 
puzzle. You may return the answer in any order. Each solution contains a distinct board 
configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty 
space, respectively.

Example 1:
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

Example 2:
Input: n = 1
Output: [["Q"]]

Constraints:
    1 <= n <= 9

https://leetcode.com/problems/n-queens/description/
*/

function solveNQueens(n: number): string[][] {
    const colSet = new Set<number>(), leftSet = new Set<number>(), rightSet = new Set<number>();
    const temp: string[][] = new Array(n).fill(null).map(() => new Array(n).fill("."));
    const result: string[][] = []
    dfs(n, colSet, leftSet, rightSet, temp, result, 0);
    return result;
};

function dfs(
    n: number, 
    colSet: Set<number>, 
    leftSet: Set<number>, 
    rightSet: Set<number>, 
    temp: string[][],
    result: string[][], 
    row: number,
): void {
    if (row >= n) {
        const res: string[] = [];
        for (const r of temp) {
            res.push(r.join(""));
        }
        result.push(res);
        return;
    }

    for (let col = 0; col < n; col++) {
        if (!colSet.has(col) && !leftSet.has(row - col) && !rightSet.has(row + col)) {
            temp[row][col] = "Q";
            colSet.add(col);
            leftSet.add(row - col);
            rightSet.add(row + col);
            dfs(n, colSet, leftSet, rightSet, temp, result, row + 1);
            colSet.delete(col);
            leftSet.delete(row - col);
            rightSet.delete(row + col);
            temp[row][col] = "."
        }
    }
}