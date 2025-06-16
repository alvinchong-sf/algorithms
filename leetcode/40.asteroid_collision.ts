/*
735. Asteroid Collision
We are given an array asteroids of integers representing asteroids in a row. For each asteroid, 
the absolute value represents its size, and the sign represents its direction (positive meaning 
right, negative meaning left). Each asteroid moves at the same speed. Find out the state of the 
asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are 
the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:
Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 3:
Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

Constraints:
    2 <= asteroids.length <= 104
    -1000 <= asteroids[i] <= 1000
    asteroids[i] != 0

https://leetcode.com/problems/asteroid-collision/description
Time: O(n) | Space: O(n)
*/

function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [];
    for (const rightAst of asteroids) {
        if (!stack.length) {
            stack.push(rightAst);
            continue;
        }

        const leftAst = stack.pop() as number;

        if (hasCollision(leftAst, rightAst)) {
            if (leftAst === Math.abs(rightAst)) {
                continue;
            } else if (leftAst > Math.abs(rightAst)) {
                stack.push(leftAst);
            } else {
                stack.push(leftAst);

                /**
                 * Keep popping left asteroid when there is a collision
                 * and left asteroid < right asteroid
                 */
                while (
                    stack.length && 
                    stack[stack.length - 1] > 0 &&
                    stack[stack.length - 1] < Math.abs(rightAst)
                ) { stack.pop() };

                /**
                 * Push the right asteroid into stack when
                 * - stack is empty
                 * - there is no collision
                 */
                if (!stack.length || !hasCollision(stack[stack.length - 1], rightAst)) {
                    stack.push(rightAst);
                }
                
                /**
                 * when both left and right have a collision
                 * and both have equal size
                 * just remove left because right is not in stack
                 */
                if (stack.length && stack[stack.length- 1] === Math.abs(rightAst)) {
                    stack.pop();
                }
            }
        } else {
            stack.push(leftAst, rightAst)
        }
    }
    return stack;
};

function hasCollision(astLeft: number, astRight: number): boolean {
    if (astLeft > 0 && astRight < 0) return true;
    return false;
}