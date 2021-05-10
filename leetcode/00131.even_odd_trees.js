var isEvenOddTree = function(root) {
    let level = 0;   
    let queue = [root];            
    //                                  
    while(queue.length) {
        let size = queue.length;    
        let prevVal = (level % 2 === 0) ? -Infinity : Infinity 
        for(let i = 0; i < size; i++) { 
            let node = queue.shift();  
            // even level
            if(level % 2 === 0) {       
                // if node is not odd and is not increasing
                if(node.val % 2 === 0) return false;
                if(prevVal >= node.val) return false;
            } // odd level 
            else {
                // if node is not even and is not decreasing
                if(node.val % 2 !== 0) return false;
                if(node.val >= prevVal) return false;
            }
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            prevVal = node.val
        }
        level++;
    }
    return true;
};

// time o(n)
// space o(n)
// https://leetcode.com/problems/even-odd-tree/