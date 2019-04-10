import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

// higher order components (hocs)
import CodePage from "./hocs/CodePage"
import DrumsPage from "./hocs/DrumsPage"

// components
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route path="/code" exact component={CodePage} />
          <Route path="/drums" component={DrumsPage} />

        </div>
      </Router>
    );
  }
}

export default App;
