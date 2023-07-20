const TXO = require('./TXO');
const Transaction = require('./Transaction');
const Tree = require('./Tree')
const Node = require('./Node');

const iTXO = new TXO("fromAddress", 5);
const oTXO = new TXO("toAddress", 1);

const tx = new Transaction([iTXO], [oTXO]);

tx.execute();

console.log( tx.fee );


const tree = new Tree();
const node1 = new Node(4);

tree.addNode(node1);

console.log(tree.hasNode(4)); // true
console.log(tree.hasNode(7)); // false