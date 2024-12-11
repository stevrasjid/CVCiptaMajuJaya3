import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import "./AboutUsHome.scss";

export default function AboutUsHome({ aboutUsHome }) {
  return (
    <section className="container about-us-home-section">
      <div className="row align-items-center image-section col-12">
        <div className="col-lg-7 col-md-6 col-xs-12  text-center image-about-us">
          <img src={aboutUsHome.ImgAboutUsHome} alt="Gambar About Us Home" />
        </div>
        <div
          className="col-lg-5 col-md-6 col-xs-12 description-wrapper"
          style={{ height: "80%" }}
        >
          <div className="card">
            <div className="card-body ">
              <h4 className="card-title text-bold">Tentang Kami</h4>
              <p className="card-text">{aboutUsHome.DescriptionAboutUsSmall}</p>
              <div className="row col-12">
                <div className="image col-4">
                  <img
                    src={aboutUsHome.ImgAboutUsHomeSmall1}
                    alt="Gambar Sesuai Target"
                  />
                </div>
                <div className="image col-4">
                  <img
                    src={aboutUsHome.ImgAboutUsHomeSmall2}
                    className="ps-2"
                    alt="Gambar Tepat Waktu"
                  />
                </div>
                <div className="image col-4">
                  <img
                    src={aboutUsHome.ImgAboutUsHomeSmall3}
                    alt="Gambar Harga Terjangkau"
                  />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <Button
                className="card-link learn-more-button"
                type="link"
                href="/about-us"
                isPrimary
              >
                Pelajari
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
