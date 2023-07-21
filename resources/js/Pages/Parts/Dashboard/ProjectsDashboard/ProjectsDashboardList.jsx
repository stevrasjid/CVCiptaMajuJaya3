import React, { Component } from "react";
import Button from "@/Elements/Button/Button";
import { Inertia } from "@inertiajs/inertia";

export default class ProjectsDashboardList extends Component {
  constructor(props) {
    super(props);
    this.deleteProject = this.deleteProject.bind(this);
  }

  deleteProject = (e, ProjectId) => {
    Inertia.delete(route("deleteProject", ProjectId));
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
        <div className="row col-12 mt-4">
          {projects.map((data, i) => {
            return (
              <div className="col-3 mt-3" key={i}>
                <div className="card">
                  <img
                    src={data}
                    className="card-img-top"
                    alt="Gambar Project"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.ProjectTitle}</h5>
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
                      onClick={(e) => this.deleteService(e, data.ProjectId)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
