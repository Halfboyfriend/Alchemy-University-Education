const Block = require('./Block');

class Blockchain {
    constructor() {
        this.block = new Block()
        
        this.chain = [this.block];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length -1].toHash();
        this.chain.push(block)
    }
    isValid (){
        for (let i = this.chain.length -1; i > 0; i--){
            const block = this.chain[i];
            const previousBlock = this.chain[i - 1];
            if (block.previousHash.toString() !== previousBlock.toHash().toString()){
                return false;
            }
        }
        return true;
    }
}
const blockchain = new Blockchain();
const block = new Block("Charlie sent Dave 2 BTC");

blockchain.addBlock(block);

console.log(blockchain.chain.length);