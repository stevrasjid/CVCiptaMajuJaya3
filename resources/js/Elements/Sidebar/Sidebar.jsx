import Button from "@/Elements/Button/Button";
import "./Sidebar.scss";
import Swal from "sweetalert2";
import { router } from "@inertiajs/react";

const Sidebar = (props) => {
  const getNavLinkClass = (path) => {
    return props.pathName === path ? " active" : "";
  };

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
      <Button type="link" href={route("home")} className="nav-link">
        <p>Tampilan Utama</p>
      </Button>
      <Button type="link" onClick={(e) => logOut(e)} className="nav-link">
        <p>Log Out</p>
      </Button>
    </div>
  );
};

export default Sidebar;
