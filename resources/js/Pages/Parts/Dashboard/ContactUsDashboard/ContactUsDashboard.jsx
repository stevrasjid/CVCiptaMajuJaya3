import { Link, Head } from "@inertiajs/react";
import "./ContactUsDashboard.scss";
import { Component } from "react";
import { router } from "@inertiajs/react";
import InputText from "@/Elements/InputText/InputText";
import Swal from "sweetalert2";

class ContactUsDashboard extends Component {
  constructor(props) {
    super(props);
    var contactUs = this.props.contactUs;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      contactUsId: contactUs.ContactUsId,
      address: contactUs.Address,
      email: contactUs.Email,
      phoneNumber1: contactUs.PhoneNumber1,
      admin1: contactUs.Admin1,
      phoneNumber2: contactUs.PhoneNumber2,
      admin2: contactUs.Admin2,
      isLoading: false,
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
    this.setState({
      ...this.state,
      isLoading: true,
    });
    const data = this.state;
    router.put(route("editContactUs"), data, {
      onSuccess: () => {
        Swal.fire("Sukses", "Berhasil Di Edit", "Success");
        router.visit(route("dashboardContactUs"));
      },
      onError: (response) => {
        Swal.fire("Error", response.message, "error");
        this.setState({
          ...this.state,
          isLoading: false,
        });
      },
    });
  };

  render() {
    const { address, email, phoneNumber1, admin1, phoneNumber2, admin2 } =
      this.state;
    return (
      <section className="row col-12">
        <h3 className="pb-3">Hubungi Kami</h3>
        <form onSubmit={this.submit} encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Alamat
            </label>
            <InputText
              type="text"
              name="address"
              placeholder="Alamat"
              onChange={this.handleInputChange}
              value={address}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <InputText
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleInputChange}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="adminName1" className="form-label">
              Nama Admin 1
            </label>
            <InputText
              type="text"
              name="admin1"
              placeholder="Nama Admin 1"
              onChange={this.handleInputChange}
              value={admin1}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber1" className="form-label">
              Nomor Telepon Admin 1
            </label>
            <InputText
              type="text"
              name="phoneNumber1"
              placeholder="No Telp Admin 1"
              onChange={this.handleInputChange}
              value={phoneNumber1}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="admin2" className="form-label">
              Nama Admin 2
            </label>
            <InputText
              type="text"
              name="admin2"
              placeholder="No Telp Admin 2"
              onChange={this.handleInputChange}
              value={admin2}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber2" className="form-label">
              Nomor Telepon Admin 2
            </label>
            <InputText
              type="text"
              name="phoneNumber2"
              placeholder="No Telp Admin 2"
              onChange={this.handleInputChange}
              value={phoneNumber2}
            />
          </div>
          <button
            type="submit"
            onClick={this.submit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default ContactUsDashboard;
