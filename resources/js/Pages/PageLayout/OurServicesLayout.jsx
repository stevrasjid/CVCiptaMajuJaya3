import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import "../../../assets/style.scss";

import { Component } from "react";
import React from "react";
import Navbar from "@/Elements/Navbar/Navbar";
import Footer from "@/Elements/Footer/Footer";
import Services from "@/Pages/Parts/OurServices/OurServices";

export default class OurServicesLayout extends Component {
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
        <Services
          refMostPicked={this.refMostPicked}
          services={this.props.services}
          contactUs={this.props.contactUs}
        />
        <Footer {...this.props} />
      </>
    );
  }
}
