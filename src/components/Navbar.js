import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
        <div>
        <nav class="navbar navbar-expand-md fixed-top navColor">
          <a class="navbar-brand logo" href="#">
            AC
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#header">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
    );
  }
}

export default Navbar;
