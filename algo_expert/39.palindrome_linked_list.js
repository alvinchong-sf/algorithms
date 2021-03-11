class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function linkedListPalindrome(head) {
	// 2 pointers fast and slow; fast moves 2 steps ahead of slow
	// once fast reaches null slow will reach the middle of the linked list
	// using the helper method reverseList we just build , plug slow into the method
	// use 2 pointer to traverse thru both list
	// if their value does not equal each other at each traversal; return false
	// if we reach the end of the traversal; return true
	// 1 -> 2 -> 3 -> 4
	                       // f
		           // s
	let slow = head;
	let fast = head;
	while(fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	let pal = reverseList(slow);
	
	let first = head;
	let second = pal;
	
	// 1 -> 2 -> 3 -> 4
	        // f
		      // s
	
	while(first && second) {
		if(first.value !== second.value) return false;
		first = first.next;
		second = second.next;
	}
	return true;
}

function reverseList(head) {
	// 1 -> 2 -> 3 -> 4 
	// null <- 1 <- 2 <- 3 <- 4 
	// initialize prevNode to be null
	// set nextNode = currentNode.next
	// set currentNode.next to point to prevNode
	// set prevNode to eq currentNode;
	// set currentNode to be nextNode
	
	let prevNode = null;        
	let currentNode = head;    
	while(currentNode) {        // null <- 1 <- 2 <- 3 <- 4
		let nextNode = currentNode.next; // null
		currentNode.next = prevNode;     // 3
		prevNode = currentNode;          // 4
		currentNode = nextNode;          // null
	}
	return prevNode;
}

// time o(n)
// space o(1)