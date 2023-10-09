import React, { useState } from "react";
import Button from "../Button/Button";
import "./SliderImage.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = (props) => {
  const outerClassName = props.outerClassName;
  let images = []; // Add image paths

  props.imagesCarousel.forEach((x) => {
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
    <div className={outerClassName}>
      <div className="carousel-container">
        <div
          className="carousel-track text-center"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="col-lg-12 text-center pt-3">
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
    </div>
  );
};

export default Carousel;
