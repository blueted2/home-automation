import React, { Component } from "react";
import Switch_Toggle from "../components/switch_toggle";
import Switch_Press from "../components/switch_press";
var deviceTags = { switch_toggle: Switch_Toggle, switch_press: Switch_Press };
class devicesContainer extends Component {
  render() {
    var { devices } = this.props;

    const switches = devices.map(device => {
      var Tag = deviceTags[device.type];
      if (!Tag) {
        Tag = deviceTags.switch_toggle;
      }
      return <Tag deviceTypes={this.props.deviceTypes} device={device} key={device.deviceId} onEvent={this.props.onEvent} />;
    });

    return <div className="devices-container">{switches}</div>;
  }
}

export default devicesContainer;
