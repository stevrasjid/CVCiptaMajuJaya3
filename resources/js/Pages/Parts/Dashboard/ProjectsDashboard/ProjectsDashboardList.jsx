import React, { Component } from "react";
import { router } from "@inertiajs/react";
import "./ProjectsDashboard.scss";
import Swal from "sweetalert2";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputText from "@/Elements/InputText/InputText";

import Button from "@/Elements/Button/Button";
import Pagination from "@/Elements/Pagination/Pagination";

export default class ProjectsDashboardList extends Component {
  constructor(props) {
    super(props);
    this.deleteProject = this.deleteProject.bind(this);
    this.changePageSize = this.changePageSize.bind(this);
    this.changePageNumber = this.changePageNumber.bind(this);
    this.changeSearchText = this.changeSearchText.bind(this);

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

    this.timeout = 0;
  }

  deleteProject = (e, ProjectId, ProjectCode) => {
    Swal.fire({
      title: "Menghapus Project",
      text: "Apakah anda yakin menghapus Project " + ProjectCode,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        router.delete(route("deleteProject", ProjectId), {
          onSuccess: () => {
            Swal.fire("Sukses", "Sukses Menghapus Project", "success");
            router.visit(
              route("dashboardProjectList", {
                pageSize: this.state.pageSize,
                searchText: this.state.searchText,
                pageNumber: this.state.pageNumber,
              })
            );
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
        route("dashboardProjectList", {
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
      route("dashboardProjectList", {
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
      route("dashboardProjectList", {
        pageSize: this.state.pageSize,
        searchText: this.state.searchText,
        pageNumber: pageNumber,
      })
    );
  };

  render() {
    const { projects } = this.props;
    const { pageNumber, pageSize, totalCount, searchText } = this.state;
    const optionSize = this.optionSize;
    return (
      <section className="container service-dashboard-list">
        <div className="row pt-4">
          <h3 className="d-flex col ps-0">List Project</h3>
          <div className="col d-flex justify-content-end ">
            <Button
              type="link"
              href={route("newProjectForm")}
              isPrimary
              isYellow
              isCreateNew
            >
              Tambah Project
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
                <th>Gambar</th>
                <th>Kode Proyek</th>
                <th>Nama Proyek</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 ? (
                projects.map((data, i) => {
                  return (
                    <>
                      <tr key={i}>
                        <td className="img-wrapper align-middle">
                          {data.img_projects.length > 0 ? (
                            <img
                              src={data.img_projects[0].ImgProject}
                              className="card-img-top"
                              alt="Gambar Project"
                            />
                          ) : (
                            <img
                              src=""
                              className="card-img-top"
                              alt="Gambar Project"
                            />
                          )}
                        </td>
                        <td className="project-input align-middle">
                          {data.ProjectCode}
                        </td>
                        <td className="project-input align-middle">
                          {data.ProjectName}
                        </td>
                        <td className="align-middle">
                          <Button
                            type="link"
                            className="btn btn-primary"
                            href={route("getDashboardProject", data.ProjectId)}
                          >
                            Edit
                          </Button>
                          <Button
                            type="button"
                            className="btn btn-danger ms-2"
                            onClick={(e) =>
                              this.deleteProject(
                                e,
                                data.ProjectId,
                                data.ProjectCode
                              )
                            }
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4} className="no-found text-center">
                    <h5 className="m-0 text-bold">
                      ----- Data tidak ditemukan -----
                    </h5>
                  </td>
                </tr>
              )}
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
