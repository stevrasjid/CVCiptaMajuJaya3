import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import "./HomepageDashboard.scss";
import { useState, Component } from "react";
import { Inertia } from "@inertiajs/inertia";

class HomepageDashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    var homePage = this.props.home;
    this.state = {
      homeId: homePage.HomeId,
      tagLine: homePage.TagLine,
      smallDescription: homePage.SmallDescription,
      yearsExperiences: homePage.YearsExperiences,
      happyCustomers: homePage.HappyCustomers,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  submit = (event) => {
    event.preventDefault();
    const data = this.state;
    Inertia.put(route("editHomepage"), data);
  };

  render() {
    return (
      <section className="row col-12">
        <form onSubmit={this.submit} encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="tagline" className="form-label">
              Tagline
            </label>
            <input
              type="text"
              name="tagLine"
              className="form-control"
              aria-describedby="tagLine"
              placeholder="TagLine"
              onChange={this.handleInputChange}
              value={this.state.tagLine}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Deskripsi Beranda" className="form-label">
              Deskripsi Beranda
            </label>
            <textarea
              name="smallDescription"
              className="form-control"
              aria-describedby="smallDescription"
              placeholder="Deskripsi Beranda"
              onChange={this.handleInputChange}
              value={this.state.smallDescription}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Deskripsi Beranda" className="form-label">
              Tahun Pengalaman
            </label>
            <input
              type="number"
              name="yearsExperiences"
              className="form-control"
              aria-describedby="yearsExperiences"
              placeholder="Tahun Pengalaman"
              onChange={this.handleInputChange}
              value={this.state.yearsExperiences}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Deskripsi Beranda" className="form-label">
              Jumlah Pelanggan Senang
            </label>
            <input
              type="number"
              name="happyCustomers"
              className="form-control"
              aria-describedby="happyCustomers"
              placeholder="Jumlah Pelanggan Senang"
              onChange={this.handleInputChange}
              value={this.state.happyCustomers}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default HomepageDashboard;
