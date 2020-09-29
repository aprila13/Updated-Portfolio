import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div class="container-fluid head" id="header">
        <div class="row">
          <div class="col-sm name text-center">
            <span class="fast-flicker">A</span>pri
            <span class="flicker pr-4">l</span>
            <span class="fast-flicker">C</span>rai<span class="flicker">g</span>
          </div>
        </div>
        <div className="row">
          <div class="col-sm">
            <p className="title">SOFTWARE ENGINEER</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
