function iterativeInOrderTraversal(tree, callback) {
  // inorder : left -> node -> right
	// 3 cases
	// case1: if node.parent === prev node, keep going down
	// case1: left ? left : printself && (right ? right : up)
	// case2: if node.right === prev node, only way is up
	// case3: if node.left === prev node, printself and 
	// case3: right ? right : up
	
	let prevNode = null;
	let currNode = tree;
	let nextNode;
	
	while(currNode) {
		// case1: if node.parent === prev node, keep going down
		if(currNode.parent === prevNode) {
			// case1: left ? left : printself && (right ? right : up)
			if(currNode.left) {
				nextNode = currNode.left;
			} else {
				callback(currNode)
				if(currNode.right) {
					nextNode = currNode.right;
				} else {
					nextNode = currNode.parent;
				}
			}
			// case2: if node.right === prev node, only way is up
		} else if(currNode.right === prevNode) {
			nextNode = currNode.parent;
			// case3: if node.left === prev node, printself and 
		} else if(currNode.left === prevNode) {
			callback(currNode);
			// case3: right ? right : up
			if(currNode.right) {
				nextNode = currNode.right
			} else {
				nextNode = currNode.parent;
			}
		}
		prevNode = currNode;
		currNode = nextNode;
	}
}

// time o(n) => visiting all nodes
// space o(1) => constant extra space usage
