// 860. Lemonade Change
// At a lemonade stand, each lemonade costs $5. 

// Customers are standing in a queue to buy from you, and order one at a 
// time (in the order specified by bills).

// Each customer will only buy one lemonade and pay with either a $5, $10, or 
// $20 bill.  You must provide the correct change to each customer, so 
// that the net transaction is that the customer pays $5.

// Note that you don't have any change in hand at first.

// Return true if and only if you can provide every customer with correct change.

// eg1
// Input: [5,5,5,10,20]
// Output: true

var lemonadeChange = function(bills) {
    let hash = {};
    
    for(const bill of bills) {
        let change = bill - 5;
        if(change === 5) {
            if(hash[change] > 0) {
                hash[change]--;
                if(hash["10"] === undefined) hash["10"] = 0;
                hash["10"]++;
            } else {
                return false;
            }
        } else if (change === 15) {
            if(hash["10"] > 0 && hash["5"] > 0) {
                hash["10"]--; hash["5"]--;
                if(hash["20"] === undefined) hash["20"] = 0;
                hash["20"]++;
            } else if (hash["5"] >= 3) {
                hash["5"] -= 3;
                if(hash["20"] === undefined) hash["20"] = 0;
                hash["20"]++;
            } else {
                return false;
            }
        } else {
            if(hash[bill] === undefined) hash[bill] = 0;
            hash[bill]++;
        }
    }
    return true;
};

// time o(n) 
// space o(n)
// https://leetcode.com/problems/lemonade-change/

