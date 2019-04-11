import React from "react";

export default function DrumsPage() {
  return (
    <div className="drums-page">
      <div className="image-1" />

      <div>
        <h4>about</h4>
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

      <div>
        <p>social links</p>
      </div>

      <div className="albums-grid">
        <img src="images/tcd.jpg"></img>
        <img src="images/wtrotwb.jpg"></img>
        <img src="images/scjo.jpg"></img>
        <img src="images/hrt.jpg"></img>
      </div>

      <div>
        <h4>Press</h4>
        <div className="press-card">
          <p>
            Fearlessly individualistic talent who defies easy categorization
          </p>
          <a href="https://newyorkmusicdaily.wordpress.com/2018/04/27/egs/">
            - delarue | New York Music Daily
          </a>
        </div>
        <div className="press-card">
          <p>
            An astonishing big band made up of some of Australia’s most
            accomplished young lions
          </p>
          <a href="http://toypianorecords.de/Archive/260">
            John Mcbeath | Toy Piano Records
          </a>
        </div>
        <div className="press-card">
          <p>
            The band was fuelled by the formidable talent of drummer Oli Nelson
          </p>
          <a href="https://scenestr.com.au/music/jazzgroove-mothership-orchestra-brisbane-powerhouse-review">
            Lynette Irwin | Scenestr.
          </a>
        </div>
        <div className="press-card">
          <p>
            This has such a fragile, diaphanous beauty that I sometimes had to
            remind myself to breathe as I listened
          </p>
          <a href="https://www.smh.com.au/entertainment/music/music-reviews-the-killers-grizzly-bear-gian-slater-and-more-20170821-gy0xpc.html">
            John Shand | The Sydney Morning Herald
          </a>
        </div>
      </div>
    </div>
  );
}
