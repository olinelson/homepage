import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CodingLinks() {
  return (
    <div className="social-bar">
      <a href="https://github.com/olinelson">
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a href="https://www.linkedin.com/in/oliver-nelson-a5961793/">
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </a>

      <a href="https://medium.com/@olinelson93">
        <FontAwesomeIcon icon={["fab", "medium"]} />
      </a>
    </div>
  );
}
