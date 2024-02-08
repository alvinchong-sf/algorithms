function breadthFirstArray(root) {
    let queue = [root];
    let newArr = [];

    while(queue.length) {
        let node = queue.shift();
        newArr.push(node.val)

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }

    return newArr;
}

module.exports = {
    breadthFirstArray
};