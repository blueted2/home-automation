import React, { Component } from "react";
import TextInput from "./text_input";
import Select from "./select_input";

class GeneralConfig extends Component {
  render() {
    return (
      <div>
        <TextInput
          title="Device Name"
          defaultValue={this.props.device.name}
          path="name"
          onChange={this.props.onChange}
        />
        <Select
          path="type"
          onChange={this.props.onChange}
          defaultValue={this.props.device.type}
          title="Device Type"
          options={this.props.deviceTypes}
        />
      </div>
    );
  }
}

export default GeneralConfig;
