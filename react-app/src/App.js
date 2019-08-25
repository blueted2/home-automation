import React, { Component } from "react";
import Container from "./containers/devicesContainer";
import io from "socket.io-client";
import "./styles.css";
const socket = io.connect("http://molagnies.hd.free.fr:4000");

class App extends Component {
  state = {
    devices: [],
    deviceTypes: []
  };

  handleEvent = (event, device) => {
    socket.emit(event, {
      deviceId: device.deviceId,
      status: device.status
    });
  };

  render() {
    return (
      <Container
        devices={this.state.devices}
        deviceTypes={this.state.deviceTypes}
        onEvent={this.handleEvent}
      />
    );
  }

  componentDidMount() {
    socket.on("initialize", devices => {
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
    socket.on("deviceTypes", types => {
      this.setState({ deviceTypes: types });
    });
  }
}

export default App;
