const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(string) {
        let root = this.root;

        for (let i = 0; i < string.length; i++) {
            if (!root.children[string[i]]) {
                root.children[string[i]] = new TrieNode(string[i]);
            }

            root = root.children[string[i]];
            if (i == string.length - 1) {
                root.isWord = true;
            }
        }
    }
    contains (word) {
        let root = this.root
        for (let i = 0; i < word.length; i++){
            if (root.children[word[i]] ){
                root = root.children[word[i]]
           
        }else{
            return false;
        }
        
        }

        return root.isWord;
    }

}

// module.exports = Trie;
const trie = new Trie();
trie.insert('happy');
trie.insert('healthy');

console.log( trie.contains('happy') ); // true
console.log( trie.contains('healthy') ); // true

console.log( trie.contains('whimsical') ); // false
console.log( trie.contains('health') ); // false