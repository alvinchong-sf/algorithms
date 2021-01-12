function treeHeight(root) {
    if(!root) return -1;

    let left = treeHeight(root.left);
    let right = treeHeight(root.right);

    return 1 + Math.max(left, right);
}


module.exports = {
    treeHeight
};