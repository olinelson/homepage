import React, { Fragment } from "react";

//components

import About from "../About";
import AlbumGrid from "../AlbumGrid";
import Press from "../Press";
import Footer from "../Footer"


import NavBar from "../NavBar";
// import PhotoSlider from "../PhotoSlider"

export default function DrumsPage() {
  return (
    <Fragment>
      <NavBar display="drums" />
      <div className="drums-page">
        {/* <img alt="oli nelson promo" className="banner-image" src="images/promo1.jpg" /> */}

        {/* <PhotoSlider/> */}

        <About />

        {/* <SocialBar /> */}

        <AlbumGrid />

        <Press />

      </div>

      <Footer/>

    </Fragment>
  );
}
