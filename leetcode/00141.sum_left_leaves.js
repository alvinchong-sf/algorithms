var sumOfLeftLeaves = function(root) {
    let sum = 0;
    
    const dfs = (root) => {
        if(!root) return 0;
        if(root.left) {
            if(!root.left.left && !root.left.right) {
                sum += root.left.val;   
            }
        }
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return sum;
};

// time o(n)
// space o(h)
// https://leetcode.com/problems/sum-of-left-leaves/