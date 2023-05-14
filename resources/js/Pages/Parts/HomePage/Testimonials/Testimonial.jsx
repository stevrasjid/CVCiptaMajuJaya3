import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import ButtonSlides from "@/Elements/ButtonSlides/ButtonSlides";
import "./Testimonial.scss";

export default function Testimonials(props) {
  return (
    <section className="container testimonial-section">
      <div className="row col-12">
        <h1 className="title col-8">Testimonial</h1>
        <div className="arrow col-3 d-flex justify-content-end">
          <ButtonSlides />
        </div>
      </div>
      <div className="row col-12 testimonials">
        {props.testimonies.map((data, i) => {
          return (
            <div className="col-6 testimonial-wrapper">
              <div className="testimonial text-center">
                <div className="description text-bold">
                  "{data.TestimonialDescription}"
                </div>
                <div className="row client-section justify-content-center">
                  <div className="col-5 p-0 text-end">
                    <img
                      src={`/images/imgTestimoni/${data.ImgClient}`}
                      alt=""
                    />
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
    </section>
  );
}
