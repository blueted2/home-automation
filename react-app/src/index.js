import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Switch from './components/switch';

const element = <h1> Hello World! </h1>;
ReactDom.render(<Switch />, document.getElementById("root"));
