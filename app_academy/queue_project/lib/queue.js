// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(ele) {
        const newEle = new Node(ele);
        let oldEle = this.back;
        if(!this.length) {
            this.front = newEle;
            this.back = newEle;
        } else {
            this.back.next = newEle;
            this.back = newEle;
        }
        this.length += 1;
        return this.length;
    }

    dequeue() {
        if(!this.length) return null;
        let out = this.front.value;
        if(this.length === 1) {
            this.front = null
            this.back = null
        } else {
            this.front = this.front.next
        }
        this.length -= 1;
        return out;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Queue = Queue;