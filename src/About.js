import React from "react";

import SocialBar from "./SocialBar"

export default function About() {
  return (
    <div className="about container">
      <img alt="oli nelson promo" src="images/promo1.jpg" />

      <div className="about-body">
        <h4>about</h4>
        <SocialBar />
        <p>
          Oli Nelson is an acclaimed Australian drummer from Sydney Australia,
          now based in New York City. He has performed alongside leading jazz
          artists including Arturo Sandoval, James Muller, Mike Nock, Gian
          Slater, Kristin Berardi, and the Jazzgroove Mothership Orchestra. In
          2016, he played on both the Sydney Conservatorium Big Band’s album
          ‘Okay’ featuring James Muller (54 Records), and Hieronymus Trio’s
          debut album, both recorded at renowned Systems Two studios in New
          York. As a member of Hieronymus Trio, he also recorded at the ABC
          (‘Where the Rest of the World Begins’ - 54 Records 2017), performed at
          the Sydney Conservatorium International Jazz Festival (2017), and the
          Freedman Jazz Finals held at the Sydney Opera House (2017). Oli has
          appeared at major jazz venues across Australia as well as touring
          internationally, including with the Sydney Conservatorium Big Band,
          who performed at the prestigious Midwest Clinic in Chicago IL on their
          2015/16 USA tour. He is known as a versatile and innovative artist who
          enjoys performing both ‘within’ and ‘on the edges’ of the jazz and
          improvised dialects.
        </p>
      </div>
    </div>
  );
}
