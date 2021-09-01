
// dfs
var canVisitAllRooms = function(rooms) {
    const set = new Set([0]);
    
    const dfs = (idx) => {
        const room = rooms[idx];
        
        for(const key of room) {
            if(set.has(key)) continue;
            set.add(key);
            dfs(key);
        }
    };
    
    dfs(0);
    return set.size === rooms.length ? true : false;
};

// time o(n); where n is the total elements in the 2d array when flatten
// space o(n)
// https://leetcode.com/problems/keys-and-rooms/


// bfs 
var canVisitAllRooms = function(rooms) {
    const keys = new Set([0]);
    const queue = [rooms[0]];
    
    while (queue.length) {
        const room = queue.shift();
        for (let i = 0; i < room.length; i++) {
            const key = room[i];
            if (keys.has(key)) continue;
            keys.add(key);
            queue.push(rooms[key]);
        }
    }
    return keys.size === rooms.length
};