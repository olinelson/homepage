import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import NavBar from "./NavBar";

export default function HomePage() {
  return (
    <Fragment>
      <NavBar display="home" />
      <div className="home-page">
        <NavLink to={"/code"}>code </NavLink>
        <NavLink to={"/drums"}>drums </NavLink>
      </div>
    </Fragment>
  );
}
