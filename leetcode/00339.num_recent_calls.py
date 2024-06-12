"""
933. Number of Recent Calls
You have a RecentCounter class which counts the number of recent requests within a certain time frame.
Implement the RecentCounter class:
    RecentCounter() Initializes the counter with zero recent requests.
    int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, 
    and returns the number of requests that has happened in the past 3000 milliseconds 
    (including the new request). Specifically, return the number of requests that have happened 
    in the inclusive range [t - 3000, t].

It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

Example 1:
Input
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
Output
[null, 1, 2, 3, 3]

Explanation
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3

https://leetcode.com/problems/number-of-recent-calls/description

Time: O(log(n)) | Space: O(1)
the number of pings stored in array does not grow as t grows, therefore constant space
"""

class RecentCounter:
    def __init__(self):
        self.pings = []

    def ping(self, t: int) -> int:
        if not self.pings:
            self.pings.append(t)
            return 1
        left_idx, right_idx = self.binary_search(self.pings, t)
        self.pings.append(t)
        return 1 if left_idx == -1 or right_idx == -1 else right_idx - left_idx + 2
    
    def binary_search(self, pings, t):
        start_range, end_range = t - 3000, t
        left_idx = right_idx = -1
        left1 = left2 = 0
        right1 = right2 = len(pings) - 1
        while left1 <= right1:
            mid1 = ((right1 - left1) // 2) + left1
            if pings[mid1] >= start_range:
                left_idx = mid1
                right1 = mid1 - 1
            else:
                left1 = mid1 + 1

        while left2 <= right2:
            mid2 = ((right2 - left2) // 2) + left2
            if pings[mid2] <= end_range:
                right_idx = mid2
                left2 = mid2 + 1
            else:
                right2 = mid2 - 1

        return (left_idx, right_idx)