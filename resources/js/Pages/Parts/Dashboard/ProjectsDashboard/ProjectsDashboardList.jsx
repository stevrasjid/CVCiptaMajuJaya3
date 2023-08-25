import React, { Component } from "react";
import { router } from "@inertiajs/react";
import "./ProjectsDashboard.scss";
import Swal from "sweetalert2";

import Button from "@/Elements/Button/Button";
import Pagination from "@/Elements/Pagination/Pagination";

export default class ProjectsDashboardList extends Component {
  constructor(props) {
    super(props);
    this.deleteProject = this.deleteProject.bind(this);
    this.changePageSize = this.changePageSize.bind(this);
    this.changePageNumber = this.changePageNumber.bind(this);

    this.state = {
      pageSize: this.props.pageSize,
      searchText: this.props.searchText,
      pageNumber: this.props.pageNumber,
      totalCount: this.props.totalCount,
      optionSize: [
        { value: 5, name: "5" },
        { value: 10, name: "10" },
        { value: 20, name: "20" },
        { value: 50, name: "50" },
      ],
    };
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
            router.visit(route("dashboardProjectList"));
          },
        });
      }
    });
  };

  changePageSize = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      ...this.state,
      [name]: value,
    });
    const pageSize = this.state.pageSize;
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

  changePageNumber = (index) => {
    this.setState({
      ...this.state,
      pageNumber: index,
    });
    const pageSize = this.state.pageSize;
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

  render() {
    const { projects } = this.props;
    const { pageNumber, optionSize, pageSize, totalCount } = this.state;
    return (
      <section className="container service-dashboard-list">
        <div className="row pt-4">
          <h3 className="d-flex col">List Project</h3>
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
        <div className="row col-3">
          <select
            value={pageSize}
            onChange={this.changePageSize}
            name="pageNumber"
          >
            {optionSize.map((data, index) => (
              <option value={data.value} key={index}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
        <div className="row mt-4">
          <table className="table table-striped">
            <thead>
              <tr className="text-bold header">
                <th>Gambar</th>
                <th>Kode Proyek</th>
                <th>Nama Proyek</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.data.map((data, i) => {
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
              })}
            </tbody>
          </table>
          <div className="row justify-content-center">
            <Pagination
              totalCount={totalCount}
              pageNumber={pageNumber}
              onChange={this.changePageNumber}
            />
          </div>
        </div>
      </section>
    );
  }
}
