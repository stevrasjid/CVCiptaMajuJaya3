import React, { Component } from "react";
import "./TestimonyDashboard.scss";
import Button from "@/Elements/Button/Button";
import Swal from "sweetalert2";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputText from "@/Elements/InputText/InputText";
import Pagination from "@/Elements/Pagination/Pagination";
import { router } from "@inertiajs/react";

export default class TestimonyDashboardList extends Component {
  constructor(props) {
    super(props);
    this.deleteTestimony = this.deleteTestimony.bind(this);
    this.changeSearchText = this.changeSearchText.bind(this);
    this.changePageSize = this.changePageSize.bind(this);
    this.changePageNumber = this.changePageNumber.bind(this);

    this.state = {
      pageSize: this.props.pageSize,
      searchText: !(
        this.props.searchText === null || this.props.searchText === ""
      )
        ? this.props.searchText
        : null,
      pageNumber: parseInt(this.props.pageNumber),
      totalCount: this.props.totalCount,
    };

    this.optionSize = [
      { value: 5, name: "5" },
      { value: 10, name: "10" },
      { value: 20, name: "20" },
      { value: 50, name: "50" },
    ];
  }

  deleteTestimony = (e, TestimonyId, ClientName) => {
    Swal.fire({
      title: "Menghapus Layanan",
      text: "Apakah anda yakin menghapus Testimoni " + ClientName,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        router.delete(route("deleteTestimony", TestimonyId), {
          onSuccess: () => {
            Swal.fire("Sukses", "Sukses Menghapus Layanan", "success");
            router.visit(route("dashboardTestimonyList"));
          },
          onError: (response) => {
            Swal.fire("Gagal", response.message, "error");
          },
        });
      }
    });
  };

  changeSearchText = (e) => {
    this.setState({
      ...this.state,
      searchText: e.target.value,
    });
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      router.visit(
        route("dashboardTestimonyList", {
          pageSize: this.state.pageSize,
          searchText: e.target.value,
          pageNumber: this.state.pageNumber,
        })
      );
    }, 1000);
  };

  changePageSize = (e, value) => {
    this.setState({
      ...this.state,
      pageSize: value,
    });
    const pageSize = value;
    const searchText = this.state.searchText;
    const pageNumber = this.state.pageNumber;
    router.visit(
      route("dashboardTestimonyList", {
        pageSize: pageSize,
        searchText: searchText,
        pageNumber: pageNumber,
      })
    );
  };

  changePageNumber = (e, index) => {
    var number = parseInt(index);
    this.setState({
      ...this.state,
      pageNumber: number,
    });
    const pageNumber = number;
    router.visit(
      route("dashboardTestimonyList", {
        pageSize: this.state.pageSize,
        searchText: this.state.searchText,
        pageNumber: pageNumber,
      })
    );
  };

  render() {
    const { testimonies } = this.props;
    const { pageNumber, pageSize, totalCount, searchText } = this.state;
    const optionSize = this.optionSize;
    return (
      <section className="container testimony-dashboard-list">
        <div className="row pt-4">
          <h3 className="d-flex col">List Testimony</h3>
          <div className="col d-flex justify-content-end ">
            <Button
              type="link"
              href={route("newTestimonyForm")}
              isPrimary
              isYellow
              isCreateNew
            >
              Tambah Testimony
            </Button>
          </div>
        </div>

        <div className="row mt-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <td className="page-size-style">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={pageSize}
                    className="dropdown-custom"
                  >
                    {optionSize.map((data, index) => (
                      <Dropdown.Item
                        onClick={(e) => this.changePageSize(e, data.value)}
                        key={index}
                      >
                        {data.name}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </td>
                <td colSpan={3} className="search-text-style">
                  <InputText
                    isSearchText={true}
                    value={searchText}
                    name="searchText"
                    type="text"
                    onChange={this.changeSearchText}
                    placeholder="Search here..."
                  />
                </td>
              </tr>
              <tr className="text-bold header">
                <th className="header-width">Gambar</th>
                <th className="header-width">TestimonyCode</th>
                <th className="header-width">Nama Client</th>
                <th className="header-width-description">Deskripsi</th>
                <th className="header-width">Action</th>
              </tr>
            </thead>
            <tbody>
              {testimonies.map((data, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td className="img-wrapper align-middle">
                        <img
                          src={data.ImgClient}
                          className="card-img-top"
                          alt="Gambar Klien"
                        />
                      </td>
                      <td className="testimony-input align-middle">
                        {data.TestimonyCode}
                      </td>
                      <td className="testimony-input align-middle">
                        {data.ClientName}
                      </td>
                      <td className="testimony-input align-middle">
                        {data.TestimonialDescription}
                      </td>
                      <td className="align-middle">
                        <Button
                          type="link"
                          className="btn btn-primary"
                          href={route(
                            "getDashboardTestimony",
                            data.TestimonyId
                          )}
                        >
                          Edit
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-danger ms-2"
                          onClick={(e) =>
                            this.deleteTestimony(e, data.TestimonyId)
                          }
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
          <div className="row justify-content-center">
            <Pagination
              totalCount={totalCount}
              pageNumber={pageNumber}
              onClick={(e, index) => this.changePageNumber(e, index)}
            />
          </div>
        </div>
      </section>
    );
  }
}
