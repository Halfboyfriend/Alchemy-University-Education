const TXO = require('./TXO');
const Transaction = require('./Transaction');

const iTXO = new TXO("fromAddress", 5);
const oTXO = new TXO("toAddress", 1);

const tx = new Transaction([iTXO], [oTXO]);

tx.execute();

console.log( tx.fee );
