class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

////////////////////////////////////////////////////

// BFS

function invertBinaryTree(tree) {
	let queue = [tree];
	
	while(queue.length) {
		let node = queue.shift();
		let temp = node.right;
		node.right = node.left;
		node.left = temp;
		
		if(node.left) queue.push(node.left);
		if(node.right) queue.push(node.right);
	}
	
	return tree;
}

// time o(n) => traverse all nodes
// space o(n) => queue array

///////////////////////////////////////////////////////

// DFS

function invertBinaryTree(tree) {
  if(!tree) return null;
	let temp = tree.left;
	tree.left = tree.right;
	tree.right = temp;
	
	if(tree.left) invertBinaryTree(tree.left);
	if(tree.right) invertBinaryTree(tree.right);
	
	return tree;
}

// time o(n) => traverse all nodes
// space o(h) => the number of recursive call stack is the same as the height of the tree

