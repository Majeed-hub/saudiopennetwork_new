import React, { Component } from "react";
import beckn from "../../assests/images/beckn_image.png"

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
      <img src={beckn} alt="" /></>
    );
  }
}
