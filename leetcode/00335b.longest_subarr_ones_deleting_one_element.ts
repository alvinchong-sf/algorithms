/*
1493. Longest Subarray of 1's After Deleting One Element
Given a binary array nums, you should delete one element from it.
Return the size of the longest non-empty subarray containing only 1's in the resulting array. 
Return 0 if there is no such subarray.

Example 1:
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

Example 2:
Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

Example 3:
Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.

Constraints:
    1 <= nums.length <= 105
    nums[i] is either 0 or 1.
*/

interface Result {
    deleted: boolean;
    longest: number;
    current: number;
}

function longestSubarray(nums: number[]): number {
    const result: Result = { deleted: false, longest: 0, current: 0 };
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            result.deleted = true;
            dfs(i + 1, nums, result);
            result.current = 0;
        } else {
            result.current++;
        }
    }
    result.longest = Math.max(result.longest, result.current);
    return result.deleted ? result.longest : result.longest - 1;
};

function dfs(idx, nums, result): void {
    for (let i = idx; i < nums.length; i++) {
        if (nums[i] === 0) {
            result.longest = Math.max(result.longest, result.current);
            return
        } else {
            result.current++;
        }
    }
    result.longest = Math.max(result.longest, result.current);
}