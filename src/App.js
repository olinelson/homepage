import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";

import 'semantic-ui-css/semantic.min.css'
import CodePage from "./CodePage";
import DrumsPage from "./DrumsPage";
import Footer from "./Footer"

import styled from 'styled-components'

//components
import HomePage from "./HomePage";
import NavBar from "./NavBar";

const SiteContainer = styled.div`
  background: ${props => props.location.pathname === "/drums" ? "black" : "white"} ;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`
function App() {

  return <HashRouter basename="/">
    <div className="app">
      <Route render={(props) =>
        <SiteContainer {...props}>



          <Route render={(props) => <NavBar {...props} />} />
          <Route path="/" exact component={HomePage} />
          <Route path="/code" component={CodePage} />
          <Route path="/drums" exact component={DrumsPage} />

          <Footer {...props} />
        </SiteContainer>
      } />

    </div>
  </HashRouter >
}

export default App;
