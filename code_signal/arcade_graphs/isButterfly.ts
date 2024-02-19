// You decided to create an automatic image recognizer that will determine the object in the 
// image based on its contours. The main recognition system is already implemented, and now you 
// need to start the teaching process.

// Today you want to teach your program to recognize butterfly patterns, which means that you 
// need to implement a function that, given the adjacency matrix representing the contour, will 
// determine whether it's a butterfly or not.

// The butterfly contour looks like this:

// A butterfly

// Given the object's contour as an undirected graph represented by adjacency matrix adj 
// determine whether it's a butterfly or not.

// Example

// For

// adj = [[false, true, true, false, false],
//        [true, false, true, false, false],
//        [true, true, false, true, true],
//        [false, false, true, false, true],
//        [false, false, true, true, false]]
// the output should be
// solution(adj) = true.

// Here's what the given graph looks like:

// Example

// Input/Output

// [execution time limit] 5 seconds (ts)

// [memory limit] 1 GB

// [input] array.array.boolean adj

// An adjacency matrix of an undirected graph.

// Guaranteed constraints:
// adj.length == 5,
// adj[i].length == 5.

// [output] boolean

// true if the given contour is a butterfly, false otherwise.
// https://app.codesignal.com/arcade/graphs-arcade/contours-of-everything/shHv7RjLBCrDFN3np

interface Graph {
    [key: string]: number[];
}

function solution(adj: boolean[][]): boolean {
    const n = 5;
    if (adj.length !== n || adj[0].length !== n) return false;
    const graph = buildGraph(adj, n);
    return isValidButterfly(graph);
}

function isValidButterfly(graph): boolean {
    const { result, key } = isValidFour(graph);
    if (!result) return false;
    
    const isValid2 = isValidTwos(graph, key);
    if (!isValid2) return false;
    
    return true;
}

function isValidTwos(graph: Graph, keyWithSize4: string): boolean {
    const map = new Map<number, number>();
    
    for (const key in graph) {
        if (key === keyWithSize4) continue;
        
        if (
            graph[key].length !== 2 || 
            !graph[key].includes(Number(keyWithSize4))
        ) return false;
        
        const matchNumber = graph[key].find((num) => num !== Number(keyWithSize4));
        if (matchNumber === undefined || matchNumber === Number(key)) {
            return false;
        }
        
        map.set(Number(key), matchNumber);
    }
    
    if (map.size !== 4) return false;
    
    let isValid = true;
    map.forEach((val2, key2, map2) => {
        const val3 = map2.get(val2);
        if (key2 !== val3) isValid = false;
    })
    
    return isValid
}

function isValidFour(graph: Graph): { result: boolean, key: string } {
    let keyWithSize4 = "";
    for (const key in graph) {
        if (keyWithSize4 !== "" && graph[key].length === 4) {
            return { result: false, key: keyWithSize4 };
        }
        
        if (graph[key].length === 4) {
            keyWithSize4 = key
        }
    }
    
    if (!keyWithSize4) return { result: false, key: keyWithSize4 };
    
    const values = graph[keyWithSize4];
    for (const value of values) {
        if (value === Number(keyWithSize4)) {
            return { result: false, key: keyWithSize4 };
        }
    }
    
    if (new Set(values).size !== 4) {
        return { result: false, key: keyWithSize4 };
    }
    
    return { result: true, key: keyWithSize4 };
}

function buildGraph(adj: boolean[][], n: number): Graph {
    const graph = {}
    
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            const cell = adj[row][col]
            if (cell) {
                if (row in graph) {
                    graph[row].push(col)
                } else {
                    graph[row] = [col]
                }
            }
        }
    }
    
    return graph;
}
