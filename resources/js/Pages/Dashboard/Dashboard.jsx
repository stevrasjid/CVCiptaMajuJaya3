import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";

import "../../../assets/style.scss";
import { Component } from "react";
import React from "react";
import Sidebar from "@/Elements/Sidebar/Sidebar";
import Footer from "@/Elements/Footer/Footer";
import Header from "@/Pages/Parts/HomePage/Header/Header";
import AboutUsHome from "@/Pages/Parts/HomePage/AboutUsHome/AboutUsHome";
import OurServices from "@/Pages/Parts/HomePage/OurServicesHome/OurServicesHome";
import OurProjects from "@/Pages/Parts/HomePage/OurProjectsHome/OurProjectsHome";
import Testimonials from "@/Pages/Parts/HomePage/Testimonials/Testimonial";
import ContactUs from "@/Pages/Parts/HomePage/ContactUs/ContactUs";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "CV Cipta Maju jaya | Home ";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Sidebar {...this.props} />
        <div className="main" style={{ marginLeft: "2%" }}></div>
      </>
    );
  }
}
