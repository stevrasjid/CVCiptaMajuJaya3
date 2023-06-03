import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";

import "../../../assets/style.scss";
import { Component } from "react";
import React from "react";
import Sidebar from "@/Elements/Sidebar/Sidebar";
import Homepage from "@/Pages/Parts/Dashboard/Homepage/HomepageDashboard";

export default class DashboardHomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.title = "CV Cipta Maju Jaya | Dashboard Homepage";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Sidebar {...this.props} />
        <div className="container">
          <Homepage {...this.props} />
        </div>
      </>
    );
  }
}
