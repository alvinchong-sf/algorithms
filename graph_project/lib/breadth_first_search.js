function breadthFirstSearch(startingNode, targetVal) {
    
    let queue = [startingNode];
    let set = new Set();

    while(queue.length) {
        let node = queue.shift();
        if(set.has(node)) continue; 
        set.add(node);
        if(node.val === targetVal) return node;
        node.neighbors.forEach((childNode) => queue.push(childNode))
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};