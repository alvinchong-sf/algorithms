// https://leetcode.com/problems/sudoku-solver/description/
// 37. Sudoku Solver
// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

 

// Example 1:


// Input: board = [
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]]
// Output: [
//     ["5","3","4","6","7","8","9","1","2"],
//     ["6","7","2","1","9","5","3","4","8"],
//     ["1","9","8","3","4","2","5","6","7"],
//     ["8","5","9","7","6","1","4","2","3"],
//     ["4","2","6","8","5","3","7","9","1"],
//     ["7","1","3","9","2","4","8","5","6"],
//     ["9","6","1","5","3","7","2","8","4"],
//     ["2","8","7","4","1","9","6","3","5"],
//     ["3","4","5","2","8","6","1","7","9"]]

interface HashMap {
    [key: string]: {
        [key: string]: Set<string>
    }
}

enum Constants {
    ROWS = 'rows',
    COLS = 'cols',
    SQRS = 'sqrs',
    ADD = 'add',
    DEL = 'del',
    N = 9,
}

function solveSudoku(board: string[][]): void {
    const hashMap = buildHashMap(board);
    const [startRow, startCol] = getNextCoords(board);
    dfs(board, startRow, startCol, hashMap);
};

function dfs(board: string[][], row: number, col: number, hashMap: HashMap): boolean {
    const { ADD, DEL, N } = Constants;
    if (row >= N || col >= N) return true;
    if (board[row][col] !== ".") return false

    for (let i = 1; i <= N; i++) {
        if (isValidNum(hashMap, row, col, i)) {
            updateBoardAndMap(board, hashMap, row, col, i, ADD);

            const [nr, nc] = getNextCoords(board);
            const isValidBoard = dfs(board, nr, nc, hashMap);

            if (isValidBoard) return true;
            updateBoardAndMap(board, hashMap, row, col, i, DEL);
        }
    }
    return false;
}

function isValidNum(hashMap: HashMap, row: number, col: number, num: number): boolean {
    const { ROWS, COLS, SQRS } = Constants;
    const strNum = num.toString();
    const sqIdx = getSqrsIdx(row, col);

    const rowSet = hashMap[ROWS][row];
    const colSet = hashMap[COLS][col];
    const sqrSet = hashMap[SQRS][sqIdx];

    return rowSet.has(strNum) || colSet.has(strNum) || sqrSet.has(strNum) ? false : true;
}

function updateBoardAndMap(
    board: string[][],
    hashMap: HashMap,
    row: number,
    col: number,
    num: number,
    operator: Constants,
): void {
    const { ROWS, COLS, SQRS, ADD, DEL } = Constants;
    const strNum = num.toString();
    const sqIdx = getSqrsIdx(row, col);

    if (operator === ADD) {
        board[row][col] = strNum;
        hashMap[ROWS][row].add(strNum);
        hashMap[COLS][col].add(strNum);
        hashMap[SQRS][sqIdx].add(strNum);
    }

    if (operator === DEL) {
        board[row][col] = ".";
        hashMap[ROWS][row].delete(strNum);
        hashMap[COLS][col].delete(strNum);
        hashMap[SQRS][sqIdx].delete(strNum);
    }
}

function getNextCoords(board: string[][]): [number, number] | [Constants.N, Constants.N] {
    const { N } = Constants;
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            const cell = board[r][c];
            if (cell === ".") return [r, c];
        }
    }

    return [N, N];
}

function buildHashMap(board: string[][]): HashMap {
    const { ROWS, COLS, SQRS, N } = Constants;
    const hashMap = {
        [ROWS]: {},
        [COLS]: {},
        [SQRS]: {},
    };

    for (let i = 0; i < N; i++) {
        hashMap[ROWS][i] = new Set();
        hashMap[COLS][i] = new Set();
        hashMap[SQRS][i] = new Set();
    }

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            const cell = board[r][c];
            if (cell !== ".") {
                const sqrIdx = getSqrsIdx(r, c);
                hashMap[ROWS][r].add(cell);
                hashMap[COLS][c].add(cell);
                hashMap[SQRS][sqrIdx].add(cell);
            }
        }
    }

    return hashMap;
}

function getSqrsIdx(row: number, col: number): number {
    if (row >= 0 && row <= 2 && col >= 0 && col <= 2) {
        return 0;
    } else if (row >= 0 && row <= 2 && col >= 3 && col <= 5) {
        return 1;
    } else if (row >= 0 && row <= 2 && col >= 6 && col <= 8) {
        return 2;
    } else if (row >= 3 && row <= 5 && col >= 0 && col <= 2) {
        return 3;
    } else if (row >= 3 && row <= 5 && col >= 3 && col <= 5) {
        return 4;
    } else if (row >= 3 && row <= 5 && col >= 6 && col <= 8) {
        return 5;
    } else if (row >= 6 && row <= 8 && col >= 0 && col <= 2) {
        return 6;
    } else if (row >= 6 && row <= 8 && col >= 3 && col <= 5) {
        return 7;
    } else if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
        return 8;
    } else {
        return -1;
    }
}