import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialBar() {
  return (
    <div className="social-bar">
      <a>
        <FontAwesomeIcon icon={["fab", "youtube"]} />
      </a>
      <a>
        <FontAwesomeIcon icon={["fab", "facebook"]} />
      </a>
      <a>
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </a>
      <a>
        <FontAwesomeIcon icon={["fab", "medium"]} />
      </a>
    </div>
  );
}
