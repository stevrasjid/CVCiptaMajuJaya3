import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";

import "../../../assets/style.scss";
import { Component } from "react";
import React from "react";
import Sidebar from "@/Elements/Sidebar/Sidebar";
import AboutUs from "@/Pages/Parts/Dashboard/AboutUsDashboard/AboutUsDashboard";

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
    // console.log(this.props.aboutUs);
    return (
      <>
        <Sidebar {...this.props} />
       <div className="container">
            <AboutUs {...this.props}/>
       </div>
      </>
    );
  }
}
