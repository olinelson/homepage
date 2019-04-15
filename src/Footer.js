import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {

   const generateCurrentYear = () => {
    let fullDate = new Date()
    let year = fullDate.getFullYear()
    return year
    }

  return (
    <footer>
      <p>
        <FontAwesomeIcon icon={"copyright"} /> Oli Nelson {generateCurrentYear()}
      </p>
    </footer>
  );
}
