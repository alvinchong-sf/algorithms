"""
846. Hand of Straights
Alice has some number of cards and she wants to rearrange the cards into groups so that each 
group is of size groupSize, and consists of groupSize consecutive cards. Given an integer array 
hand where hand[i] is the value written on the ith card and an integer groupSize, return true 
if she can rearrange the cards, or false otherwise.

Example 1:
Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

Example 2:
Input: hand = [1,2,3,4,5], groupSize = 4
Output: false
Explanation: Alice's hand can not be rearranged into groups of 4.

Constraints:
    1 <= hand.length <= 104
    0 <= hand[i] <= 109
    1 <= groupSize <= hand.length

https://leetcode.com/problems/hand-of-straights/description
Time: O(n * K) | Space: O(n + K) where K is the groupSize
"""

from collections import Counter
class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        n = len(hand)
        if n == 1: return True
        if n % groupSize != 0: return False
        num_groups = n // groupSize
        hand.sort()
        hash_map = Counter(hand)
        result = [[] for _ in range(num_groups)]
        for subarr in result:
            for key, val in hash_map.items():
                if val <= 0: continue
                if subarr:
                    last_element = subarr[-1]
                    if key - last_element != 1: return False
                subarr.append(key)
                hash_map[key] -= 1
                if len(subarr) >= groupSize: break
            if len(subarr) < groupSize: return False
        return True