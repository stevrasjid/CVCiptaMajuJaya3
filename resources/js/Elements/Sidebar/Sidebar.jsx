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
        <p>Beranda</p>
      </Button>
      <Button
        type="link"
        href={route("dashboardAboutUs")}
        className={`nav-link${getNavLinkClass("/dashboard-about-us")}`}
      >
        <p>Tentang Kami</p>
      </Button>
      <Button
        type="link"
        href={route("dashboardServiceList")}
        className={`nav-link${getNavLinkClass("/dashboard-service-list")}`}
      >
        <p>Layanan</p>
      </Button>
      <Button
        type="link"
        href={route("dashboardProjectList")}
        className={`nav-link${getNavLinkClass("/dashboard-project-list")}`}
      >
        <p>Proyek</p>
      </Button>
      <Button
        type="link"
        href={route("dashboardContactUs")}
        className={`nav-link${getNavLinkClass("/dashboard-contact-us")}`}
      >
        <p>Hubungi Kami</p>
      </Button>
    </div>
  );
};

export default Sidebar;
