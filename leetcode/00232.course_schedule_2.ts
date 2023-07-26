/**
 * 210. Course Schedule II
 * https://leetcode.com/problems/course-schedule-ii/
 */

interface Courses {
  [key: string]: string[];
}

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const ordering: number[] = [];
  const courses = buildGraph(numCourses, prerequisites);
  const visitedSet = new Set<string>();
  const cycleSet = new Set<string>();

  for (const course in courses) {
    const hasCycle = !dfs(course, courses, visitedSet, cycleSet, ordering);
    if (hasCycle) return [];
  }

  return ordering;
}

function dfs(
  course: string,
  courses: Courses,
  visitedSet: Set<string>,
  cycleSet: Set<string>,
  ordering: number[]
): boolean {
  if (cycleSet.has(course)) return false;
  if (visitedSet.has(course)) return true;

  cycleSet.add(course);
  for (const prereq of courses[course]) {
    const hasCycle = !dfs(prereq, courses, visitedSet, cycleSet, ordering);
    if (hasCycle) return false;
  }

  cycleSet.delete(course);
  visitedSet.add(course);
  ordering.push(+course);

  return true;
}

function buildGraph(numCourses: number, prerequisites: number[][]) {
  const courses: Courses = {};

  for (let i = 0; i < numCourses; i++) {
    courses[i] = [];
  }

  for (const [course, prereq] of prerequisites) {
    const prereqStr = prereq.toString();
    if (course in courses) {
      courses[course].push(prereqStr);
    } else {
      courses[course] = [prereqStr];
    }

    if (!(prereqStr in courses)) {
      courses[prereqStr] = [];
    }
  }

  return courses;
}
