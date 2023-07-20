function verifyProof(proof, node, root, concat) {
    let log = node;
    for (let i = 0; i < proof.length; i++) {
        if (proof[i].left) {
            log = concat(proof[i].data, log);
        }
        else {
            log = concat(log, proof[i].data);
        }
    }
    return log === root;
}

module.exports = verifyProof;
