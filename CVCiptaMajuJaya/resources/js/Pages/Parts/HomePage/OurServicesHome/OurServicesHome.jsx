import { Link, Head } from "@inertiajs/react";

import Button from "@/Elements/Button/Button";
import ButtonSlides from "@/Elements/ButtonSlides/ButtonSlides";
import "./OurServicesHome.scss";


export default function OurServicesHome(props) {
  return (
    <>
      <section className="container our-services">
        <div className="row col-12" style={{ marginBottom: 30 }}>
          <h1 className="title col-8">Layanan Kami</h1>
          <div className="arrow col-3 d-flex justify-content-end">
            <ButtonSlides />
          </div>
        </div>
      </section>
      <section className="container-fluid p-0" style={{ height: "70vh" }}>
        <ul
          className="d-flex flex-row services col-12"
          style={{ height: "100%" }}
        >
          {props.services.map((data, i) => {
            return (
              <li
                key={i}
                className="flex-items p-0 col-3"
                style={{
                  backgroundImage: `url("images/services/${data.ImgService}")`,
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
        </ul>
      </section>
    </>
  );
}
