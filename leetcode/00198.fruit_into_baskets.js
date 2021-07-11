// 904. Fruit Into Baskets

// You are visiting a farm that has a single row of fruit trees arranged from left 
// to right. The trees are represented by an integer array fruits where fruits[i] 
// is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some 
// strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. 
// There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from 
// every tree (including the start tree) while moving to the right. The picked 
// fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:
// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.

// Example 4:
// Input: fruits = [3,3,3,1,2,1,1,2,3,3,4]
// Output: 5
// Explanation: We can pick from trees [1,2,1,1,2].

var totalFruit = function(fruits) {
    let i = 0, j = 0, max = 0;
    const map = new Map();
    
    while(i < fruits.length) {
        const fruit1 = fruits[i];
        
        if(!map.has(fruit1)) {
            map.set(fruit1, 1)
        } else {
            map.set(fruit1, map.get(fruit1) + 1)
        }
        
        while(map.size > 2) {
            const fruit2 = fruits[j];
            map.set(fruit2, map.get(fruit2) - 1);
            j++;
            if (map.get(fruit2) === 0) map.delete(fruit2)
        }
        
        max = Math.max(max, i - j + 1);
        i++;
    }
    return max;
};

// time o(n) | space o(1)
// https://leetcode.com/problems/fruit-into-baskets/