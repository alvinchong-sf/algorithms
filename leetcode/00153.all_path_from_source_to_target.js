// 797. All Paths From Source to Target

// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, 
// find all possible paths from node 0 to node n - 1, and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit 
// from node i (i.e., there is a directed edge from node i to node graph[i][j]).

// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.


// time o(v + e) | space o(v)
var allPathsSourceTarget = function(graph) {
    
    let resultArr = [];                 
    let stack = [0];                       
    
    const dfs = (node) => {
        if(node === graph.length - 1) {
            resultArr.push(stack.slice());
            return;
        }
        
        let neighbors = graph[node];
        
        for(const neighbor of neighbors) {
            stack.push(neighbor);
            dfs(neighbor)                 
            stack.pop();
        }
        
    }
    
    dfs(0);
    
    return resultArr;
};

// https://leetcode.com/problems/all-paths-from-source-to-target/