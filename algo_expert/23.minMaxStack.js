class MinMaxStack {
	
	constructor() {
		this.stack = [];
		this.minMaxStack = [];
	}
	
    peek() {
        return this.stack[this.stack.length - 1];
    }
    // time o(1)
    // space o(1)

    pop() {
        this.minMaxStack.pop();
        return this.stack.pop();
    }
    // time o(1)
    // space o(1)

    push(number) {
        this.stack.push(number);
        if(!this.minMaxStack.length) {
            this.minMaxStack.push([number, number])
        } else {
            let lastArr = this.minMaxStack[this.minMaxStack.length - 1];
            let min = Math.min(lastArr[0], number);
            let max = Math.max(lastArr[1], number);
            this.minMaxStack.push([min, max]);
        }
    }
    // time o(1)
    // space o(1)

    getMin() {
        let lastArr = this.minMaxStack[this.minMaxStack.length - 1];
        return lastArr[0];
    }
    // time o(1)
    // space o(1)

    getMax() {
        let lastArr = this.minMaxStack[this.minMaxStack.length - 1];
        return lastArr[1];
    }
    // time o(1)
    // space o(1)
}