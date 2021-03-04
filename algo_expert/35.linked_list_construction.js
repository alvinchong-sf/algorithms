class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if(!this.head && !this.tail) {
        this.head = node;
        this.tail = node;
        return;
    }
    this.insertBefore(this.head, node);
		
  }

  setTail(node) {
    if(!this.head && !this.tail) {
        this.head = node;
        this.tail = node;
        return;
    }
    this.insertAfter(this.tail, node)
  }

  insertBefore(node, nodeToInsert) {
    if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    let prevNode = node.prev;
    nodeToInsert.next = node;
    nodeToInsert.prev = prevNode;
    if(!prevNode) {
        this.head = nodeToInsert;
    } else {
        prevNode.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    let nextNode = node.next;
    nodeToInsert.next = nextNode;
    nodeToInsert.prev = node;
    if(!nextNode) {
        this.tail = nodeToInsert;
    } else {
        nextNode.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if(position === 1) {
        this.setHead(nodeToInsert);
        return;
    }
    let node = this.head;
    let currentPos = 1;
    while(node && currentPos++ !== position) {
        node = node.next;
    }
    if(node !== null) {
        this.insertBefore(node, nodeToInsert);
    } else {
        this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(value) {
    let currentNode = this.head;
    while(currentNode) {
        let nodeToRemove = currentNode;
        currentNode = currentNode.next;
        if(nodeToRemove.value === value) {
            this.remove(nodeToRemove);
        }
    }
  }

  remove(node) {
    if(this.head === node) {
        let newHead = this.head.next;
        this.head = newHead;
        // newHead.prev = null;
        // return;
    }
    if(this.tail === node) {
        let newTail = this.tail.prev;
        this.tail = newTail;
        // newTail.next = null;
        // return;
    }
    // let prevNode = node.prev;
    // let nextNode = node.next;
    if(node.prev) node.prev.next = node.next;
    if(node.next) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }

  containsNodeWithValue(value) {
    let currentNode = this.head;
    while(currentNode) {
        if(currentNode.value === value) return true;
        currentNode = currentNode.next;
    }
    return false;
  }
}