/*
Clone Graph

Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

Time: O(n) | Space: O(n)
https://leetcode.com/problems/clone-graph/
*/

function cloneGraph(node) {
    const graph = new Map();
    dfs(node, graph);

    graph.forEach((newNode, oldNode) => {
        for (const oldChild of oldNode.neighbors) {
            const newChild = graph.get(oldChild);
            newNode.neighbors.push(newChild)
        }
    })

    return graph.get(node);
};

function dfs(node, graph) {
    if (graph.has(node)) return;
    if (!node) return;

    graph.set(node, new Node(node.val));
    for (const neighbor of node.neighbors) {
        dfs(neighbor, graph);
    }
}