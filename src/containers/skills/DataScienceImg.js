import React, { Component } from "react";
import network from "../../assests/images/network.png"
export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
      <img src={network} alt="" /></>
    );
  }
}
