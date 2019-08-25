import React, { Component } from "react";
import Switch from "../components/switch_1";

class devicesContainer extends Component {
  render() {
    var { devices } = this.props;

    const switches = devices.map(device => {
      return <Switch deviceTypes={this.props.deviceTypes} device={device} key={device.deviceId} onEvent={this.props.onEvent} />;
    });

    return <div className="devices-container">{switches}</div>;
  }
}

export default devicesContainer;
