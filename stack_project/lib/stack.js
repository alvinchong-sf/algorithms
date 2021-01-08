// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(ele) {
        const newEle = new Node(ele);
        let temp = this.top;
        if(!this.length) {
            this.top = newEle;
            this.bottom = newEle;
        } else {
            this.top = newEle;
            this.top.next = temp;
        }
        this.length += 1;
        return this.length;
    }

    pop() {
        if(!this.length) return null;
        let toBePop = this.top.value;
        if(this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }
        this.length -= 1;
        return toBePop;
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
