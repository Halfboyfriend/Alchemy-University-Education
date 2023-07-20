### UTXO MODEL
### BINARY TREE
### MERKEL TREE

## MERKEL TREE (BITCOIN)
Merkle Trees In Bitcoin
The design of merkle trees makes them extremely efficient for data verification. In Bitcoin, Merkle trees are used to store every transaction mined on the Bitcoin network in an efficient way:

btc-block-arch

The diagram above shows the architecture of a bitcoin block. Did you think a bitcoin block contains all of the transactions per block? In a way it does... but via merkle trees!

What happens is, all of the transactions per block are arranged into a big Merkle tree. What actually ends up getting committed into the block and immutable blockchain is that Merkle tree's root hash.

By committing the root hash of the tree, the transaction data can be stored off-chain (full nodes, for example, store these transaction records on a LevelDB integrated into all full nodes).

Thanks to Merkle trees, storage on the blockchain is efficient - you must only commit one piece of data instead of thousands of transactions per block, which would really bloat the system!

A main design purpose behind using Merkle trees to commit a lot of data elements (typically transactions) per block is to keep the size of the blockchain as small as possible. Given the nature of their usage, blockchains grow perpetually, so you must account for efficient data storage. Keeping the blockchain size from becoming bloated means more people can support running full nodes which helps network decentralization.

Thanks to Merkle trees, there is an efficient way to verify that some data exists in a root hash. Take the image below... can you imagine how bloated each block would be if every single tx needed to be stored? Much better to store just ONE root hash representing all the transactions per block!

my-image

Merkle Proofs
The benefit of the Merkle tree design -- a recursive hashing-based algorithm -- is that it allows for efficient proof that some data exists within the root hash construction (actually contained in the block!); in other words, it allows for Merkle proofs. A Merkle proof confirms specific transactions represented by a leaf or branch hash within a Merkle hash root.

So if anyone ever needs to prove that a transaction existed at one point in time in the blockchain, they just need to provide a Merkle proof.

tree4

In the diagram above, say you want to prove that C (some random tx) exists in this block. Thanks to Merkle proofs, you only need 3 total pieces of data: D, H(A-B), H(E-H) to construct the tree root hash: H(A-H). That might not seem like much with such a small tree, but what about a tree containing over 10,000 transactions? If one is able to successfully construct the root hash, then that is proof enough that their transaction was indeed part of that Merkle tree at that time. Data verification FTW!

Merkle Trees Use Cases
Merkle trees are:

space and computationally efficient
good for scalability and decentralization
no need to pack a block full of transactions… just commit a Merkle root hash to it and keep transactions in other places that can handle them
In deeper terms, they:

They significantly reduce the memory needed to verify that data has maintained its integrity and hasn’t been altered.
They require less data to be broadcast across the blockchain network to verify data and transactions. This improves the efficiency of a blockchain.
They allow for Simple Payment Verification (SPV), which helps you to verify a transaction without downloading an entire block or blockchain. This allows you to send and receive transactions using a light-client node — more commonly known as a crypto wallet.
When verifying data using a Merkle tree, there is a Prover and a Verifier:

A Prover: Does all the calculation to create the merkle root (just a hash!)
A Verifier: Does not need to know all the values to know for certain one value is in the tree
Merkle trees are a huge benefit to the Verifier. You either produce a proof successfully, meaning data verification passes, or you don't, meaning your piece of data was not present when the Merkle root hash was calculated (or you performed the calculation wrong!).

Logarithmic Scaling
log

The amount of proof pieces that you need scales logarithmically to the size of the array of data you need to feed into the Merkle tree hash algorithm.

Merkle Tree Vocabulary Summary
Final terminology for Merkle trees:

Merkle tree: a structure used in computer science to validate data
Merkle root: the hash contained in the block header, which is derived from the hashes of all other transactions in the block
Merkle path: represents the information which the user needs to calculate the expected value for the Merkle root for a block, from their own transaction hash contained in that block. The Merkle path is used as part of of the Merkle proof
Merkle proof: proves the existence of a specific transaction in a specific block (without the user needing to examine all the transactions in the block). It includes the Merkle root and the Merkle path
Conclusion
Merkle trees are a very popular data structure in blockchains. It's important to understand the low-level of blockchain storage and the implications of such decisions. Keeping data storage lean and efficient is the reason behind using structures like Merkle trees - this understanding is essential as you start building out dApps, you always want to be lean and efficient with your data storage. Why? Because on Ethereum, the less efficient your use of data storage, the more expensive your program will be for you and your users.

In the next section, we will look at Patricia Merkle Tries, a data structure widely used in Ethereum.


## PATRICIA MERKEL TREE (ETHEREUM)
First Look: Ethereum Block Architecture
Bitcoin's architecture is simple: it's a ledger that keeps track of transactions using a UTXO model. Since Ethereum keeps track of a larger amount of state data, the block architecture is completely different:

eth-block

Why are you showing me block architectures, aren't we covering trees?
Well, because these blocks contain references to the tree data structures we are focusing on. The main goal here of showing the block architecture first is: by the end of this lesson, you should be familiar with three of the staple Ethereum block properties included in the diagram above: State Root, Transaction Root, Receipt Root - just like in the last section we covered what the merkleRootHash was in the context of a Bitcoin block, we will now look at three new similar tree uses in Ethereum.

Woah, that's a lot of properties in an Ethereum block! Don't worry, we will cover these further in the bootcamp. We have to tackle the low-level ones first. ;)

