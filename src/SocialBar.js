import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialBar() {
  return (
    <div className="social-bar">
      <a href="https://www.youtube.com/user/MrOlibobo">
        <FontAwesomeIcon icon={["fab", "youtube"]} />
      </a>
      <a href="https://www.facebook.com/oli.nelson1">
        <FontAwesomeIcon icon={["fab", "facebook"]} />
      </a>
      <a href="https://www.instagram.com/olinelsondrums/">
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </a>
      <a href="https://medium.com/@olinelson93">
        <FontAwesomeIcon icon={["fab", "medium"]} />
      </a>
    </div>
  );
}
