// SOLIDITY MINING AND PROOF OF WORK
const SHA256 = require('crypto-js/sha256');
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes , toHex} = require("ethereum-cryptography/utils");
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // TODO: add transaction to mempool
    mempool.push(transaction)
}

function mine() {
    // TODO: mine a block
    let transactions = [];
    while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0){
        transactions.push(mempool.pop());
    }
    const block = {id: blocks.length, transactions};
    block.nonce = 0;
    let hash;
    while (true) {
        hash = SHA256(JSON.stringify(block)).toString();
        if (BigInt(`0x${hash}`) < TARGET_DIFFICULTY){
            break;
        }
        block.nonce++;
    }
   
    blocks.push({...block, hash})
}

console.log("Searching For 555");
function hashMessage(message) {
    while (true){
        const firstFive = SHA256(message).toString()
        if (firstFive.slice(0, 3) === 'd47'){
            console.log(firstFive);
            break;
           
        }
        message++;
    }
   return `Found and message is ${message}`;
}
console.log(hashMessage('2'))