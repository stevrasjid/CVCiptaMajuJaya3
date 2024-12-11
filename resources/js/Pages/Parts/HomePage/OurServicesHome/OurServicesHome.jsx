import { React, useState } from "react";

import Button from "@/Elements/Button/Button";
import ButtonSlides from "@/Elements/ButtonSlides/ButtonSlides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./OurServicesHome.scss";
import { useEffect } from "react";

export default function OurServicesHome({ services }) {
  let images = []; // Add image paths

  services.forEach(function (x) {
    images.push(x.ImgService);
  });

  const [currentImage, setCurrentImage] = useState(0);
  const [slideCount, setSlideCount] = useState(25);
  const [currentImageCount, setCurrentImageCount] = useState(4);

  const prevImage = () => {
    var current = currentImage;
    var imageNow = 0;
    if (currentImage === 0) {
      imageNow = images.length - currentImageCount;
    } else {
      imageNow = current - 1;
    }
    setCurrentImage(imageNow);
  };

  const nextImage = () => {
    var current = currentImage;
    var imageNow = 0;
    if (current + currentImageCount >= images.length) {
      imageNow = 0;
    } else {
      imageNow = current + 1;
    }
    setCurrentImage(imageNow);
  };

  useEffect(() => {
    var width = window.outerWidth;
    var percentage = 25;
    var currentImageCountTemp = 4;
    if (width < 768) {
      percentage = 100;
      currentImageCountTemp = 1;
    }
    if (width < 992) {
      percentage = 50;
      currentImageCountTemp = 2;
    }
    setSlideCount(percentage);
    setCurrentImageCount(currentImageCountTemp);
  }, []);
  return (
    <>
      <section className="container our-services">
        <div className="row col-12" style={{ marginBottom: 30 }}>
          <h1 className="title col-8">Layanan Kami</h1>
          <div className="arrow col-3 d-flex justify-content-end">
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
      </section>
      <section
        className="container-fluid p-0 col-lg-12 services"
        style={{ height: "80vh" }}
      >
        <div className="carousel-container">
          <ul
            className="carousel-track2 text-center p-0"
            style={{ transform: `translateX(-${currentImage * slideCount}%)` }}
          >
            {services.map((data, index) => (
              <li
                key={index}
                className="carousel-slide col-lg-3 col-md-6 col-sm-12 col-sm-12"
              >
                <div
                  key={index}
                  className="p-0"
                  style={{
                    backgroundImage: `url(${data.ImgService})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                  }}
                >
                  <div className="text-center title-section">
                    <p className="name">{data.ServiceTitle}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
