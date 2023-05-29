import { Link, Head } from "@inertiajs/react";
import "./AboutUsDashboard.scss";
import { useState, Component } from "react";
import { Inertia } from "@inertiajs/inertia";

const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

class AboutUsDashboard extends Component {
  constructor(props) {
    super(props);
    var aboutUs = this.props.aboutUs;
    this.state = {
      aboutUsId: aboutUs.AboutUsId,
      vision: aboutUs.Vision,
      mission: aboutUs.Mission,
      commitment: aboutUs.Commitment,
      descriptionAboutUsSmall: aboutUs.DescriptionAboutUsSmall,
      descriptionAboutUsFull: aboutUs.DescriptionAboutUsFull,
      imgAboutUsHome: aboutUs.ImgAboutUsHome,

      previewImgAboutUsHome: "",
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (event.target.files) {
      const name2 = "preview" + capitalizeFirst(name);
      this.setState({
        [name]: target.files[0],
        [name2]: URL.createObjectURL(target.files[0]),
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  submit = (event) => {
    event.preventDefault();
    const data = new FormData();

    data.appends("files", this.state);

    Inertia.put(route("editAboutUs"), data, {
      forceFormData: true,
    });
  };

  render() {
    // console.log("ini data didalem aboutus" + this.props)
    return (
      <section className="row col-12">
        <form onSubmit={this.submit} encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="vision" className="form-label">
              Visi
            </label>
            <input
              type="text"
              name="vision"
              className="form-control"
              aria-describedby="vision"
              placeholder="Visi"
              onChange={this.handleInputChange}
              value={this.state.vision}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mission" className="form-label">
              Misi
            </label>
            <input
              type="text"
              name="mission"
              className="form-control"
              aria-describedby="mission"
              placeholder="Misi"
              onChange={this.handleInputChange}
              value={this.state.mission}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descriptionAboutUsSmall" className="form-label">
              Deskripsi Tentang Kami Beranda
            </label>
            <input
              type="text"
              name="descriptionAboutUsSmall"
              className="form-control"
              aria-describedby="deskripsiSmall"
              placeholder="Deskripsi Tentang Kami Beranda"
              onChange={this.handleInputChange}
              value={this.state.descriptionAboutUsSmall}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descriptiponAboutUsFull" className="form-label">
              Deskripsi Tentang Kami
            </label>
            <input
              type="text"
              name="descriptionAboutUsFull"
              className="form-control"
              aria-describedby="deskripsiFull"
              placeholder="Deskripsi Tentang Kami"
              onChange={this.handleInputChange}
              value={this.state.descriptionAboutUsFull}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="commitment" className="form-label">
              Komitmen
            </label>
            <textarea
              type="text"
              name="commitment"
              className="form-control"
              aria-describedby="komitmen"
              placeholder="Deskripsi Tentang Kami"
              onChange={this.handleInputChange}
              value={this.state.commitment}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageAboutUsHome" className="form-label">
              Gambar Tentang Kami Beranda
            </label>
            <input
              type="file"
              name="imgAboutUsHome"
              className="form-control"
              onChange={this.handleInputChange}
            />
            {this.state.previewImgAboutUsHome ? (
              <div className="img-preview">
                <img src={this.state.previewImgAboutUsHome} alt="" />
              </div>
            ) : (
              <div className="img-preview">
                <img src={`images/${this.state.imgAboutUsHome}`} alt="" />
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default AboutUsDashboard;
