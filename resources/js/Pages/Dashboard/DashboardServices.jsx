import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";

import "../../../assets/style.scss";
import { Component } from "react";
import React from "react";
import Sidebar from "@/Elements/Sidebar/Sidebar";
import ServicesDashboardList from "@/Pages/Parts/Dashboard/ServicesDashboard/ServicesDashboardList";
import ServiceDashboardForm from "@/Pages/Parts/Dashboard/ServicesDashboard/ServicesDashboardForm";

export default class DashboardServices extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    window.title = "CV Cipta Maju Jaya | Dashboard Services";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Sidebar {...this.props} />
        <div className="container">
          {this.props.pathName === "/dashboard-service-list" ? (
            <ServicesDashboardList services={this.props.services} />
          ) : (
            <ServiceDashboardForm {...this.props} />
          )}
        </div>
        ;
      </>
    );
  }
}
