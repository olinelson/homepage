import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Press() {
  return (
    <div className="press-container">

      <div className="press-card">
        <FontAwesomeIcon className="quote-left" icon="quote-left" />
        <p>Fearlessly individualistic talent who defies easy categorization</p>
        <FontAwesomeIcon icon="quote-right" />
        <a href="https://newyorkmusicdaily.wordpress.com/2018/04/27/egs/">
          delarue | New York Music Daily
        </a>
      </div>

      <div className="press-card">
        <FontAwesomeIcon className="quote-left" icon="quote-left" />
        <p>
          An astonishing big band made up of some of Australia’s most
          accomplished young lions
        </p>
        <FontAwesomeIcon icon="quote-right" />
        <a href="http://toypianorecords.de/Archive/260">
          John Mcbeath | Toy Piano Records
        </a>
      </div>

      <div className="press-card">
        <FontAwesomeIcon className="quote-left" icon="quote-left" />
        <p>
          The band was fuelled by the formidable talent of drummer Oli Nelson
        </p>
        <FontAwesomeIcon icon="quote-right" />
        <a href="https://scenestr.com.au/music/jazzgroove-mothership-orchestra-brisbane-powerhouse-review">
          Lynette Irwin | Scenestr.
        </a>
      </div>

      <div className="press-card">
        <FontAwesomeIcon className="quote-left" icon="quote-left" />
        <p>
          This has such a fragile, diaphanous beauty that I sometimes had to
          remind myself to breathe as I listened
        </p>
        <FontAwesomeIcon icon="quote-right" />
        <a href="https://www.smh.com.au/entertainment/music/music-reviews-the-killers-grizzly-bear-gian-slater-and-more-20170821-gy0xpc.html">
          John Shand | The Sydney Morning Herald
        </a>
      </div>
    </div>
  );
}
