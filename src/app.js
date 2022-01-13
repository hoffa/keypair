import * as ed25519 from "@noble/ed25519";
import * as secp256k1 from "@noble/secp256k1";

async function generateEd25519KeyPair() {
  const privateKey = ed25519.utils.randomPrivateKey();
  const publicKey = await ed25519.getPublicKey(privateKey);
  return { privateKey, publicKey };
}

function generateSecp256k1KeyPair() {
  const privateKey = secp256k1.utils.randomPrivateKey();
  const publicKey = secp256k1.getPublicKey(privateKey);
  return { privateKey, publicKey };
}

function hex(array) {
  return Buffer.from(array).toString("hex");
}

(async function () {
  const { privateKey, publicKey } = await generateEd25519KeyPair();
  document.getElementById("ed25519-public-key").innerText = hex(publicKey);
  document.getElementById("ed25519-private-key").innerText = hex(privateKey);
  const { privateKey: a, publicKey: b } = generateSecp256k1KeyPair();
  document.getElementById("secp256k1-public-key").innerText = hex(a);
  document.getElementById("secp256k1-private-key").innerText = hex(b);
})();
