import React, { Component } from "react";
import OptionsDropDown from "./options_dropDown";
import Slider from "./slider_switch";

class Switch_Toggle extends Component {
  onClick = () => {
    
    const { device } = this.props;
    if (device.connected) {
      if (device.status === "on") {
        this.props.onEvent("switchOff", {
          deviceId: device.deviceId
        });
      } else {
        this.props.onEvent("switchOn", {
          deviceId: device.deviceId
        });
      }
    }
  };

  render() {
    const { device } = this.props;
    const buttonText = device.status.charAt(0).toUpperCase() + device.status.slice(1);
    var buttonClass = "full-button ";
    if (!device.connected) {
      buttonClass += "disabled ";
    } else {
      if (device.status === "on") {
        buttonClass += "active ";
      }
    }

    return (
      <div className="device-container">
        <div className="device-header">
          <div className="device-name">{device.name}</div>
          <OptionsDropDown onEvent={this.props.onEvent} deviceTypes={this.props.deviceTypes} device={device} />
        </div>

        <Slider onClick={this.onClick} device={this.props.device} />
      </div>
    );
  }
}

export default Switch_Toggle;
