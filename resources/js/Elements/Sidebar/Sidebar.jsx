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
        className={`nav-link${getNavLinkClass("/dashboard-about-us")}`}
      >
        Tentang Kami
      </Button>
      <Button
        type="link"
        href={route("dashboardServiceList")}
        className={`nav-link${getNavLinkClass("/dashboard-service-list")}`}
      >
        Layanan
      </Button>
      <Button
        type="link"
        href={route("dashboardProjectList")}
        className={`nav-link${getNavLinkClass("/dashboardProjects")}`}
      >
        Proyek
      </Button>
      <Button
        type="link"
        href={route("dashboardContactUs")}
        className={`nav-link${getNavLinkClass("/dashboardContactUs")}`}
      >
        Hubungi Kami
      </Button>
    </div>
  );
};

export default Sidebar;
