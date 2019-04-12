import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

// higher order components (hocs)
import CodePage from "./hocs/CodePage";
import DrumsPage from "./hocs/DrumsPage";

//components
import HomePage from "./HomePage"



// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faQuoteRight, faQuoteLeft);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/code" exact component={CodePage} />
          <Route path="/drums" exact component={DrumsPage} />
          <Route path="/" exact component={HomePage} />
          
        </div>
      </Router>
    );
  }
}

export default App;
