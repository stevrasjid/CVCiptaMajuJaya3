import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import "../../../assets/style.scss";

import { Component } from "react";
import React from "react";
import Navbar from "@/Elements/Navbar/Navbar";
import Footer from "@/Elements/Footer/Footer";
import OurProjects from "@/Pages/Parts/OurProjects/OurProjects";

export default class OurProjectLayout extends Component {
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
        <OurProjects
          refMostPicked={this.refMostPicked}
          ourProjects={this.props.projects}
          categories={this.props.categories}
          category={this.props.category}
          totalCount={this.props.totalCount}
          pageNumber={this.props.pageNumber}
        />
        <Footer {...this.props} />
      </>
    );
  }
}
