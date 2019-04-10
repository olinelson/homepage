import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      light: true
    };
  }

  makeNavLight = () => {
    this.setState({
      light: true
    });
  };

  makeNavDark = () => {
    this.setState({
      light: false
    });
  };

  render = () => {
    console.log(this.state);

    if (this.state.light === true) {
      return (
        <nav className="nav-light">
          <h4>oli nelson</h4>
          <NavLink
            id="nav-link-code"
            onClick={this.makeNavLight}
            to="/code"
            activeClassName="selected"
          >
            code
          </NavLink>

          <NavLink
            id="nav-link-drums"
            onClick={this.makeNavDark}
            to="/drums"
            activeClassName="selected"
          >
            drums
          </NavLink>
        </nav>
      );
    } else {
      return (
        <nav className="nav-dark">
          <h4>oli nelson</h4>
          <NavLink
            id="nav-link-code"
            onClick={this.makeNavLight}
            to="/code"
            activeClassName="selected"
          >
            code
          </NavLink>

          <NavLink
            id="nav-link-drums"
            onClick={this.makeNavDark}
            to="/drums"
            activeClassName="selected"
          >
            drums
          </NavLink>
        </nav>
      );
    }
  };
}

export default NavBar;
