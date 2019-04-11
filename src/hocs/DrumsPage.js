import React from "react";

//components
import SocialBar from "../SocialBar";
import About from "../About";
import AlbumGrid from "../AlbumGrid";
import Press from "../Press";
import SignUpForm from "../SignUpForm";
// import PhotoSlider from "../PhotoSlider"

export default function DrumsPage() {
  return (
    <div className="drums-page">

        <img className="banner-image" src="images/promo1.jpg" />


      {/* <PhotoSlider/> */}

      <About />

      <SocialBar />

      <AlbumGrid />

      <Press />

      <SignUpForm />
    </div>
  );
}
