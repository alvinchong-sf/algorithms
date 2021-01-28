class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // using stack
  depthFirstSearch(array) {
    let stack = [this];
		
		while(stack.length) {
			let node = stack.pop();
			array.push(node.name);
			node.children.forEach((child) => {
				child.depthFirstSearch(array)
			})
		}
		return array
	}
  
  // algo expert way
  // depthFirstSearch(array) {
	// 	array.push(this.name);
	// 	this.children.forEach((child) => {
	// 		child.depthFirstSearch(array);
	// 	})
	// 	return array;
	// }
}
// time o(v + e) vertex(node) + edge
// space o(v) by the number of vertex

// {
//   "graph": {
//     "nodes": [
//       {"children": ["B", "C", "D"], "id": "A", "value": "A"},
//       {"children": ["E", "F"], "id": "B", "value": "B"},
//       {"children": [], "id": "C", "value": "C"},
//       {"children": ["G", "H"], "id": "D", "value": "D"},
//       {"children": [], "id": "E", "value": "E"},
//       {"children": ["I", "J"], "id": "F", "value": "F"},
//       {"children": ["K"], "id": "G", "value": "G"},
//       {"children": [], "id": "H", "value": "H"},
//       {"children": [], "id": "I", "value": "I"},
//       {"children": [], "id": "J", "value": "J"},
//       {"children": [], "id": "K", "value": "K"}
//     ],
//     "startNode": "A"
//   }
// }