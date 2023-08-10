import { Link, Head, useForm, usePage, router } from "@inertiajs/react";
import "./AboutUsDashboard.scss";
import { Component } from "react";
import { Inertia } from "@inertiajs/inertia";
import InputText from "@/Elements/InputText/InputText";
import InputFile from "@/Elements/InputFile/InputFile";

class AboutUsDashboard extends Component {
  constructor(props) {
    super(props);
    var aboutUs = this.props.aboutUs;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      aboutUsId: aboutUs.AboutUsId,
      vision: aboutUs.Vision,
      mission: aboutUs.Mission,
      commitment: aboutUs.Commitment,
      descriptionAboutUsSmall: aboutUs.DescriptionAboutUsSmall,
      descriptionAboutUsFull: aboutUs.DescriptionAboutUsFull,

      imgAboutUs: undefined,
      imgAboutUsHome: undefined,
      imgCommitment: undefined,
      imgAboutUsHomeSmall1: undefined,
      imgAboutUsHomeSmall2: undefined,
      imgAboutUsHomeSmall3: undefined,

      previewImgAboutUsHome: aboutUs.ImgAboutUsHome,
      previewImgAboutUs: aboutUs.ImgAboutUs,
      previewImgCommitment: aboutUs.ImgCommitment,
      previewImgAboutUsHomeSmall1: aboutUs.ImgAboutUsHomeSmall1,
      previewImgAboutUsHomeSmall2: aboutUs.ImgAboutUsHomeSmall2,
      previewImgAboutUsHomeSmall3: aboutUs.ImgAboutUsHomeSmall3,
    };
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

    Inertia.post(route("editAboutUs"), data, {
      forceFormData: true,
    });
  };

  render() {
    const {
      vision,
      mission,
      commitment,
      descriptionAboutUsSmall,
      descriptionAboutUsFull,

      imgAboutUsHome,
      imgAboutUs,
      imgCommitment,
      imgAboutUsHomeSmall1,
      imgAboutUsHomeSmall2,
      imgAboutUsHomeSmall3,

      previewImgAboutUsHome,
      previewImgAboutUs,
      previewImgCommitment,
      previewImgAboutUsHomeSmall1,
      previewImgAboutUsHomeSmall2,
      previewImgAboutUsHomeSmall3,
    } = this.state;

    return (
      <section className="row col-12">
        <h3 className="pb-3">Tentang Kami</h3>
        <form onSubmit={this.submit} encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="vision" className="form-label">
              Visi
            </label>
            <InputText
              type="text"
              name="vision"
              placeholder="Visi"
              onChange={this.handleInputChange}
              value={vision}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mission" className="form-label">
              Misi
            </label>
            <InputText
              type="text"
              name="mission"
              placeholder="Mission"
              onChange={this.handleInputChange}
              value={mission}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="commitment" className="form-label">
              Komitmen
            </label>
            <InputText
              type="text"
              name="commitment"
              placeholder="Komitmen"
              onChange={this.handleInputChange}
              value={commitment}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descriptionAboutUsSmall" className="form-label">
              Deskripsi Tentang Kami Beranda
            </label>
            <InputText
              useTextArea="true"
              name="descriptionAboutUsSmall"
              placeholder="Deskripsi Tentang Kami Beranda"
              onChange={this.handleInputChange}
              value={descriptionAboutUsSmall}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descriptiponAboutUsFull" className="form-label">
              Deskripsi Tentang Kami
            </label>
            <InputText
              useTextArea="true"
              name="descriptionAboutUsFull"
              placeholder="Deskripsi Tentang Kami"
              onChange={this.handleInputChange}
              value={descriptionAboutUsFull}
            />
          </div>

          <div className="row">
            <div className="col-4">
              <label htmlFor="imgAboutUsHome" className="form-label">
                Gambar Tentang Kami Beranda
              </label>
              <InputFile
                accept="image/*"
                name="imgAboutUsHome"
                onChange={this.handleInputChange}
                value={imgAboutUsHome}
                previewImage={previewImgAboutUsHome}
              />
            </div>
            <div className="col-4">
              <label htmlFor="imgAboutUs" className="form-label">
                Gambar Tentang Kami
              </label>
              <InputFile
                accept="image/*"
                name="imgAboutUs"
                onChange={this.handleInputChange}
                value={imgAboutUs}
                previewImage={previewImgAboutUs}
              />
            </div>
            <div className="col-4">
              <label htmlFor="imgCommitment" className="form-label">
                Gambar Komitmen
              </label>
              <InputFile
                accept="image/*"
                name="imgCommitment"
                onChange={this.handleInputChange}
                value={imgCommitment}
                previewImage={previewImgCommitment}
              />
            </div>
            <div className="col-4">
              <label htmlFor="imgAboutUs" className="form-label">
                Gambar Komitmen Kecil 1
              </label>
              <InputFile
                accept="image/*"
                name="imgAboutUsHomeSmall1"
                onChange={this.handleInputChange}
                value={imgAboutUsHomeSmall1}
                previewImage={previewImgAboutUsHomeSmall1}
              />
            </div>
            <div className="col-4">
              <label htmlFor="imgAboutUs" className="form-label">
                Gambar Komitmen Kecil 2
              </label>
              <InputFile
                accept="image/*"
                name="imgAboutUsHomeSmall2"
                onChange={this.handleInputChange}
                value={imgAboutUsHomeSmall2}
                previewImage={previewImgAboutUsHomeSmall2}
              />
            </div>
            <div className="col-4">
              <label htmlFor="imgAboutUs" className="form-label">
                Gambar Komitmen Kecil 3
              </label>
              <InputFile
                accept="image/*"
                name="imgAboutUsHomeSmall3"
                onChange={this.handleInputChange}
                value={imgAboutUsHomeSmall3}
                previewImage={previewImgAboutUsHomeSmall3}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.submit}
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default AboutUsDashboard;
