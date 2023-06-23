import React, { Component } from "react";
import Spin from "../spinner.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={Spin} alt="loading" />
      </div>
    );
  }
}
