import React, { Fragment, Component } from "react";
import { NavLink } from "react-router-dom";

import posed from "react-pose";

import NavBar from "./NavBar";

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

export default class HomePage extends Component {
  state = {
    isVisible: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({isVisible: true});
    }, 200);
  }

  render() {
    return (
      <Fragment>
        <NavBar display="home" />
        <Box
          pose={this.state.isVisible ? "visible" : "hidden"}
          className="box home-page"
        >
          <NavLink to={"/code"}>code </NavLink>
          <NavLink to={"/drums"}>drums </NavLink>
        </Box>
      </Fragment>
    );
  }
}
