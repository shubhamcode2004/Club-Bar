import React, { Component } from "react";
import Club from "../Club/Club";

export default class Pune extends Component {
  render() {
    return (
      <>
        <h1>Pune</h1>
        <div className="popup">
          <Club />
        </div>
      </>
    );
  }
}
