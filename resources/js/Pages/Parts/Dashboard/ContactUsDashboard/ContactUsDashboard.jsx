import { Link, Head } from "@inertiajs/react";
import "./ContactUsDashboard.scss";
import { useState, Component } from "react";
import { Inertia } from "@inertiajs/inertia";

class ContactUsDashboard extends Component {
  constructor(props) {
    super(props);
    var contactUs = this.props.contactUs;
    console.log(contactUs);
    this.state = {
      contactUsId: contactUs.ContactUsId,
      address: contactUs.Address,
      email: contactUs.Email,
      phoneNumber1: contactUs.PhoneNumber1,
      admin1: contactUs.Admin1,
      phoneNumber2: contactUs.PhoneNumber2,
      admin2: contactUs.Admin2,
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
    Inertia.put(route("editContactUs"), data);
  };

  render() {
    return (
      <section className="row col-12">
        <form onSubmit={this.submit} encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Alamat
            </label>
            <input
              type="text"
              name="address"
              className="form-control"
              aria-describedby="address"
              placeholder="Alamat"
              onChange={this.handleInputChange}
              value={this.state.address}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              aria-describedby="address"
              placeholder="Email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Nama Admin 1
            </label>
            <input
              type="text"
              name="admin1"
              className="form-control"
              aria-describedby="admin1"
              placeholder="Admin1"
              onChange={this.handleInputChange}
              value={this.state.admin1}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Nomor Telepon Admin 1
            </label>
            <input
              type="text"
              name="phoneNumber1"
              className="form-control"
              aria-describedby="phoneNumber1"
              placeholder="Nomor Telepon Admin 1"
              onChange={this.handleInputChange}
              value={this.state.phoneNumber1}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="admin2" className="form-label">
              Nama Admin 2
            </label>
            <input
              type="text"
              name="admin2"
              className="form-control"
              aria-describedby="admin2"
              placeholder="Admin2"
              onChange={this.handleInputChange}
              value={this.state.admin2}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Nomor Telepon Admin 2
            </label>
            <input
              type="text"
              name="phoneNumber2"
              className="form-control"
              aria-describedby="phoneNumber2"
              placeholder="Nomor Telepon Admin 2"
              onChange={this.handleInputChange}
              value={this.state.phoneNumber2}
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

export default ContactUsDashboard;
