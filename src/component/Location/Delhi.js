import React, { Component } from "react";
import Club from "../Club/Club";

export default class Delhi extends Component {
  render() {
    return (
      <>
        <h1>Delhi</h1>
        <div className="popup">
          <Club />
        </div>
      </>
    );
  }
}
