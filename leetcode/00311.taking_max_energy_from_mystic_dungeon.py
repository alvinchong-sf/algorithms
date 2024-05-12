"""
3147. Taking Maximum Energy From the Mystic Dungeon
In a mystic dungeon, n magicians are standing in a line. Each magician has an attribute that gives you energy. 
Some magicians can give you negative energy, which means taking energy from you. You have been cursed in such a 
way that after absorbing energy from magician i, you will be instantly transported to magician (i + k). This process 
will be repeated until you reach the magician where (i + k) does not exist.

In other words, you will choose a starting point and then teleport with k jumps until you reach the end of the magicians' 
sequence, absorbing all the energy during the journey. You are given an array energy and an integer k. Return the 
maximum possible energy you can gain.

Example 1:
Input: energy = [5,2,-10,-5,1], k = 3
Output: 3
Explanation: We can gain a total energy of 3 by starting from magician 1 absorbing 2 + 1 = 3.

Example 2:
Input: energy = [-2,-3,-1], k = 2
Output: -1
Explanation: We can gain a total energy of -1 by starting from magician 2.

Constraints:
    1 <= energy.length <= 105
    -1000 <= energy[i] <= 1000
    1 <= k <= energy.length - 1
"""

# https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/description/

class Solution:
    def maximumEnergy(self, energy: List[int], k: int) -> int:
        n = len(energy)
        if n == 1: return energy[0]
        max_energy = float("-inf")
        memo = {}

        for i in range(n - 1, -1, -1):
            gain_energy = self.dfs(energy, n, i, k, memo)
            memo[i] = gain_energy
            max_energy = max(max_energy, gain_energy)

        return max_energy

    def dfs(self, energy, n, i, k, memo):
        if i >= n or i < 0: return 0
        if i in memo: return memo[i]
        curr_energy = self.dfs(energy, n, i + k, k, memo)
        return energy[i] + curr_energy
