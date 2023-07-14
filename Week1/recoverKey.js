const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const hash = await hashMessage(message);
    return secp.recoverPublicKey(hash, signature, recoveryBit);
}
