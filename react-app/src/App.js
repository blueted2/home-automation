import React, { Component } from "react";
import Container from "./containers/devicesContainer";
import io from "socket.io-client";
import "./styles.css"
const socket = io.connect("http://molagnies.hd.free.fr:4000");

class App extends Component {
  state = {
    devices: []
  };

  handleStatusChange = device => {
    socket.emit("statusChange", {
      deviceId: device.deviceId,
      status: device.status
    });
    console.log(
      "Device " + device.deviceId + " has been changed to " + device.status
    );
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
    socket.on("statusChange", device => {
      var devices = this.state.devices;
      var index = devices.findIndex(d => d.deviceId === device.deviceId);
      devices[index].status = device.status;
      this.setState({ devices: devices });
    });
    socket.on("controllerConnection", device => {
      var devices = this.state.devices;
      var index = devices.findIndex(d => d.deviceId === device.deviceId);
      devices[index].connected = device.connected;
      this.setState({ devices: devices });
    });
    socket.on("controllerDisconnect", device => {
      var devices = this.state.devices;
      var index = devices.findIndex(d => d.deviceId === device.deviceId);
      devices[index].connected = device.connected;
      this.setState({ devices: devices });
    });
  }
}

export default App;
