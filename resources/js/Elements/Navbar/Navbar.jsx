import { Link, Head } from "@inertiajs/react";
import BrandIcon from "../BrandIcon/BrandIcon";
import Button from "@/Elements/Button/Button";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = (props) => {
  const getNavLinkClass = (path) => {
    return props.pathName === path ? " active" : "";
  };

  const [header, setHeader] = useState(false);
  const [isBlackValue, setIsBlack] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setHeader(true);
      setIsBlack(true);
    } else {
      setHeader(false);
      setIsBlack(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      className={`spacing-sm${
        header || props.pathName !== "/" ? " header-scroll" : ""
      }`}
    >
      <div className="container">
        <nav className={`navbar navbar-expand-lg navbar-light`}>
          <BrandIcon isBlack={props.pathName === "/" ? isBlackValue : true} />
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href={route("home")}>
                  Beranda
                </Button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className={`nav-item${getNavLinkClass("/aboutUs")}`}>
                <Button
                  className="nav-link"
                  type="link"
                  href={route("aboutUs")}
                >
                  Tentang Kami
                </Button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className={`nav-item${getNavLinkClass("/services")}`}>
                <Button
                  className="nav-link"
                  type="link"
                  href={route("services")}
                >
                  Layanan
                </Button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className={`nav-item${getNavLinkClass("/projects")}`}>
                <Button
                  className="nav-link"
                  type="link"
                  href={route("projects")}
                >
                  Proyek
                </Button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className={`nav-item${getNavLinkClass("/contactUs")}`}>
                <Button className="nav-link" type="link" href={"/#contactUs"}>
                  Hubungi Kami
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
