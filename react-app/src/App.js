import React, { Component } from "react";
import Container from "./containers/devicesContainer";
import "./styles.css";
import io from "socket.io-client";
const socket = io.connect("http://192.168.1.31:5000");

class App extends Component {
  state = {
    devices: []
  };

  handleStatusChange = (deviceId, new_status) => {
    socket.emit("statusChange", { deviceId: deviceId, status: new_status });
    console.log("Device " + deviceId + " has been changed to " + new_status);
  };

  render() {
    return (
      <Container
        devices={this.state.devices}
        onStatusChange={this.handleStatusChange}
      />
    );
  }

  componentDidMount() {
    socket.on("initialize", devices => {
      console.log("Got devices");
      this.setState({ devices: devices });
    });
    socket.on("statusChange", new_device => {
      var devices = this.state.devices;
      var index = devices.findIndex(d => d.deviceId === new_device.deviceId);
      devices[index].status = new_device.status;
      this.setState({ devices: devices });
    });
  }
}

export default App;
