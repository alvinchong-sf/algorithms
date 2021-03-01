// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  // 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> null
	// 2 -> 1 -> 0 -> null
	let currentNode = head; // 1
	// let temp = null;
	let prev = null; // 1
	
	while(currentNode) {
		// temp = currentNode;
		let next = currentNode.next
		currentNode.next = prev;
		prev = currentNode;
		currentNode = next;
	}
	return prev;
}

// time o(n)
// space o(1)