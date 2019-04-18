import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Project extends Component {
  state = {
    languages: []
  };


  getProjectsLanguages = () => {
    fetch(`https://api.github.com/repos/olinelson/${this.props.name}/languages`)
      .then(r => r.json())
      .then(r => {
        let result = [];
        for (let lang in r) {
          result.push(lang);
        }
        this.setState({ languages: result });
      });
  };

  componentDidMount = () => {
    this.getProjectsLanguages();
  };

  render() {
    return (
      <div className="project-card">
        <img
          className="website-image"
          alt={`${this.props.name} screen shot`}
          src={`https://raw.githubusercontent.com/olinelson/${this.props.name}/master/public/preview_image.jpg`}
        />

        <h5>{this.props.name.replace(/_/g, " ")}</h5>

        <p>{this.props.description}</p>

        <a href={this.props.gitHubLink}>
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a href={this.props.homepage}>
          <FontAwesomeIcon icon="desktop" />
        </a>
        <div className="languages-grid">
          {this.state.languages.map(lang => (
            <small>{lang}</small>
          ))}
        </div>
      </div>
    );
  }
}
