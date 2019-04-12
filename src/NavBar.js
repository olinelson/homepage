import React from "react";

import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  const displaySwitch = () => {
    switch (props.display) {
      case "drums":
        console.log("drums");
        return "nav-dark";

      case "code":
        console.log("code");
        return "nav-light";

      default:
        console.log("home");
        return "nav-home";
    }
  };

  return (
    <nav className={displaySwitch()}>
      <h4>oli nelson</h4>
      <NavLink id="nav-link-code" to="/code" activeClassName="selected">
        code
      </NavLink>

      <NavLink id="nav-link-drums" to="/drums" activeClassName="selected">
        drums
      </NavLink>
    </nav>
  );
}
