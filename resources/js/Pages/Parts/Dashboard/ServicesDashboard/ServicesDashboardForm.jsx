import React, { Component } from "react";
import { Inertia } from "@inertiajs/inertia";
import InputText from "@/Elements/InputText/InputText";
import InputFile from "@/Elements/InputFile/InputFile";

export default class ServicesDashboardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceId: "",
      serviceCode: "",
      serviceTitle: "",
      serviceDescription: "",
      imgService: "",
      previewImgService: "",
    };
  }

  componentDidMount() {
    if (this.props.service) {
      const service = this.props.service;
      this.setState({
        serviceId: service.ServiceId,
        serviceCode: service.ServiceCode,
        serviceTitle: service.ServiceTitle,
        serviceDescription: service.ServiceDescription,
        previewImgService: service.ImgService,
      });
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.files ? target.files[0] : target.value;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  submit = (event) => {
    event.preventDefault();
    const data = this.state;
    Inertia.post(route("addNewServices"), data, {
      forceFormData: true,
    });
  };

  render() {
    const {
      serviceCode,
      serviceTitle,
      serviceDescription,
      imgService,
      previewImgService,
    } = this.state;
    return (
      <section className="row col-12">
        <form encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="Kode Layanan" className="form-label">
              Kode Layanan
            </label>
            <InputText
              type="text"
              name="serviceCode"
              placeholder="Kode Layanan"
              onChange={this.handleInputChange}
              value={serviceCode}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Nama Layanan" className="form-label">
              Nama Layanan
            </label>
            <InputText
              type="text"
              name="serviceTitle"
              placeholder="Nama Layanan"
              onChange={this.handleInputChange}
              value={serviceTitle}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Deskripsi Layanan" className="form-label">
              Deskripsi Layanan
            </label>
            <InputText
              type="text"
              name="serviceDescription"
              placeholder="Deskripsi Layanan"
              onChange={this.handleInputChange}
              value={serviceDescription}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Gambar Layanan" className="form-label">
              Gambar Layanan
            </label>
            <InputFile
              accept="image/*"
              name="imgService"
              onChange={this.handleInputChange}
              value={imgService}
              previewImage={
                !previewImgService ? "" : `images/services/${previewImgService}`
              }
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
