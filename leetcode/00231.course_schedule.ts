/*
207. Course Schedule
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must 
take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

Constraints:
    1 <= numCourses <= 2000
    0 <= prerequisites.length <= 5000
    prerequisites[i].length == 2
    0 <= ai, bi < numCourses
    All the pairs prerequisites[i] are unique.

https://leetcode.com/problems/course-schedule/

Time: O(V + E) | Space: O(V + E)
*/

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const map = buildMap(numCourses, prerequisites);
    const cycle = new Set<number>(), courseTaken = new Set<number>();
    for (const [course] of map) {
        const hasCycle = !dfs(course, map, cycle, courseTaken);
        if (hasCycle) return false;
    }
    return true;
};

function dfs(course: number, map: Map<number, number[]>, cycle: Set<number>, courseTaken: Set<number>): boolean {
    if (courseTaken.has(course)) return true;
    if (cycle.has(course)) return false;

    cycle.add(course);

    for (const prereq of map.get(course) as number[]) {
        const hasCycle = !dfs(prereq, map, cycle, courseTaken);
        if (hasCycle) return false;
    }

    cycle.delete(course);
    courseTaken.add(course);
    return true;
}

function buildMap(numCourses: number, prerequisites: number[][]): Map<number, number[]> {
    const map = new Map<number, number[]>();
    for (let i = 0; i < numCourses; i++) {
        map.set(i, []);
    }

    for (const [course, prereq] of prerequisites) {
       const prereqs = map.get(course) as number[];
       prereqs.push(prereq);
    }

    return map;
}