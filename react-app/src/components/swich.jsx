import React, { Component } from "react";
import io from "socket.io-client";

class Switch extends Component {
  state = { config: { name: "Test" } };
  render() {
    return <h1>{this.state.config.name}</h1>;
  }
  componentDidMount() {
    var socket = io.connect("http://localhost:5000/light_1");
    socket.on("update", body => {
      this.setState(body);
    });
  }
}

export default Switch;
