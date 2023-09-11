import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";

import "../../../assets/style.scss";
import { Component } from "react";
import React from "react";
import Sidebar from "@/Elements/Sidebar/Sidebar";
import AboutUs from "@/Pages/Parts/Dashboard/AboutUsDashboard/AboutUsDashboard";
import HomepageDashboard from "../Parts/Dashboard/Homepage/HomepageDashboard";
import ContactUsDashboard from "../Parts/Dashboard/ContactUsDashboard/ContactUsDashboard";
import ProjectsDashboardForm from "../Parts/Dashboard/ProjectsDashboard/ProjectsDashboardForm";
import ProjectsDashboardList from "../Parts/Dashboard/ProjectsDashboard/ProjectsDashboardList";
import ServicesDashboardForm from "../Parts/Dashboard/ServicesDashboard/ServicesDashboardForm";
import ServicesDashboardList from "../Parts/Dashboard/ServicesDashboard/ServicesDashboardList";

export default class DashboardAboutUs extends Component {
  constructor(props) {
    super(props);
    this.renderSwitch = this.renderSwitch.bind(this);
  }

  componentDidMount() {
    window.title = "CV Cipta Maju jaya | Dashboard About Us ";
    window.scrollTo(0, 0);
  }

  renderSwitch(pathName) {
    switch (pathName) {
      case "/dashboard":
        return <HomepageDashboard home={this.props.home} />;
      case "/dashboard-about-us":
        return <AboutUs aboutUs={this.props.aboutUs} />;
      case "/dashboard-contact-us":
        return <ContactUsDashboard contactUs={this.props.contactUs} />;
      case "/dashboard-project-list":
        return (
          <ProjectsDashboardList
            projects={this.props.projects}
            searchText={this.props.searchText}
            pageNumber={this.props.pageNumber}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
          />
        );
      case "/edit-dashboard-project-form":
      case "/add-new-dashboard-project-form":
        return (
          <ProjectsDashboardForm
            project={this.props.project}
            categories={this.props.categories}
          />
        );
      case "/dashboard-service-list":
        return (
          <ServicesDashboardList
            services={this.props.services}
            searchText={this.props.searchText}
            pageNumber={this.props.pageNumber}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
          />
        );
      case "/edit-dashboard-service":
      case "/add-new-dashboard-service-form":
        return <ServicesDashboardForm service={this.props.service} />;
    }
  }

  render() {
    // console.log(this.props.aboutUs);
    return (
      <>
        <Sidebar {...this.props} />
        <div className="container ps-5 pt-4">
          {this.renderSwitch(this.props.pathName)}
        </div>
      </>
    );
  }
}
