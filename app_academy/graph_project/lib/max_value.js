function maxValue(node, visited=new Set()) {
    let maxVal = 0;

    let queue = [node];

    while(queue.length) {
        let apple = queue.shift();
        if(visited.has(apple)) continue;
        visited.add(apple);
        if(apple.val > maxVal) maxVal = apple.val;
        apple.neighbors.forEach((childNode) => queue.push(childNode));
    }

    return maxVal;
}

module.exports = {
    maxValue
};