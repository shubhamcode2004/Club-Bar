import React, { Component } from "react";
import Club from "../Club/Club";

export default class Goa extends Component {
  render() {
    return (
      <>
        <h1>Goa</h1>
        <div className="popup">
          <Club />
        </div>
      </>
    );
  }
}
