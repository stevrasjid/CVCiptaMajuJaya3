import React, { Component } from "react";
import { router } from "@inertiajs/react";
import InputText from "@/Elements/InputText/InputText";
import InputFile from "@/Elements/InputFile/InputFile";
import Swal from "sweetalert2";
import "./ServicesDasboard.scss";

export default class ServicesDashboardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceId: "",
      ServiceCode: "",
      ServiceTitle: "",
      ServiceDescription: "",
      ImgService: "",
      PreviewImgService: "",
    };
  }

  componentDidMount() {
    if (this.props.service) {
      const service = this.props.service;
      this.setState({
        ServiceId: service.ServiceId,
        ServiceCode: service.ServiceCode,
        ServiceTitle: service.ServiceTitle,
        ServiceDescription: service.ServiceDescription,
        PreviewImgService: service.ImgService,
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
    if (data.ServiceId) {
      router.post(route("editService"), data, {
        forceFormData: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onSuccess: () => {
          Swal.fire("Sukses", "Sukses Mengubah Layanan", "success");
          router.visit(route("dashboardServiceList"));
        },
        onError: (response) => {
          Swal.fire("Gagal", response.message, "error");
        },
      });
    } else {
      router.post(route("addNewService"), data, {
        forceFormData: true,
        onSuccess: () => {
          Swal.fire("Sukses", "Sukses Menambah Layanan", "success");
          router.visit(route("dashboardServiceList"));
        },
        onError: (response) => {
          Swal.fire("Gagal", response.message, "error");
        },
      });
    }
  };

  render() {
    const {
      ServiceId,
      ServiceCode,
      ServiceTitle,
      ServiceDescription,
      ImgService,
      PreviewImgService,
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
              name="ServiceCode"
              placeholder="Kode Layanan"
              onChange={this.handleInputChange}
              value={ServiceCode}
              disabled={ServiceId ? true : false}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Nama Layanan" className="form-label">
              Nama Layanan
            </label>
            <InputText
              type="text"
              name="ServiceTitle"
              placeholder="Nama Layanan"
              onChange={this.handleInputChange}
              value={ServiceTitle}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Deskripsi Layanan" className="form-label">
              Deskripsi Layanan
            </label>
            <InputText
              type="text"
              name="ServiceDescription"
              placeholder="Deskripsi Layanan"
              onChange={this.handleInputChange}
              value={ServiceDescription}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Gambar Layanan" className="form-label">
              Gambar Layanan
            </label>
            <InputFile
              accept="image/*"
              name="ImgService"
              onChange={this.handleInputChange}
              value={ImgService}
              previewImage={PreviewImgService}
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
