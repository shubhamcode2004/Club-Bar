import React, { Component } from "react";
import Club from "../Club/Club";

export default class Bengalure extends Component {
  render() {
    return (
      <>
        <h1>Bengalure</h1>
        <div className="popup">
          <Club />
        </div>
      </>
    );
  }
}
