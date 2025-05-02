/* 
567. Permutation in String
Given two strings s1 and s2, return true if s2 contains a of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Constraints:
    1 <= s1.length, s2.length <= 104
    s1 and s2 consist of lowercase English letters.

https://leetcode.com/problems/permutation-in-string/description/
Time: O(m + (m * n))
Space: O(1) because at most each Hashmap will store a total of 26 different keys
*/

function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;
    if (s1.length === 1) {
        for (const c of s2) {
            if (c === s1) return true;
        }
        return false;
    }
    const map1 = getMapCount(s1);
    const map2 = new Map<string, number>();
    let left = 0;
    for (let right = 0; right < s2.length; right++) {
        const char = s2[right];
        if (map2.has(char)) {
            map2.set(char, map2.get(char) as number + 1);
        } else {
            map2.set(char, 1)
        }

        if (isSameTotal(map1, map2)) {
            if (isSameMap(map1, map2)) {
                return true;
            } else {
                const oldVal = map2.get(s2[left]);
                const newVal = oldVal as number - 1;
                if (newVal <= 0) {
                    map2.delete(s2[left]);
                } else {
                    map2.set(s2[left], newVal);
                }
                left++;
            }
        }
    }

    return false;
};

function isSameMap(map1: Map<string, number>, map2: Map<string, number>): boolean {
    const copyMap2 = new Map(map2);
    map1.forEach((val1, key1) => {
        const val2 = copyMap2.get(key1);
        if (val1 !== val2) return false;
        copyMap2.delete(key1);
    })
    return copyMap2.size === 0;
}

function isSameTotal(map1: Map<string, number>, map2: Map<string, number>): boolean {
    let count1 = 0, count2 = 0;
    map1.forEach((val1) => count1+= val1);
    map2.forEach((val2) => count2+= val2);
    return count1 === count2;
}

function getMapCount(s: string): Map<string, number> {
    const map = new Map<string, number>();
    for (const c of s) {
        if (map.has(c)) {
            const oldVal = map.get(c);
            const newVal = oldVal as number + 1;
            map.set(c, newVal);
        } else {
            map.set(c, 1);
        }
    }
    return map;
}