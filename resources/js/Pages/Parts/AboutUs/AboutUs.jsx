import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import "./AboutUs.scss";

export default function AboutUs({ aboutUs }) {
  return (
    <section className="container about-us-section">
      <div className="row about-us">
        <div className="col-6 text-center">
          <img src={aboutUs.ImgAboutUs} alt="Gambar About Us" />
        </div>
        <div className="col-6 justify-content-center description">
          <div className="card ps-5">
            <div className="card-body">
              <h4 className="card-title text-bold">Tentang Kami</h4>
              <p className="card-text">{aboutUs.DescriptionAboutUsFull}</p>
            </div>
            <div className="card-footer d-flex d-inline">
              <Button className="button-home" isPrimary type="button">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="row commitment-excellent pt-5">
        <div className="col-6 justify-content-center description">
          <div className="card ps-5">
            <div className="card-body">
              <h4 className="card-title text-bold">Komitmen & Keunggulan</h4>
              <p className="card-text">{aboutUs.Commitment}</p>
            </div>
          </div>
        </div>
        <div className="col-6 text-center">
          <img
            src={aboutUs.ImgCommitment}
            alt="Gambar Komitmen dan Keunggulan"
          />
        </div>
      </div>
      <div className="row vision-mission pt-5">
        <div className="col-6 text-center">
          <div className="d-flex flex-column justify-content-center title">
            <h1 className="text-bold vision">Visi</h1>
            <h1 className="text-bold">Misi</h1>
          </div>
        </div>
        <div className="col-6 justify-content-center description">
          <div className="card ps-5">
            <div className="card-body">
              <p className="card-text">
                Visi : {aboutUs.Vision} <br />
                <br />
                Misi : {aboutUs.Mission}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
