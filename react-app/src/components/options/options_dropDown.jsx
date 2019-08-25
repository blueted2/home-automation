import React, { Component } from "react";
import settings from "../../resources/settings.svg";

class OptionsDropDown extends Component {
  state = {
    optionsVisible: false
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
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
          {type}
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
            <label style={{ paddingRight: "5px" }}>Device name: </label>
            <input type="text" name="name" defaultValue={this.props.device.name} onChange={this.onChange} />
            <label style={{ paddingRight: "5px" }}>Device type: </label>
            <select name="type" onChange={this.onChange} value={this.props.device.type}>
              {deviceTypes}
            </select>

            <button type="submit">Submit changes</button>
          </form>
        </div>
      </div>
    );
  }
}

export default OptionsDropDown;
