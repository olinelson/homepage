import React from "react";
import Carousel from "nuka-carousel";

export default function PhotoSlider() {
  return (
    <Carousel
      width={"100vw"}
      renderBottomsRightControls={({ nextSlide }) => (
        <button onClick={nextSlide}>Next</button>
      )}
    >
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
    </Carousel>
  );
}
