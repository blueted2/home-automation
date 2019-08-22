import React, { Component } from "react";
import OptionsButton from "./options/options_button";

class Switch_1 extends Component {
  state = {
    showOptions: false
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
          <OptionsButton
            onClick={() => {
              this.setState({ showOptions: !this.state.showOptions });
            }}
          />
        </div>

        <button
          onClick={() => {
            if (device.connected) {
              this.props.onStatusChange({
                deviceId: device.deviceId,
                status: device.status === "on" ? "off" : "on"
              });
            }
          }}
          className={buttonClass}>
          <div className="button-text">{buttonText}</div>
        </button>
      </div>
    );
  }
}

export default Switch_1;
