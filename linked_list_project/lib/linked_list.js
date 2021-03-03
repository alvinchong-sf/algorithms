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
        // A- > B -> C
        const newNode = new Node(val);
        if(!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let oldTail = this.tail;
            this.tail = newNode;
            oldTail.next = this.tail;
        }

        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        let oldTail = this.tail;
        if(!this.length) return undefined;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        let currentNode = this.head;
        if(this.length > 1) {
            for(let i = 1; i < this.length - 1; i++) {
                currentNode = currentNode.next;
            }
            this.tail = currentNode;
            currentNode.next = null;
        }
        this.length--;
        return oldTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        // N -> A -> B -> C
        const newNode = new Node(val);
        if(!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let oldHead = this.head;
            this.head = newNode;
            newNode.next = oldHead;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        // A -> B -> C -> D
        // A
        if(!this.length) return undefined;
        const oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newHead = this.head.next;
            this.head = newHead;
        }
        this.length--;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        if(!this.length) return false;
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === target) return true;
            currentNode = currentNode.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        // A -> B -> C -> D
        if(index >= this.length) return null;
        let counter = 0;
        let currentNode = this.head;
        while(currentNode) {                  
            if(counter === index) return currentNode;
            currentNode = currentNode.next;
            counter++;  
        }
    }

    // TODO: Implement the set method here
    set(index, val) {
        // A -> B -> D ->
        if(!this.length) return false;
        let currentNode = this.head;
        for(let i = 0; i < this.length; i++) {
            if(i === index) {
                currentNode.value = val;
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        // A -> B -> D -> E     ~~ we want to insert (2, C)
        // A -> B -> C -> D -> E
        // set index of i - 1 to point to new val
        // set new val.next to point to i + 1
        if(index >= this.length) return false;
        // if (index === this.length) return this.addToTail(val);
        if (index === 0) return this.addToHead(val);
        // if (index === this.length - 1) this.addToTail(val);

        const newNode = new Node(val);
        let currentNode = this.head;
        for(let i = 0; i < this.length; i++) {
            let prevNode = null;
            if(i === index - 1) {
                prevNode = currentNode;
                let nextNode = prevNode.next;
                prevNode.next = newNode
                newNode.next = nextNode;
                this.length++;
                return true;
            }
            currentNode = currentNode.next;
        }
    }

    // TODO: Implement the remove method here
    remove(index) {
        // A -> B -> C -> D -> E
        // A -> B -> D -> E
        if(index >= this.length) return undefined;
        if(index === 0) return this.removeHead();
        if(index === this.length - 1) return this.removeTail();

        let i = 0;
        let currentNode = this.head;
        let removed = null;
        while( i <= index - 1) {
            if(i === index - 1) {
                removed = currentNode.next;
                currentNode.next = currentNode.next.next;
            }
            currentNode = currentNode.next;
            i += 1;
        }
        this.length--;
        return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
