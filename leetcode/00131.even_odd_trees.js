var isEvenOddTree = function(root) {
    let queue = [root];
    let idx = 0;
    
    while(queue.length){
        let size = queue.length;
        let prev = 0;
        
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            if(idx % 2 === 0){
                if(node.val % 2 === 0) return false;
                if(prev !== 0 && prev >= node.val) return false;
            }else{
                if(node.val % 2 === 1) return false;
                if(prev !== 0 && prev <= node.val) return false;
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            prev = node.val;
        }
        idx++;
    }
    
    return true;
};

// time o(n)
// space o(n)
// https://leetcode.com/problems/even-odd-tree/