import React from "react";

//components
import SocialBar from "../SocialBar";
import About from "../About";
import AlbumGrid from "../AlbumGrid";
import Press from "../Press";
import SignUpForm from "../SignUpForm";

export default function DrumsPage() {
  return (
    <div className="drums-page">
      <img
        className="banner-image"
        src="images/oli1.jpg"
      />
      


      <About />

      <SocialBar />

      <AlbumGrid />

      <Press />

      <SignUpForm />
    </div>
  );
}
