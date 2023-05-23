import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import "./Sidebar.scss";
import { useState } from "react";

const Sidebar = (props) => {
  const getNavLinkClass = (path) => {
    return props.pathName === path ? " active" : "";
  };

  return (
    <div className="sidenav">
      <Button
        type="link"
        href={route("dashboard")}
        className={`nav-link${getNavLinkClass("/dashboard")}`}
      >
        Beranda
      </Button>
      <Button
        type="link"
        href={route("dashboardAboutUs")}
        className={`nav-link${getNavLinkClass("/dashboardAboutUs")}`}
      >
        Tentang Kami
      </Button>
      <Button
        type="link"
        href=""
        className={`nav-link${getNavLinkClass("/dashboard")}`}
      >
        Layanan
      </Button>
      <Button
        type="link"
        href=""
        className={`nav-link${getNavLinkClass("/dashboard")}`}
      >
        Proyek
      </Button>
      <Button
        type="link"
        href=""
        className={`nav-link${getNavLinkClass("/dashboard")}`}
      >
        Hubungi Kami
      </Button>
    </div>
  );
};

export default Sidebar;
