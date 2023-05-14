import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Button from "@/Elements/Button/Button";
import ButtonSlides from "@/Elements/ButtonSlides/ButtonSlides";
import "./AboutUs.scss";

export default function AboutUs(props) {
  return (
    <section className="container about-us-section">
      <div className="row about-us">
        <div className="col-6 text-center">
          <img src="/images/logoAboutUs.png" alt="Gambar About Us" />
        </div>
        <div className="col-6 justify-content-center description">
          <div className="card ps-5">
            <div className="card-body">
              <h4 className="card-title text-bold">Tentang Kami</h4>
              <p className="card-text">
                <span className="text-bold">CV. Cipta Maju Jaya</span> berdiri
                sejak 2009. Bergerak dalam bidang pembuatan baru, renovasi, dan
                jasa desain interior. Proyek yang pernah kami tangani meliputi
                Pembangunan Karaoke Keluarga & KTV, Restoran, Lounge, Club, dan
                Rumah Tinggal. Kami mengerjakan proyek renovasi dan pembangunan
                baru dengan harga yang terjangkau dan kredibilitas yang tinggi
              </p>
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
              <p className="card-text">
                Selalu berusaha memberikan yang terbaik kepada seluruh konsumen
                baik dalam ketepatan waktu dengan target yang telah ditetapkan
                dengan memberikan hasil dan kualitas yang terbaik juga akan
                terus mengikuti perkembangan zaman agar dapat memberikan ide
                yang unik serta konsep yang baru kepada konsumen.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 text-center">
          <img
            src="/images/komitmenDanKeunggulanAboutUs.png"
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
                Visi : Menjadi perusahaan kontraktor, jasa design, dan interior
                yang unggul dan terpercaya dalam membantu dan mewujudkan
                keinginan serta kepuasan konsumen. <br />
                <br />
                Misi : Selalu menjadi yang pertama dan terdepan untuk membantu
                konsumen serta memberikan ide unik dan konsep yang baru serta
                menyelesaikan pekerjaan dengan cepat dan ketepatan waktu tanpa
                mengurangi hasil dan kualitas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
