import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";

import "../../../assets/style.scss";
import { Component } from "react";
import React from "react";
import Sidebar from "@/Elements/Sidebar/Sidebar";
import ContactUs from "@/Pages/Parts/Dashboard/ContactUsDashboard/ContactUsDashboard";

export default class DashboardContactUs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.title = "CV Cipta Maju Jaya | Dashboard Contact Us";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Sidebar {...this.props} />
        <div className="container pt-4">
          <ContactUs {...this.props} />
        </div>
      </>
    );
  }
}
