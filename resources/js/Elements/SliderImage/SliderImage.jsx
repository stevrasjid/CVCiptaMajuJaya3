import React, { useState } from "react";
import Button from "../Button/Button";
import "./SliderImage.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = ({ imagesCarousel }) => {
  let images = []; // Add image paths

  imagesCarousel.forEach((x) => {
    images.push(x.ImgProject);
  });
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{ paddingTop: 15 }}>
        <Button
          type="button"
          className="button-slide"
          isPrimary
          style={{ marginRight: 8 }}
          onClick={prevImage}
        >
          <FontAwesomeIcon icon={["fas", "arrow-left"]} />
        </Button>
        <Button
          type="button"
          className="button-slide"
          isPrimary
          onClick={nextImage}
        >
          <FontAwesomeIcon icon={["fas", "arrow-right"]} />
        </Button>
      </div>
    </>
  );
};

export default Carousel;
