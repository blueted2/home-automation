import React, { Component } from "react";

class SelectInput extends Component {
  render() {
    const deviceTypes = this.props.options.map(type => {
      return (
        <option value={type} key={type}>
          {//Humanize
          type.replace(/_{1,}/g, " ").replace(/(\s{1,}|\b)(\w)/g, function(m, space, letter) {
            return space + letter.toUpperCase();
          })}
        </option>
      );
    });
    return (
      <div>
        <label className="option-label">{this.props.title}: </label>
        <select
          path={this.props.path}
          onChange={e => this.props.onChange(e)}
          value={this.props.defaultValue}>
          {deviceTypes}
        </select>
      </div>
    );
  }
}

export default SelectInput;
