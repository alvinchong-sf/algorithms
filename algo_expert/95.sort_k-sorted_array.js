function sortKSortedArray(array, k) {
	const min = new MinHeap();
	const resultArr = [];
	let i = 0;
																	// k = 5
	while (i < array.length) {			// [5, 4, 3, 2, -100]
																	// minHeap = [-100,2,3,4,5]
		while (min.minHeap.length < k + 1 && i < array.length) {
			min.insert(array[i]);
			i++;
		};
		
		const res = min.remove();
		resultArr.push(res);
		
	}
	
	while (min.minHeap.length > 0) {
		const res = min.remove();
		resultArr.push(res);
	}
	
	return resultArr;
}

class MinHeap {
	constructor() {
		this.minHeap = [];
	};
	
	insert(num) {
		this.minHeap.push(num);
		const lastIdx = this.minHeap.length - 1;
		this.siftUp(lastIdx);
	}
	
	remove() {
		if (this.minHeap.length === 1) {
			return this.minHeap.pop();
		}
		
		this.swap(this.minHeap, 0, this.minHeap.length - 1);
		const removedNum = this.minHeap.pop();
		this.siftDown(0);
		
		return removedNum;
	}
	
	siftUp(idx) {
		if (idx === 0) return;
		
		const parentIdx = Math.floor((idx - 1) / 2),
            parentVal = this.minHeap[parentIdx],
            currVal = this.minHeap[idx];
		
		if (parentVal < currVal) return;
		
		this.swap(this.minHeap, parentIdx, idx);
		this.siftUp(parentIdx);
	}
	
	siftDown(idx) {
		const leftIdx = idx * 2 + 1,
            rightIdx = idx * 2 + 2,
            leftVal = leftIdx >= this.minHeap.length ? Infinity : this.minHeap[leftIdx],
            rightVal = rightIdx >= this.minHeap.length ? Infinity : this.minHeap[rightIdx],
            currVal = this.minHeap[idx];
		
		if (currVal < leftVal && currVal < rightVal) return;
		const swapIdx = leftVal < rightVal ? leftIdx : rightIdx;
		this.swap(this.minHeap, swapIdx, idx);
		this.siftDown(swapIdx);
	}
	
	swap(array, i , j) {
		[ array[i], array[j] ] = [ array[j], array[i] ]
	}
};