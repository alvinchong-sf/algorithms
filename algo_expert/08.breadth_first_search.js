class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    let queue = [this];
		
		while(queue.length) {
			let node = queue.shift();
			array.push(node.name);
			queue.push(...node.children)
		}
		return array;
  }
}

// time o(v + e) vertex + edge;
// space o(v) number of vertex or node;

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