REVIEW: Merkle Trees in Bitcoin
Merkle trees are fantastic for transactions. They are the perfect data structure. Transactions are static and should never change after being committed. They are "set in stone" via the Merkle hash root construction. Merkle trees are not a data structure fit for editing, so edit time -- how efficient it is to change a record -- does not matter here.

The main goal behind their usage is to prove the consistency of data as the blockchain grows. Thanks to Merkle trees, we can rest assured that a transaction existed at one point in time in a block. How? Just by constructing the Merkle proof! Not only this, Merkle proof construction is extremely efficient at scale since they are computationally fast to compute and require only small chunks of data to be communicated over the network.

Trees in Ethereum
Ethereum makes use a data structure called a radix trie, also referred to as a Patricia trie or a radix tree and combines this data structure with a Merkle tree to create a Patricia Merkle Trie.

Patricia Trie + Merkle Tree = Patricia Merkle Trie (pronounced either "tree" or "try")

Radix Trie
"Trie" comes from the word "retrieval", to give you a hint as to what Patricia Merkle Tries (also referred to as Patricia Merkle Trees 🎄) optimize for.

A radix trie is a tree-like data structure that is used to retrieve a string value by traversing down a branch of nodes that store associated references (keys) that together lead to the end value that can be returned:

pmt

In grouping associated keys together, our search for the end value is optimized and more efficient

Patricia Merkle Trees
A Merkle Patricia trie is a data structure that stores key-value pairs, just like a hash table. In addition to that, it also allows us to verify data integrity and the inclusion of a key-value pair.

PMTs groups similar-value nodes together in the tree. That way, searching for "HELP" leads you along the same path as searching for "HELLO" - the first three letters are shared entries of different words. Good for space efficiency and read/write efficiency.

Patricia Merkle Trees are basically Merkle trees on steroids! Efficient for data verification needs, but also efficient for editing that data.

Patricia??
P = Practical
A = Algorithm
T = To
R = Retrieve
I = Information
C = Coded
I = In
A = Alphanumeric
pmt2

The root node of this PMT is empty so we can store other words not starting with ‘n’, like "apple" or "hello".

Why Does Ethereum Use a Merkle Patricia Trie?
There are typically two different types of data:

Permanent

Once a transaction occurs, that record is sealed forever
This means that once you locate a transaction in a block’s transaction trie, you can return to the same path over and over to retrieve the same result
Ephemeral

In the case of Ethereum, account states change all the time! (ie. A user receives some ether, interacts with a contract, etc)
nonce, balance, storageRoot, codeHash
It makes sense that permanent data, like mined transactions, and ephemeral data, like Ethereum accounts (balance, nonce, etc), should be stored separately. Merkle trees, again, are perfect for permanent data. PMTs are perfect for ephemeral data, which Ethereum is in plenty supply of.

Unlike transaction history, Ethereum account state needs to be frequently updated. The balance and nonce of accounts is often changed, and what’s more, new accounts are frequently inserted, and keys in storage are frequently inserted and deleted.

Ethereum Block Header
The block header contains many pieces of data. Remember back to Week 1 PoW Mining? The block header is the hash result of all of the data elements contained in a block. It's kind of like the gift-wrap of all the block data.

If you look at the Ethereum architecture diagram at the beginning of this lesson, the block header ends up hashing all of the data properties of the block. It also includes:

State Root: the root hash of the state trie
Transactions Root: the root hash of the block's transactions
Receipts Root: the root hash of the receipts trie
Ethereum: State Trie
state-trie

As shown in the above diagram, the state trie acts as a mapping between addresses and account states.

It can be seen as a global state that is constantly updated by transaction executions. All the information about accounts are stored in the world state trie and you can retrieve information by querying it.

Account Example
As mentioned above, the state trie is just a mapping that uses an address as the key and the account state (nonce, balance, etc) as the value returned.

state-example

This is what you would get back from a JavaScript request to the Ethereum world state. Just an object containing some data! That is all the account state is... but this is too much data to store in each block, so a root hash of it commits the data per block.

Ethereum: Transaction Trie
The transaction trie records transactions in Ethereum. Once the block is mined, the transaction trie is never updated.

transaction-trie

Each transaction in Ethereum records multiple pieces specific to each transaction such as gasPrice and value.

Transaction Example
You've probably seen this via services like Etherscan! All these services do is query the Ethereum blockchain for transaction data and then index it into an organized transaction viewer.

tx

You can even try querying the transactions trie directly using Alchemy Composer. Just take a random tx hash and use the eth_getTransactionByHash method - you'll get a response looking much like the object in the picture above.

Ethereum: Transaction Receipt Trie
The transaction receipt trie records receipts (outcomes) of transactions. Data including gasUsed and logs (events emitted are contained here!).

Once the block is mined, the transaction receipt trie is never updated.

Transaction Receipt Example
tx-receipt-ex

Try it out on the Alchemy Composer - just make sure to change the method to eth_getTransactionReceipt.

Conclusion
eth

The above diagram is an excellent visualization into how the tries all end up being committed in every block via their root hash. The raw data is stored elsewhere in Ethereum, particularly archive nodes.

Take a look back over the various architectures included in this lesson! Does the Ethereum block architecture diagram look less threatening? If so, good! We are learning as we go and we've just covered some of the lowest-level aspects of Ethereum data storage. Very few people learn these fundamentals. These are super important! Not only does learning them give you a more holistic understanding of Ethereum, this is knowledge applicable in all of computer science and even physics 🤯.

The important takeaway of this lesson is to understand why the low-level data structures used by Ethereum are used: to optimize data space and read/write efficiency.