import React, { Component } from "react";
import { router } from "@inertiajs/react";
import InputText from "@/Elements/InputText/InputText";
import InputFile from "@/Elements/InputFile/InputFile";
import Swal from "sweetalert2";
import "./TestimonyDashboard.scss";

export default class ServicesDashboardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TestimonyId: "",
      TestimonyCode: "",
      ClientName: "",
      Occupation: "",
      TestimonialDescription: "",
      ImgClient: "",
      PreviewImgClient: "",
    };
  }

  componentDidMount() {
    if (this.props.testimony) {
      const testimony = this.props.testimony;
      this.setState({
        TestimonyId: testimony.TestimonyId,
        TestimonyCode: testimony.TestimonyCode,
        ClientName: testimony.ClientName,
        Occupation: testimony.Occupation,
        TestimonialDescription: testimony.TestimonialDescription,
        PreviewImgClient: testimony.ImgClient,
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
    if (data.TestimonyId) {
      router.post(route("editTestimony"), data, {
        forceFormData: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onSuccess: () => {
          Swal.fire("Sukses", "Sukses Mengubah Testimony", "success");
          router.visit(route("dashboardTestimonyList"));
        },
        onError: (response) => {
          Swal.fire("Gagal", response.message, "error");
        },
      });
    } else {
      router.post(route("addNewTestimony"), data, {
        forceFormData: true,
        onSuccess: () => {
          Swal.fire("Sukses", "Sukses Menambah Testimony", "success");
          router.visit(route("dashboardTestimonyList"));
        },
        onError: (response) => {
          Swal.fire("Gagal", response.message, "error");
        },
      });
    }
  };

  render() {
    const {
      TestimonyId,
      TestimonyCode,
      ClientName,
      Occupation,
      TestimonialDescription,
      ImgClient,
      PreviewImgClient,
    } = this.state;
    return (
      <section className="row col-12">
        <form encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="Kode Testimony" className="form-label">
              Kode Testimoni
            </label>
            <InputText
              type="text"
              name="TestimonyCode"
              placeholder="Kode Testimoni"
              onChange={this.handleInputChange}
              value={TestimonyCode}
              disabled={TestimonyId ? true : false}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Nama Klien" className="form-label">
              Nama Klien
            </label>
            <InputText
              type="text"
              name="ClientName"
              placeholder="Nama Klien"
              onChange={this.handleInputChange}
              value={ClientName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Pekerjaan" className="form-label">
              Pekerjaan
            </label>
            <InputText
              type="text"
              name="Occupation"
              placeholder="Pekerjaan"
              onChange={this.handleInputChange}
              value={Occupation}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Deskripsi Testimonal" className="form-label">
              Deskripsi Testimonial
            </label>
            <InputText
              type="text"
              name="TestimonialDescription"
              placeholder="Deskripsi Testimonal"
              onChange={this.handleInputChange}
              value={TestimonialDescription}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Gambar Klien" className="form-label">
              Gambar Layanan
            </label>
            <InputFile
              accept="image/*"
              name="ImgClient"
              onChange={this.handleInputChange}
              value={ImgClient}
              previewImage={PreviewImgClient}
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
