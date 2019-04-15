import React, { Component } from "react";

import Project from "../Project";

const uuidv1 = require("uuid/v1");

export default class Projects extends Component {
  state = {
    starredProjects: []
  };

  // const ScreenShotApiKey=
  // efb0e3fce4a2b562e91af3d3c8fb3e7d

  getGitHubStarredProjects = () => {
    fetch("https://api.github.com/users/olinelson/starred")
      .then(r => r.json())
      .then(r =>
        this.setState({
          starredProjects: r
        })
      );
  };

  componentDidMount = () => {
    this.getGitHubStarredProjects();
  };

  render() {

    return (
      <div className="projects container">
        <h4>projects</h4>
        <div className="projects-grid">
        {this.state.starredProjects.map(proj => (
          <Project
            key={uuidv1()}
            name={proj.name}
            gitHubLink={proj.html_url}
            description={proj.description}
            homepage={proj.homepage}
          />
        ))}
        </div>
      </div>
    );
  }
}
