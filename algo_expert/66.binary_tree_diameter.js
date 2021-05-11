function binaryTreeDiameter(tree) {
	if(!tree) return null;
    let leftHeight = findHeight(tree.left);
	let rightHeight = findHeight(tree.right);
	let sum = leftHeight + rightHeight;
	return Math.max(sum, binaryTreeDiameter(tree.left), binaryTreeDiameter(tree.right));
}

const findHeight = (root) => {
	if(!root) return 0;
	let left = findHeight(root.left);
	let right = findHeight(root.right);
	return 1 + Math.max(left, right);
}

// time o(n^2)
// space o(n)