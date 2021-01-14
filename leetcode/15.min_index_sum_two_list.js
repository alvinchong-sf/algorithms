// Minimum Index Sum of Two Lists

// example1
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
// list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".

// example2
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
// list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is 
// "Shogun" with index sum 1 (0+1).

var findRestaurant = function(list1, list2) {
    let hash1 = {};
    let newArr = [];
    
    list1.forEach((restaurant1, i) => {
        if(!hash1[restaurant1]) {
            if(list2.includes(restaurant1)) {
                hash1[restaurant1] = 0   
            } else {
                hash1[restaurant1] = undefined
            }
        }
        hash1[restaurant1] += i
    })
    
    list2.forEach((restaurant2, j) => {
        if(hash1[restaurant2] || hash1[restaurant2] === 0) {
            hash1[restaurant2] += j
        }
    })

    for(const [k, v] of Object.entries(hash1)) {
        if(!v && v !==0) delete hash1[k]
    }
    
    let values = Object.values(hash1);
    let minIdx = Math.min(...values)
    for(const [key, value] of Object.entries(hash1)) {
        if (value === minIdx) {
            newArr.push(key)
        }
    }
    return newArr;
};

// time: o(5n)

// https://leetcode.com/problems/minimum-index-sum-of-two-lists/