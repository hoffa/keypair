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
        <h1 className="mt-5">Ed25519</h1>
        <div className="mb-3">
          <label htmlFor="ed25519PublicKey" className="form-label">
            Public key
          </label>
          <textarea
            className="form-control font-monospace"
            id="ed25519PublicKey"
            value={this.state.ed25519PublicKey}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ed25519PrivateKey" className="form-label">
            Private key
          </label>
          <textarea
            className="form-control font-monospace"
            id="ed25519PrivateKey"
            value={this.state.ed25519PrivateKey}
          />
        </div>
        <h1 className="mt-5">Secp256k1</h1>
        <div className="mb-3">
          <label htmlFor="secp256k1PublicKey" className="form-label">
            Public key
          </label>
          <textarea
            className="form-control font-monospace"
            id="secp256k1PublicKey"
            value={this.state.secp256k1PublicKey}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="secp256k1PrivateKey" className="form-label">
            Private key
          </label>
          <textarea
            className="form-control font-monospace"
            id="secp256k1PrivateKey"
            value={this.state.secp256k1PrivateKey}
          />
        </div>
      </div>
    );
  }
}
