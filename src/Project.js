import React from "react";
import ScreenShotApiKey from "./ScreenShotApiKey";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const screenShot = (url, viewport, width) => {
  if (url === "" || url === null) {
    return;
  } else {
    return (
      <img
        src={`https://api.screenshotlayer.com/api/capture?access_key=${ScreenShotApiKey()}&url=${url}&viewport=${viewport}&width=${width}`}
      />
    );
  }
};

export default function Project(props) {
  return (
    <div className="project-card">
      {screenShot(props.homepage, "1440x900", "1000")}

      <h5>{props.name.replace(/_/g, " ")}</h5>
      <a href={props.gitHubLink}>
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <p>{props.description}</p>
    </div>
  );
}
