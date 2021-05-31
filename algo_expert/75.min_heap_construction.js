class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {
        for(let i = array.length - 1; i >= 0; i--) {
            this.siftDown(array, array.length, i);
        }
        return array;
    }

    siftDown(array, n, idx) {
        let leftIdx = idx * 2 + 1;
        let rightIdx = idx * 2 + 2;
        
        let leftVal = leftIdx >= n ? Infinity : array[leftIdx];
        let rightVal = rightIdx >= n ? Infinity : array[rightIdx];
        
        if(array[idx] < leftVal && array[idx] < rightVal) return;
        
        let swapIdx;
        if(leftVal < rightVal) {
            swapIdx = leftIdx;
        } else {
            swapIdx = rightIdx;
        }
        this.swap(array, idx, swapIdx);
        this.siftDown(array, n, swapIdx);
    }

    siftUp(idx) {
        if(idx === 0) return;
        let parentIdx = Math.floor((idx - 1) / 2);
        if(this.heap[parentIdx] < this.heap[idx]) return;

        this.swap(this.heap, idx, parentIdx);
        this.siftUp(parentIdx);
    }       

    peek() {
        return this.heap[0];
    }

    remove() {
        let removedEle = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(this.heap, this.heap.length, 0);
        return removedEle;
    }

    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
    }
	
    swap(array, i, j) {
        [ array[i], array[j] ] = [ array[j], array[i] ];
    }
}