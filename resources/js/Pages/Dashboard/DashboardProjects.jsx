import React, { Component } from "react";
import Sidebar from "@/Elements/Sidebar/Sidebar";
import ProjectDashboardList from "@/Pages/Parts/Dashboard/ProjectsDashboard/ProjectsDashboardList";
import ProjectDashboardForm from "@/Pages/Parts/Dashboard/ProjectsDashboard/ProjectsDashboardForm";

import "../../../assets/style.scss";

export default class DashboardProjects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.title = "CV Cipta Maju Jaya | Dashboard Projects";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Sidebar {...this.props} />
        <div className="container pt-4">
          {this.props.pathName === "/dashboard-project-list" ? (
            <ProjectDashboardList
              projects={this.props.projects}
              searchText={this.props.searchText}
              pageNumber={this.props.pageNumber}
              totalCount={this.props.totalCount}
            />
          ) : (
            <ProjectDashboardForm {...this.props} />
          )}
        </div>
      </>
    );
  }
}
