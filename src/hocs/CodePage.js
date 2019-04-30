import React, { Fragment, Component } from "react";

import NavBar from "../NavBar";
import CodingAbout from "../CodingAbout";
import Projects from "./Projects";
import Footer from "../Footer";

import TechnicalSkills from "../TechnicalSkills";

import posed from "react-pose";

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

export default class CodePage extends Component {
  state = {
    isVisible: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 50);
  }

  render() {
    return (
      <Fragment>
        <NavBar display="code" />
        <Box
          className="box code-page"
          pose={this.state.isVisible ? "visible" : "hidden"}
        >
          <CodingAbout />

          <Projects />
          <TechnicalSkills />
        </Box>
        <Footer />
      </Fragment>
    );
  }
}
