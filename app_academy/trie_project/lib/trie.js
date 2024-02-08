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

    insertRecur(word, idx = 0, root = this.root) {
        if (idx === word.length) {
            root.isTerminal = true;
            return;
        }
        const char = word[idx];
        if (root.children[char] === undefined) {
            root.children[char] = new Node();
        }
        this.insertRecur(word, idx + 1, root.children[char]);
    };
    // word = "Hello"
    //             i
    //   { H: {children: {e: {children: {o: {children:{}, isTerminal=true}}, isTerminal=false}}, isTerminal=false} }
    searchRecur(word, idx = 0, root = this.root) {
        const char = word[idx];
        if (idx === word.length && root.isTerminal === true) return true;
        if (root.children[char] === undefined) return false;
        return this.searchRecur(word, idx + 1, root.children[char])
    }
    
    insertIter(word) {
        let root = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (root.children[char] === undefined) {
                root.children[char] = new Node();
            } 
            root = root.children[char];
        }
        root.isTerminal = true;
    }
    // word = "hello"
    ///            i
    // {children: {h: {children: {o: {children: {}, isterminal= false}}, terminal=false}}, terminal=false}

    searchIter(word) {
        let root = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (root.children[char] === undefined) return false;
            root = root.children[char];
        };
        return root.isTerminal === true ? true : false;
    }

    wordsWithPrefix(prefix, root=this.root) {
        if(prefix.length === 0)  {
            let allWords = [];
            if(root.isTerminal) allWords.push("");
    
            for(let letter in root.children) {
                let child = root.children[letter];
                let suffixes = this.wordsWithPrefix(prefix, child);
                let words = suffixes.map(suffix => letter + suffix);
                allWords.push(...words);
            }
            return allWords;
        } else {
            let firstLetter = prefix[0];
            let child = root.children[firstLetter];
            if(child === undefined) {
                return []
            } else {
                let suffixes = this.wordsWithPrefix(prefix.slice(1), root.children[firstLetter]);
                let words = suffixes.map((suffix) => firstLetter + suffix);
                return words;
            }
        }
    }
}

module.exports = {
    Node,
    Trie
};