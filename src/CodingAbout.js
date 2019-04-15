import React from "react";
import CodingLinks from "./CodingLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CodingAbout() {
  return (
    <div className="coding-about container">
      <h4>about</h4>
      <img src="images/headshot.jpg" />

      <CodingLinks />

      <p>
        Full stack web developer with a passion for innovation and efficiency.
        With experience in Ruby on Rails, JavaScript, React and a background in
        music, I discovered web development through intense personal curiosity
        that then motivated me to seek accredited training with the Flatiron
        school. I bring strong skills in project management, problem solving and
        creativity that help innovative companies to create efficient and
        effective products. As an established musician, I am very comfortable as
        a self-directed learner and I understand the long term benefits of
        practice, patience and persistence when building skills and developing
        unique products.<a className="resume-link" href="https://docs.google.com/presentation/d/1--AjndSnU3yztOyNebUBDgXGvodAWFGYgK6zKJV3xyg/edit?usp=sharing">Click here to view resumé.</a>
      </p>
    </div>
  );
}
