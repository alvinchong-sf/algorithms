// 811. Subdomain Visit Count

// A website domain "discuss.leetcode.com" consists of various subdomains. 
// At the top level, we have "com", at the next level, we have "leetcode.com" 
// and at the lowest level, "discuss.leetcode.com". When we visit a domain like 
// "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" 
// and "com" implicitly.

// A count-paired domain is a domain that has one of the two formats 
// "rep d1.d2.d3" or "rep d1.d2" where rep is the number of visits to the domain 
// and d1.d2.d3 is the domain itself.

// For example, "9001 discuss.leetcode.com" is a count-paired domain that indicates 
// that discuss.leetcode.com was visited 9001 times.
// Given an array of count-paired domains cpdomains, return an array of the 
// count-paired domains of each subdomain in the input. You may return the 
// answer in any order.

 
// Example 1:
// Input: cpdomains = ["9001 discuss.leetcode.com"]
// Output: ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
// Explanation: We only have one website domain: "discuss.leetcode.com".
// As discussed above, the subdomain "leetcode.com" and "com" will also be visited. So they will all be visited 9001 times.

// Example 2:
// Input: cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
// Output: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
// Explanation: We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times.
// For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.



// n = length of cpdomains
// d = length of longest sub domain
// time o(n * d) | space o(n * d)
var subdomainVisits = function(cpdomains) {
    const resultObj = {};
    
    for (const cpdomain of cpdomains) {
        const arr = cpdomain.split(" ");
        const [count, domain] = arr;
        
        if (domain in resultObj) {
            resultObj[domain] += parseInt(count);
        } else {
            resultObj[domain] = parseInt(count);
        }
        
        const splitArr = domain.split(".");
        splitArr.shift();
        const newDomain = splitArr.join(".");
        
        recursiveHelper(count, newDomain, resultObj);
    }
    
    const resultArr = [];
    for (const domain in resultObj) {
        const count = resultObj[domain];
        const newStr = `${count} ${domain}`;
        resultArr.push(newStr);
    }
    
    return resultArr;
};

const recursiveHelper = (count, newDomain, resultObj) => {
    if (!newDomain.length) return;
    
    if (newDomain in resultObj) {
        resultObj[newDomain] += parseInt(count);
    } else {
        resultObj[newDomain] = parseInt(count);
    }
    
    const splitArr = newDomain.split(".");
    splitArr.shift();
    const resultDomain = splitArr.join(".");
    
    recursiveHelper(count, resultDomain, resultObj);
}