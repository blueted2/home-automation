import React, { Component } from "react";
import settings from "../resources/settings.svg";
import observableDiff from "deep-diff";

class OptionsDropDown extends Component {
  state = {
    optionsVisible: false,
    device: JSON.parse(JSON.stringify(this.props.device)) //Make a deep copy
  };

  onChange = e => {
    var newState = this.state;
    newState.device[e.target.name] = e.target.value;
    this.setState(newState);
  };
  onSubmit = e => {
    e.preventDefault();
    var changes = {};
    var differences = observableDiff(this.props.device, this.state.device);
    if (!differences) return;
    differences.forEach(d => {
      if (d.path[0] !== "status" && d.path[0] !== "connected") {
        changes[d.path] = this.state.device[d.path];
      }
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
    const deviceTypes = this.props.deviceTypes.map(type => {
      return (
        <option value={type} key={type}>
          {type.replace(/_{1,}/g, " ").replace(/(\s{1,}|\b)(\w)/g, function(m, space, letter) {
            //Humanize
            return space + letter.toUpperCase();
          })}
        </option>
      );
    });
    return (
      <div>
        <div className={"options-button " + (this.state.optionsVisible ? "active" : "")} onClick={this.onButtonClick}>
          <img src={settings} alt="Options" />
        </div>

        <div className={"options-dropDown " + (this.state.optionsVisible ? "visible" : "")}>
          <form action="#" onSubmit={this.onSubmit}>
            <label style={{ paddingRight: "5px", paddingBottom: "5px" }}>Device name:</label>
            <input type="text" style={{ width: "100px" }} name="name" defaultValue={this.props.device.name} onChange={this.onChange} /> <br />
            <label style={{ paddingRight: "5px", paddingBottom: "5px" }}>Device type: </label>
            <select name="type" onChange={this.onChange} value={this.state.device.type}>
              {deviceTypes}
            </select>{" "}
            <br />
            <button type="submit" style={{ float: "right" }}>
              Submit changes
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default OptionsDropDown;
