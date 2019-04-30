import React, { Fragment, Component } from "react";

//components

import About from "../About";
import AlbumGrid from "../AlbumGrid";
import Press from "../Press";
import Footer from "../Footer";

import NavBar from "../NavBar";
// import PhotoSlider from "../PhotoSlider"

import posed from "react-pose";

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

export default class DrumsPage extends Component {
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
        <NavBar display="drums" />
        <Box
          className="box drums-page"
          pose={this.state.isVisible ? "visible" : "hidden"}
        >
          <About />

          <AlbumGrid />

          <Press />
        </Box>

        <Footer />
      </Fragment>
    );
  }
}
