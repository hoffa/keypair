import React from "react";
import * as ed25519 from "@noble/ed25519";
import * as secp256k1 from "@noble/secp256k1";

async function generateEd25519KeyPair() {
  const privateKey = ed25519.utils.randomPrivateKey();
  const publicKey = await ed25519.getPublicKey(privateKey);
  return {
    publicKey: ed25519.utils.bytesToHex(publicKey),
    privateKey: ed25519.utils.bytesToHex(privateKey),
  };
}

function generateSecp256k1KeyPair() {
  const privateKey = secp256k1.utils.randomPrivateKey();
  const publicKey = secp256k1.getPublicKey(privateKey);
  return {
    publicKey: secp256k1.utils.bytesToHex(publicKey),
    privateKey: secp256k1.utils.bytesToHex(privateKey),
  };
}

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { publicKey: ed25519PublicKey, privateKey: ed25519PrivateKey } =
      await generateEd25519KeyPair();
    const { publicKey: secp256k1PublicKey, privateKey: secp256k1PrivateKey } =
      generateSecp256k1KeyPair();
    this.setState({
      ed25519PublicKey,
      ed25519PrivateKey,
      secp256k1PublicKey,
      secp256k1PrivateKey,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Ed25519</h1>
        <h2>Public key</h2>
        <p>
          <code>{this.state.ed25519PublicKey}</code>
        </p>
        <h2>Private key</h2>
        <p>
          <code>{this.state.ed25519PrivateKey}</code>
        </p>
        <h1>Secp256k1</h1>
        <h2>Public key</h2>
        <p>
          <code>{this.state.secp256k1PublicKey}</code>
        </p>
        <h2>Private key</h2>
        <p>
          <code>{this.state.secp256k1PrivateKey}</code>
        </p>
      </div>
    );
  }
}
