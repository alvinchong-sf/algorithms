class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
	let counter = 1;
	let first = head;
	while(first.next) {
		first = first.next;
		counter++
	}
    if(Math.abs(k) % counter === 0) return head;
    let fast = head;
    let slow = head;
	if(k > 0) {
		while((k % counter) > 0) {
			fast = fast.next;
			k--;
		}
		while(fast.next) {
			slow = slow.next;
			fast = fast.next;
		}
		let newHead = slow.next;
		slow.next = null;
		fast.next = head;
		return newHead;
	} else if (k < 0) {
		k *= -1;
		while((k - 1) % counter > 0) {
			fast = fast.next;
			k--;
		}
		while(slow.next) {
			slow = slow.next;
		}
		let newHead = fast.next;
		fast.next = null
		slow.next = head;
		return newHead;
	}
};

// time o(n)
// space o(1)
// using 2 pointer


class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
  let length = 1;
	let currentNode = head;
	while(currentNode.next) {
		currentNode = currentNode.next;
		length++;
	}
	if(Math.abs(k) % length === 0) return head;
	let oldTail = currentNode;
	oldTail.next = head;
    let pointer = head;

	if(k > 0) {
		let banana = length - (k % length);
		while(banana > 1) {
			pointer = pointer.next;
			banana--;
		}
		let newHead = pointer.next;
		pointer.next = null;
		return newHead;
	} else if(k < 0) {
		k *= -1;
		while(Math.abs(k) > 1) {
			pointer = pointer.next;
			k--;
		}
		let newHead = pointer.next;
		pointer.next = null;
		return newHead;
	}
}

// time o(n)
// space o(1)
// using 1 pointer and length to figure newHead, newTail, oldHead, oldTail
