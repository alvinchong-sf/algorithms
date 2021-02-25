class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // first iterate entire node and count its length using a counter
	// then set diff = length - k
	// then go until diff - 1 node 
	// then set the node.next = node.next.next
	
	let length = 0;          // 10
	let currentNode = head;  // null
	while(currentNode) {
		length++;
		currentNode = currentNode.next;
	}
	let diff = length - k;    // 10 - 10 = 0
	if(diff === 0) {
		head.value = head.next.value;
		head.next = head.next.next;
	} else {
		currentNode = head; // 0
	}      
	for(let i = 0; i < diff; i++) {    // i=5
		if(i === diff - 1) {    // i === 5 => false
			currentNode.next = currentNode.next.next; // 5 -> 7
		}
		currentNode = currentNode.next;   // 5
	}
}

// time o(n + m)
// space o(1)
///////////////////////////////////////////////////////////////////////////////


class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let counter = 0;
	let first = head;
	let second = head;
	
	while(counter < k) {
		second = second.next;
		counter++;
	}
	
	if(!second) {
		head.value = head.next.value;
		head.next = head.next.next;
		return;
	}
	
	while(second.next) {
		first = first.next;
		second = second.next
	}
	first.next = first.next.next
}

// time o(n)
// space o(1)
