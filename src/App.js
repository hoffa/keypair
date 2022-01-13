import React from "react";
import * as ed25519 from "@noble/ed25519";
import { Container } from "react-bootstrap";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const privateKey = ed25519.utils.randomPrivateKey();
    console.log(privateKey);
    const publicKey = await ed25519.getPublicKey(privateKey);
    this.setState({
      privateKey: ed25519.utils.bytesToHex(privateKey),
      publicKey: ed25519.utils.bytesToHex(publicKey),
    });
  }

  render() {
    return (
      <Container>
        <code>
          {this.state.privateKey} {this.state.publicKey}
        </code>
      </Container>
    );
  }
}
