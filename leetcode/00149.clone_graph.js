// Clone Graph

// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

var cloneGraph = function(node, hash = {}) {
    if(!node) return node;
    if(hash[node.val] === undefined) {
        hash[node.val] = new Node(node.val);
        hash[node.val].neighbors = node.neighbors.map(child => cloneGraph(child, hash))
    }
    
    return hash[node.val];
};

// time o(n) | space o(n)
// https://leetcode.com/problems/clone-graph/