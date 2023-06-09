import React from "react";
import Button from "@/Elements/Button/Button";

export default function ServicesDashboardList({ services }) {
  return (
    <section className="container service-dashboard-list">
      <div className="row justify-content-end">
        <Button className="" type="link" href={route("")}>
          Tambah Layanan
        </Button>
      </div>
      <div className="row col-12">
        <div className="col-3 card"></div>
      </div>
    </section>
  );
}
