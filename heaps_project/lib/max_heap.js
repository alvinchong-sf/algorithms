class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        // left child are even
        return idx * 2;
    }

    getRightChild(idx) {
        // right child are odd
        return (idx * 2) + 1;
    }

    siftUp(idx) {
        // if array was originally empty; we can return immediately
        if(idx === 1) return;

        let parentIdx = this.getParent(idx);

        // if child is larger than parent, keep swapping
        if(this.array[parentIdx] < this.array[idx]) {
            [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]]
        }
        // recursively call the parent
        this.siftUp(parentIdx);
    }

    insert(val) {
        // [null, 40, 20, 21, 7]
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftVal = this.array[leftIdx] !== undefined ? this.array[leftIdx] : -Infinity;
        let rightVal = this.array[rightIdx] !== undefined ? this.array[rightIdx] : -Infinity;

        if(this.array[idx] > leftVal && this.array[idx] > rightVal) return;

        let swapIdx;
        if(leftVal >= rightVal) {
            swapIdx = leftIdx;
        } else {
            swapIdx = rightIdx;
        }

        [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];
        this.siftDown(swapIdx);
    }

    deleteMax() {
        // only a single element in the heap array
        if(this.array.length === 2) {
            return this.array.pop();
        }
        // if nothing but the null in the heap array
        if(this.array.length <= 1) {
            return null;
        }
        
        // get reference to the ele we gona delete
        let max = this.array[1];
        // take the last item from the heap and set it as the first ele
        let last = this.array.pop();
        this.array[1] = last;

        this.siftDown(1);
        return max;
    }
}

module.exports = {
    MaxHeap
};