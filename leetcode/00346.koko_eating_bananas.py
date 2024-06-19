"""
875. Koko Eating Bananas
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
The guards have gone and will come back in h hours. Koko can decide her bananas-per-hour eating 
speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If 
the pile has less than k bananas, she eats all of them instead and will not eat any more bananas 
during this hour. Koko likes to eat slowly but still wants to finish eating all the bananas before 
the guards return. Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:
Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23

Constraints:
    1 <= piles.length <= 104
    piles.length <= h <= 109
    1 <= piles[i] <= 109


https://leetcode.com/problems/koko-eating-bananas/description
Time: O(log(K) + n) where K is the rate and n is the banana piles
Space: O(1)
"""

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        n = len(piles)
        left, right = 1, max(piles)
        if n == h: return right
        min_rate = right
        while left <= right:
            mid = ((right - left) // 2) + left
            total_hours = 0
            for bananas in piles:
                curr_hours = (bananas // mid) + (0 if bananas % mid == 0 else 1)
                total_hours += curr_hours
            extra_hours = h - total_hours
            if extra_hours < 0:
                left = mid + 1
            else:
                min_rate = min(min_rate, mid)
                right = mid - 1
        return min_rate