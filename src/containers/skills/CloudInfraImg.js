import React, { Component } from "react";
import image from "../../assests/images/working_of_beckn.png";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        <img src={image} alt="" />
      </>
    );
  }
}
