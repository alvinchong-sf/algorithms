// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const node = new Node(val);

        if (!this.length) {
            this.head =  node
        }
        this.tail = node;
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {

        if(!this.length) return undefined;

        this.tail.next = null;
        if(this.length === 1) {
            this.tail = null;
            this.head = null;
        }
        this.length -=1;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newHead = new Node(val);
        let currentHead = this.head;
        if(!this.length) {
            this.head = newHead;
            this.tail = newHead;
        }
        newHead.next = currentHead;
        this.head = newHead;
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(!this.length) return undefined;
        let currentHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.head = currentHead.next;
        // this.head.next = currentHead.next.next;
        this.length -= 1;
        return currentHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let node = this.head;
        while(node) {
            if(node.value === target) return true;
            node = node.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if(index < 0 || index > this.length - 1) return null;
        let i = 0
        let currentNode = this.head;
        while( i !== index) {
            i += 1;
            currentNode.next;
        }
        return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if(!this.get(index)) {
            return false;
        } else {
            this.get(index).value = val
            return true;
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if(index < 0 || index > this.length - 1) return false;
        let nextNode = this.get(index);
        let currentNode = this.set(index, val);
        currentNode.next = nextNode;
        this.length += 1;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if(index < 0 || index > this.length - 1) return undefined;
        let toBeRemove = this.get(index);
        this.length -= 1;
        return toBeRemove;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
