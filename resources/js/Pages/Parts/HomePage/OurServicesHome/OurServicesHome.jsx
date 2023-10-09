import { React, useState } from "react";

import Button from "@/Elements/Button/Button";
import ButtonSlides from "@/Elements/ButtonSlides/ButtonSlides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./OurServicesHome.scss";

export default function OurServicesHome({ services }) {
  let images = []; // Add image paths

  services.forEach(function (x) {
    images.push(x.ImgService);
  });

  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 4 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 4 === images.length ? 0 : prev + 1));
  };
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
            style={{ transform: `translateX(-${currentImage * 25}%)` }}
          >
            {services.map((data, index) => (
              <li key={index} className="carousel-slide col-lg-3">
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
        {/* <ul
          className="d-flex flex-row services col-12"
          style={{ height: "100%" }}
        >
          {services.map((data, i) => {
            return (
              <li
                key={i}
                className="flex-items p-0 col-3"
                style={{
                  backgroundImage: `url(${data.ImgService})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "100%",
                }}
              >
                <div className="text-center title-section">
                  <p className="name">{data.ServiceTitle}</p>
                </div>
              </li>
            );
          })}
        </ul> */}
      </section>
    </>
  );
}
