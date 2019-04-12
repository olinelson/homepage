import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const screenShot = () => {
  fetch(
    "https://api.screenshotlayer.com/api/capture?access_key= "
  );
};

export default function Project(props) {
  return (
    <div className="project-card">
      {console.log("in project card", props)}
      <h5>{props.name.replace(/_/g, " ")}</h5>
      <a href={props.gitHubLink}>
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <p>{props.description}</p>
    </div>
  );
}
