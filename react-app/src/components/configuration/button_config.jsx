import React, { Component } from "react";
import NumberInput from "./number_input";
import Select from "./select_input";

class ButtonConfig extends Component {
  render() {
    return (
      <div>
        <NumberInput
          title="Button Duration"
          value={this.props.device.button_config.button_duration}
          path="button_config.button_duration"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default ButtonConfig;
