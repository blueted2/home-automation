import React, { Component } from "react";
import io from "socket.io-client";

var socket = io.connect("http://localhost:5000/light_1");

class Switch extends Component {
  state = {};
  render() {
    console.log(this.props);
    return <h1>Test</h1>;
  }
}

export default Switch;
