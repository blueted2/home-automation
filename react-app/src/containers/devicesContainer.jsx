import React, { Component } from "react";
import Toggle_Switch from "../components/toggle_switch";
import Button from "../components/button";
var deviceTags = { toggle_switch: Toggle_Switch, button: Button };

class devicesContainer extends Component {
  render() {
    var { devices } = this.props;

    const switches = devices.map(device => {
      var Tag = deviceTags[device.type];
      if (!Tag) {
        Tag = deviceTags.toggle_switch;
      }
      return <Tag deviceTypes={this.props.deviceTypes} device={device} key={device.deviceId} onEvent={this.props.onEvent} />;
    });

    return <div className="devices-container">{switches}</div>;
  }
}

export default devicesContainer;
