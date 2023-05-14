import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { Component } from "react";
import React from "react";
import Navbar from "@/Elements/Navbar/Navbar";
import Footer from "@/Elements/Footer/Footer";
import AboutUs from "@/Parts/AboutUs/AboutUs";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "CV Cipta Maju jaya | Home ";
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <>
        <Navbar {...this.props} />
        <AboutUs refMostPicked={this.refMostPicked} {...this.props} />
        <Footer />
      </>
    );
  }
}
