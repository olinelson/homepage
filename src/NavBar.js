import React from "react";

import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  const displaySwitch = () => {
    switch (props.display) {
      case "drums":

        return "nav-dark";

      case "code":

        return "nav-light";

      default:

        return "nav-home";
    }
  };

  return (
    <nav className={displaySwitch()}>
      <NavLink id="nav-link-home" to="/" activeClassName="selected">
        <h4>oli nelson</h4>
      </NavLink>

      <NavLink
        className="nav-link"
        id="nav-link-code"
        to="/code"
        activeClassName="selected"
      >
        code
      </NavLink>

      <NavLink
        className="nav-link"
        id="nav-link-drums"
        to="/drums"
        activeClassName="selected"
      >
        drums
      </NavLink>
    </nav>
  );
}
