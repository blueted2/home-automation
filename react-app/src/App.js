import React, { Component } from "react";
import Container from "./containers/devicesContainer";
import "./styles.css";
import io from "socket.io-client";
const socket = io.connect("http://192.168.1.31:5000");

class App extends Component {
  state = {
    devices: []
  };
  render() {
    return <Container devices={this.state.devices} />;
  }

  componentDidMount() {
    socket.on("initialize", devices => {
      console.log("Got devices");
      this.setState({ devices: devices });
    });
  }
}

export default App;
