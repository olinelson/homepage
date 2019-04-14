import React, { Fragment } from "react";

import NavBar from "../NavBar";
import CodingAbout from "../CodingAbout";
import Projects from "./Projects"

import CodingLinks from "../CodingLinks";
import TechnicalSkills from "../TechnicalSkills";

export default function CodePage() {
  return (
    <Fragment>
      <NavBar display="code" />
      <div className="code-page">
        <CodingAbout />
        <CodingLinks />
        <Projects/>
        <TechnicalSkills/>
      </div>
      <footer />
    </Fragment>
  );
}
