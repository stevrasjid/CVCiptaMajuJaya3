import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import "./AboutUsHome.scss";

export default function AboutUsHome({ aboutUsHome }) {
  return (
    <section className="container about-us-home-section">
      <div className="row align-items-center image-section col-12">
        <div className="col-7 text-center image-about-us">
          <img src={aboutUsHome.ImgAboutUsHome} alt="Gambar About Us Home" />
        </div>
        <div className="col-5 p-0" style={{ height: "80%" }}>
          <div className="card">
            <div className="card-body ">
              <h4 className="card-title text-bold">Tentang Kami</h4>
              <p className="card-text">{aboutUsHome.DescriptionAboutUsSmall}</p>
              <div className="row col-10">
                <div className="image col-4">
                  <img
                    src={aboutUsHome.imgAboutUsHomeSmall1}
                    alt="Gambar Sesuai Target"
                  />
                </div>
                <div className="image col-4">
                  <img
                    src={aboutUsHome.imgAboutUsHomeSmall2}
                    className="ps-2"
                    alt="Gambar Tepat Waktu"
                  />
                </div>
                <div className="image col-4">
                  <img
                    src={aboutUsHome.imgAboutUsHomeSmall3}
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
