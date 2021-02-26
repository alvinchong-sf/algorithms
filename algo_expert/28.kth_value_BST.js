// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// [1,2,3,5,5,15,17,20,22]
function findKthLargestValueInBst(tree, k) {
  let arr = [];
	inOrder(tree, arr);
	return arr[arr.length - k];
}

function inOrder(root, arr) {
	if(!root) return;
	inOrder(root.left, arr);
	arr.push(root.value);
	inOrder(root.right, arr);
}

// time o(n)
// space o(n)