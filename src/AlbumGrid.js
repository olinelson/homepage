import React from "react";

export default function AlbumGrid() {
  return (
    <div className="albums container">
      <h4>albums</h4>
      <div className="albums-grid container">
        <a href="https://54records.com.au/hieronymus-trio-where-the-rest-of-the-world-begins">
          <img alt="where the rest of the world begins album cover" src="images/wtrotwb.jpg" />
        </a>
        <a href="https://trashcandream.bandcamp.com/track/out-on-the-sea-single-release">
          <img alt="trash can dream album cover" src="images/tcd.jpg" />
        </a>
        <a href="https://54records.com.au/james-muller-big-band-okay">
          <img alt="sydney conservatorium jazz orchestra album cover" src="images/scjo.jpg" />
        </a>
        <a alt="hieronymus trio album cover" href="https://hieronymustrio.bandcamp.com/releases">
          <img alt="hieronymus trio album cover" src="images/hrt.jpg" />
        </a>

       
      </div>
    </div>
  );
}
