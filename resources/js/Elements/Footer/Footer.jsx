import { Link, Head } from "@inertiajs/react";
import BrandIcon from "../BrandIcon/BrandIcon";
import Button from "@/Elements/Button/Button";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row col-12 justify-content-center footer-content">
          <div className="col-3">
            <div className="brand-icon">
              <BrandIcon isBlack />
            </div>
            <div className="address">
              Jl. Kh Noer Ali, Komplek Grand Kota Bintang Blok B 12-15 Lt. 8,
              Jatisampurna - Bekasi Kota (Ruko Zentrum KTV Lounge)
            </div>
            <div className="email">email@email.com</div>
            <div className="row" style={{ paddingTop: 10 }}>
              <div className="col pe-0">
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
              <div className="col ps-0">
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
          <div className="col-2"></div>
          <div className="col-2 navigation">
            <ul className="list-group">
              <li className="list-group-item text-bold">Navigasi</li>
              <li className="list-group-item">
                <Button type="link" href={route("home")}>
                  Beranda
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href={route("aboutUs")}>
                  Tentang Kami
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href={route("services")}>
                  Layanan
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href={route("projects")}>
                  Proyek
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href={"/#contactUs"} smooth="true">
                  Hubungi Kami
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2"></div>
          <div className="col-3 services">
            <ul className="list-group">
              <li className="list-group-item text-bold">Layanan Kami</li>
              <li className="list-group-item">
                <Button type="link" href="">
                  Kontraktor Umum
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="">
                  Mekanik dan Kelistrikan
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="">
                  Dinding, Plafon, dan Pengecatan
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="">
                  Lantai dan Pemasangan Vinyl
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="">
                  Arsitek
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center copyright">
          Copyright 2023 | @panus
        </div>
      </div>
    </footer>
  );
};

export default Footer;
