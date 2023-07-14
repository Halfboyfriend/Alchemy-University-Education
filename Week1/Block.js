const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data) {
        this.data = data
    
    }
    toHash() {
        return SHA256(this.data + this.previousHash) // a hash!
    }
}

const block = new Block('Alice sent BTC');
console.log(block.toHash());