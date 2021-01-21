const { Trie } = require("../trie_project/lib/trie")

// Implement Trie(Prefix Tree)

// Implement a trie with insert, search, and startsWith methods.

class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word, root=this.root) {
        let letter = word[0];
        if(!(letter in root.children)) {
            root.children[letter] = new Node();
        }

        if(word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insert(word.slice(1), root.children[letter]);
        }
    }

    search(word, root=this.root) {
        if(word.length === 0) {
            if(root.isTerminal) {
                return true;
            } else {
                return false;
            }
        }

        let letter = word[0];
        if(letter in root.children) {
            return this.search(word.slice(1), root.children[letter]);
        } else {
            return false;
        }
    }
    
    startsWith(word, root=this.root) {
         if(word.length === 0) {
             return true;
        }

        let letter = word[0];
        if(letter in root.children) {
            return this.startsWith(word.slice(1), root.children[letter]);
        } else {
            return false;
        }
    }
}

// https://leetcode.com/problems/implement-trie-prefix-tree/