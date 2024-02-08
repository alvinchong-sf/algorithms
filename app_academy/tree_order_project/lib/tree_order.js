function inOrderArray(root) {
    let newArr = [];
    if(!root) return newArr;

    let left = inOrderArray(root.left);
    let mid = root.val;
    let right = inOrderArray(root.right);

    return newArr.concat(left).concat([mid]).concat(right);
}

function postOrderArray(root) {
    let newArr = [];
    if(!root) return newArr;

    let left = postOrderArray(root.left);
    let mid = root.val;
    let right = postOrderArray(root.right);

    return newArr.concat(left).concat(right).concat([mid]);
}


module.exports = {
    inOrderArray,
    postOrderArray
};