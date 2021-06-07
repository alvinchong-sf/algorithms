var permute = function(nums) {
    let permutation = [];
    
    const permHelper = (i) => {
    
        if(i === nums.length - 1) {
            permutation.push(nums.slice());
            return;
        }

        for(let j = i; j < nums.length; j++) {
            swap(nums, i, j);
            permHelper(i + 1);
            swap(nums, i , j);
        }
    }
    
    permHelper(0);
    return permutation;
};

const swap = (arr, i , j) => {
    [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
}

// time o(n * n!) | space o(n * n!)
// https://leetcode.com/problems/permutations/