import React, { Component } from "react";
import Button from "@/Elements/Button/Button";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";
import "./ServicesDasboard.scss";

export default class ServicesDashboardList extends Component {
  constructor(props) {
    super(props);
    this.deleteService = this.deleteService.bind(this);
  }

  deleteService = (e, ServiceId, ServiceCode) => {
    Swal.fire({
      title: "Menghapus Layanan",
      text: "Apakah anda yakin menghapus Layanan " + ServiceCode,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        router.delete(route("deleteService", ServiceId), {
          onSuccess: () => {
            Swal.fire("Sukses", "Sukses Menghapus Layanan", "success");
            router.visit(route("dashboardServiceList"));
          },
          onError: (response) => {
            Swal.fire("Gagal", response.message, "error");
          },
        });
      }
    });
  };

  render() {
    const { services } = this.props;
    return (
      <section className="container service-dashboard-list">
        <div className="row pt-4">
          <h3 className="d-flex col">List Layanan</h3>
          <div className="col d-flex justify-content-end ">
            <Button
              type="link"
              href={route("newServiceForm")}
              isPrimary
              isYellow
              isCreateNew
            >
              Tambah Layanan
            </Button>
          </div>
        </div>

        <div className="row mt-4">
          <table className="table table-striped">
            <thead>
              <tr className="text-bold header">
                <th>Gambar</th>
                <th>Kode Layanan</th>
                <th>Nama Layanan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((data, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td className="img-wrapper align-middle">
                        <img
                          src={data.ImgService}
                          className="card-img-top"
                          alt="Gambar Service"
                        />
                      </td>
                      <td className="service-input align-middle">
                        {data.ServiceCode}
                      </td>
                      <td className="service-input align-middle">
                        {data.ServiceTitle}
                      </td>
                      <td className="align-middle">
                        <Button
                          type="link"
                          className="btn btn-primary"
                          href={route("getDashboardService", data.ServiceId)}
                        >
                          Edit
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-danger ms-2"
                          onClick={(e) => this.deleteService(e, data.ServiceId)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
