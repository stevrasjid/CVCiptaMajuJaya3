import { React, useState } from "react";
import Button from "@/Elements/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Testimonial.scss";

export default function Testimonials(props) {
  let testimonyCount = props.testimonies.length;

  const [currentTestimony, setCurrentTestimony] = useState(0);

  const prevTestimony = () => {
    setCurrentTestimony((prev) => (prev === 0 ? testimonyCount - 2 : prev - 1));
  };

  const nextTestimony = () => {
    setCurrentTestimony((prev) => (prev + 2 === testimonyCount ? 0 : prev + 1));
  };
  return (
    <section className="container testimonial-section">
      <div className="row col-12">
        <h1 className="title col-8">Testimonial</h1>
        <div className="arrow col-3 d-flex justify-content-end">
          <Button
            type="button"
            className="button-slide"
            isPrimary
            style={{ marginRight: 8 }}
            onClick={prevTestimony}
          >
            <FontAwesomeIcon icon={["fas", "arrow-left"]} />
          </Button>
          <Button
            type="button"
            className="button-slide"
            isPrimary
            onClick={nextTestimony}
          >
            <FontAwesomeIcon icon={["fas", "arrow-right"]} />
          </Button>
        </div>
      </div>
      <div className="row testimonials">
        <div
          className="testimonial-track"
          style={{ transform: `translateX(-${currentTestimony * 50}%)` }}
        >
          {props.testimonies.map((data, i) => {
            return (
              <div className="col-lg-6 testimonial-wrapper">
                <div className="testimonial text-center">
                  <div className="description text-bold">
                    "{data.TestimonialDescription}"
                  </div>
                  <div className="row client-section justify-content-center">
                    <div className="col-5 p-0 text-end">
                      <img src={data.ImgClient} alt="" />
                    </div>
                    <div className="col d-flex flex-column text-start">
                      <p className="client-name text-bold">{data.ClientName}</p>
                      <small>{data.Occupation}</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
