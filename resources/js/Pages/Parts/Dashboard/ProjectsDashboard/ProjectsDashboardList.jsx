import React, { Component } from "react";
import Button from "@/Elements/Button/Button";
import axios from "axios";

export default class ProjectsDashboardList extends Component {
  constructor(props) {
    super(props);
    this.deleteProject = this.deleteProject.bind(this);
  }

  deleteProject = (e, ProjectId) => {
    axios.delete(route("deleteProject", ProjectId));
  };

  render() {
    const { projects } = this.props;
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
              {projects.map((data, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td className="img-wrapper align-middle">
                        <img
                          src={data.img_projects[0].ImgProject}
                          className="card-img-top"
                          alt="Gambar Project"
                        />
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
                          onClick={(e) => this.deleteProject(e, data.ProjectId)}
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
