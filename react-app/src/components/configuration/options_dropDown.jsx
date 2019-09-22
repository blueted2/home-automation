import React, { Component } from "react";
import settings from "../../resources/settings.svg";
import observableDiff from "deep-diff";
import "../../styles/options_dropDown.css";
import GeneralConfig from "./general_config";
import ButtonConfig from "./button_config";

class OptionsDropDown extends Component {
  state = {
    optionsVisible: false,
    device: JSON.parse(JSON.stringify(this.props.device)) //Make a deep copy
  };

  index = (obj, is, value) => {
    if (typeof is == "string") return this.index(obj, is.split("."), value);
    else if (is.length === 1 && value !== undefined) return (obj[is[0]] = value);
    else if (is.length === 0) return obj;
    else return this.index(obj[is[0]], is.slice(1), value);
  };

  onChange = e => {
    var newDevice = this.state.device;
    var path = e.target.getAttribute("path");
    this.index(newDevice, path, e.target.value);
    if (newDevice.type === "button") {
      if (!newDevice.button_config) {
        newDevice.button_config = {};
      }
    }
    this.setState({ device: newDevice });
  };

  onSubmit = e => {
    e.preventDefault();
    var changes = {};
    var differences = observableDiff(this.props.device, this.state.device);
    if (!differences) return;
    differences.forEach(d => {
      if (d.path[0] !== "status" && d.path[0] !== "connected")
        changes[d.path[0]] = this.state.device[d.path[0]];
    });
    changes.deviceId = this.props.device.deviceId;
    this.props.onEvent("configChange", changes);
  };

  onButtonClick = () => {
    this.setState(prevState => ({
      optionsVisible: !prevState.optionsVisible
    }));
  };

  render() {
    const { device, optionsVisible } = this.state;
    console.log(device);

    return (
      <div>
        <div
          className={"options-button " + (optionsVisible ? "active" : "")}
          onClick={this.onButtonClick}>
          <img src={settings} alt="Options" />
        </div>

        <div className={"options-dropDown " + (optionsVisible ? "visible" : "")}>
          <form action="#" onSubmit={this.onSubmit}>
            <GeneralConfig
              device={device}
              deviceTypes={this.props.deviceTypes}
              onChange={this.onChange}
            />
            {device.type === "button" ? (
              <ButtonConfig device={device} onChange={this.onChange} />
            ) : (
              ""
            )}
            <button className="submit" type="submit" style={{ float: "right" }}>
              Submit changes
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default OptionsDropDown;
