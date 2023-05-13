import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import "./AboutUsHome.scss";

export default function AboutUsHome(props) {
  return (
    <section className="container about-us-home-section">
      <div className="row align-items-center image-section col-12">
        <div className="col-7 text-center image-about-us">
          <img src="/images/aboutUsHome.png" alt="Gambar About Us Home" />
        </div>
        <div className="col-5 p-0" style={{ height: "80%" }}>
          <div className="card">
            <div className="card-body ">
              <h4 className="card-title text-bold">Tentang Kami</h4>
              <p className="card-text">
                CV Cipta Maju Jaya bergerak dalam bidang pembuatan baru,
                renovasi, dan jasa desain interior. Berdiri sejak 2009 dengan
                komitmen :
              </p>
              <div className="row col-10">
                <div className="image col-4">
                  <img
                    src="/images/sesuaiTarget.png"
                    alt="Gambar Sesuai Target"
                  />
                </div>
                <div className="image col-4">
                  <img
                    src="/images/tepatWaktu.png"
                    className="ps-2"
                    alt="Gambar Tepat Waktu"
                  />
                </div>
                <div className="image col-4">
                  <img
                    src="/images/hargaTerjangkau.png"
                    alt="Gambar Harga Terjangkau"
                  />
                </div>
              </div>
            </div>
            <div className="card-footer">
              <Button
                className="card-link learn-more-button"
                type="link"
                href="/"
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
