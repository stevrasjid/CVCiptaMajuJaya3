import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import "./Sidebar.scss";
import { useState } from "react";

const Sidebar = (props) => {
  return (
    <div className="sidenav">
      <Button type="link" href="" className="nav-link">
        Beranda
      </Button>
      <Button type="link" href="" className="nav-link">
        Tentang Kami
      </Button>
      <Button type="link" href="" className="nav-link">
        Layanan
      </Button>
      <Button type="link" href="" className="nav-link">
        Proyek
      </Button>
      <Button type="link" href="" className="nav-link">
        Hubungi Kami
      </Button>
    </div>
  );
};

export default SideBar;
