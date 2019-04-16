import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Project extends Component {
  state = {
    languages: []
  };

  screenShot = (url, viewport, width) => {
    const apiKey = process.env.REACT_APP_SCREEN_SHOT_API_KEY;

    if (url === "" || url === null) {
      return <FontAwesomeIcon className="website-image" icon="image" />;
    } else {
      return (
        <img
          className="website-image"
          alt="website screen shot"
          src={`https://api.screenshotlayer.com/api/capture?access_key=${apiKey}&url=${url}&viewport=${viewport}&width=${width}`}
        />
      );
    }
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
        {this.screenShot(this.props.homepage, "1400x900", "1000")}

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
