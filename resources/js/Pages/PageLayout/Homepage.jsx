import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";

import "../../../assets/style.scss";
import { Component } from "react";
import React from "react";
import Navbar from "@/Elements/Navbar/Navbar";
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
        <Navbar {...this.props} />
        <Header refMostPicked={this.refMostPicked} home={this.props.home} />
        <main>
          <AboutUsHome
            refMostPicked={this.refMostPicked}
            aboutUsHome={this.props.aboutUsHome}
          />
          <OurServices
            refMostPicked={this.refMostPicked}
            services={this.props.services}
          />
          <OurProjects
            refMostPicked={this.refMostPicked}
            projects={this.props.projects}
          />
          <Testimonials
            refMostPicked={this.refMostPicked}
            testimonies={this.props.testimonies}
          />
          <ContactUs
            refMostPicked={this.refMostPicked}
            contactUs={this.props.contactUs}
          />
        </main>

        <Footer {...this.props} />
      </>
    );
  }
}
