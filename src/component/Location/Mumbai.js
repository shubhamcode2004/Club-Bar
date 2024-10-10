import React, { Component } from "react";
import Club from "../Club/Club";

export default class Mumbai extends Component {
  render() {
    return (
      <>
        <h1>Mumbai</h1>
        <div className="popup">
          <Club/>
        </div>
      </>
    );
  }
}
