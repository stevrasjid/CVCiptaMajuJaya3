import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import "./OurServices.scss";

export default function OurServices({ services }) {
  return (
    <section className="container our-services-section">
      {services.map((data, i) => {
        if (i % 2 == 0) {
          return (
            <div className="row align-items-center image-section col-12 pt-5">
              <div className="col-lg-6 col-md-12 col-xs-12 text-center image-about-us">
                <img src={data.ImgService} alt="Gambar About Us Home" />
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12 justify-content-center">
                <div className="card ps-5">
                  <div className="card-body">
                    <h4 className="card-title text-bold">
                      Divisi {data.ServiceTitle}
                    </h4>
                    <p className="card-text">{data.ServiceDescription}</p>
                  </div>
                  <div className="card-footer d-flex d-inline">
                    <div className="pe-3">
                      <Button
                        href="https://wa.me/6289601783007"
                        type="link"
                        isExternal
                        isPrimary
                        className="button-wa"
                      >
                        <img src="/images/waFooter.png" alt="" />
                        <span>Robert</span>
                      </Button>
                    </div>
                    <div className="ps-2">
                      <Button
                        href="https://wa.me/6289601783007"
                        type="link"
                        isExternal
                        isPrimary
                        className="button-wa"
                      >
                        <img src="/images/waFooter.png" alt="" />
                        <span>Stevanus</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="row align-items-center image-section col-12 pt-5">
              <div className="col-6 justify-content-center ">
                <div className="card ps-5">
                  <div className="card-body">
                    <h4 className="card-title text-bold">
                      Divisi {data.ServiceTitle}
                    </h4>
                    <p className="card-text">{data.ServiceDescription}</p>
                  </div>
                  <div className="card-footer d-flex d-inline">
                    <div className="pe-3">
                      <Button
                        href="https://wa.me/6289601783007"
                        type="link"
                        isExternal
                        isPrimary
                        className="button-wa"
                      >
                        <img src="/images/waFooter.png" alt="" />
                        <span>Robert</span>
                      </Button>
                    </div>
                    <div className="ps-2">
                      <Button
                        href="https://wa.me/6289601783007"
                        type="link"
                        isExternal
                        isPrimary
                        className="button-wa"
                      >
                        <img src="/images/waFooter.png" alt="" />
                        <span>Stevanus</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 text-center image-about-us">
                <img
                  src={`/images/services/${data.ImgService}`}
                  alt="Gambar About Us Home"
                />
              </div>
            </div>
          );
        }
      })}
    </section>
  );
}
