/*
797. All Paths From Source to Target

Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, 
find all possible paths from node 0 to node n - 1, and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit 
from node i (i.e., there is a directed edge from node i to node graph[i][j]).

Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Time: O(v + e) | Space: O(v)
https://leetcode.com/problems/all-paths-from-source-to-target/
*/

function allPathsSourceTarget(graph: number[][]): number[][] {
    const n = graph.length;
    const result: number[][] = [];
    const temp: number[] = [0];
    dfs(graph, result, temp, 0, n);
    return result;
};

function dfs(
    graph: number[][], 
    result: number[][], 
    temp: number[], 
    node: number, 
    n: number,
): void {
    if (node === n - 1) {
        result.push(temp.slice());
        return;
    }
    for (const child of graph[node]) {
        temp.push(child);
        dfs(graph, result, temp, child, n)
        temp.pop();
    }
}