import { Link, Head } from "@inertiajs/react";
import BrandIcon from "../BrandIcon/BrandIcon";
import Button from "@/Elements/Button/Button";
import "./Navbar.scss";
import { useState } from "react";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";

const Navbar = (props) => {
  const getNavLinkClass = (path) => {
    return props.pathName === path ? " active" : "";
  };

  const [header, setHeader] = useState(false);
  const [isBlackValue, setIsBlack] = useState(false);
  const [isToggle, setToggle] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100 || isToggle) {
      setHeader(true);
      setIsBlack(true);
    } else {
      setHeader(false);
      setIsBlack(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const logOut = (e) => {
    Swal.fire({
      title: "LogOut",
      text: "Apakah anda yakin ingin keluar?",
      icon: "Warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Keluar",
    }).then((result) => {
      if (result.isConfirmed) {
        router.post(route("logout"));
      }
    });
  };

  const toggleMenu = (e) => {
    var toggle = !isToggle;
    setToggle(toggle);
    if (toggle) {
      setIsBlack(true);
    } else {
      setIsBlack(false);
    }
  };

  return (
    <header className="spacing-sm">
      <nav
        className={`navbar navbar-expand-lg ${
          header || props.pathName !== "/" ? "header-scroll" : ""
        } ${isToggle ? "background-white" : ""}`}
      >
        <div className="container">
          <BrandIcon isBlack={props.pathName === "/" ? isBlackValue : true} />
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            onClick={(e) => toggleMenu(e)}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isToggle ? "show" : ""
            }`}
          >
            <ul className="navbar-nav">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Beranda
                </Button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className={`nav-item${getNavLinkClass("/aboutUs")}`}>
                <Button className="nav-link" type="link" href="/about-us">
                  Tentang Kami
                </Button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className={`nav-item${getNavLinkClass("/services")}`}>
                <Button className="nav-link" type="link" href="/services">
                  Layanan
                </Button>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className={`nav-item${getNavLinkClass("/projects")}`}>
                <Button className="nav-link" type="link" href="/projects">
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
            {props.auth.user && (
              <>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Button className="nav-link" type="link" href="/dashboard">
                      Dashboard
                    </Button>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Button
                      className="nav-link"
                      type="link"
                      onClick={(e) => logOut(e)}
                    >
                      Log Out
                    </Button>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
