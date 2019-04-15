import React, { Fragment } from "react";

//components
import SocialBar from "../SocialBar";
import About from "../About";
import AlbumGrid from "../AlbumGrid";
import Press from "../Press";
import Contact from "../Contact"

import NavBar from "../NavBar";
// import PhotoSlider from "../PhotoSlider"

export default function DrumsPage() {
  return (
    <Fragment>
      <NavBar display="drums" />
      <div className="drums-page">
        <img className="banner-image" src="images/promo1.jpg" />

        {/* <PhotoSlider/> */}

        <About />

        <SocialBar />

        <AlbumGrid />

        <Press />

        <Contact/>
      </div>
      <footer />
    </Fragment>
  );
}
