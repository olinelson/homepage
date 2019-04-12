import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import NavBar from "./NavBar";

export default function HomePage() {
  return (
    <Fragment>
      <NavBar display="home" />
      <div className="home-page">
        <NavLink to={"/code"}>Code </NavLink>
        <NavLink to={"/drums"}>Drums </NavLink>
      </div>
    </Fragment>
  );
}
