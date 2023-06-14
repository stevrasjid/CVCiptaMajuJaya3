import { Link, Head } from "@inertiajs/react";
import "./HomepageDashboard.scss";
import { Component } from "react";
import { Inertia } from "@inertiajs/inertia";
import InputText from "@/Elements/InputText/InputText";
import InputFile from "@/Elements/InputFile/InputFile";

class HomepageDashboard extends Component {
  constructor(props) {
    super(props);
    var homePage = this.props.home;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      homeId: homePage.HomeId,
      tagLine: homePage.TagLine,
      smallDescription: homePage.SmallDescription,
      yearsExperiences: homePage.YearsExperiences,
      happyCustomers: homePage.HappyCustomers,
      imgHeader: undefined,
      previewImgHeader: homePage.ImgHeader,
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
    Inertia.post(route("editHomepage"), data, {
      forceFormData: true,
    });
  };

  render() {
    const {
      tagLine,
      smallDescription,
      yearsExperiences,
      happyCustomers,
      imgHeader,
      previewImgHeader,
    } = this.state;
    return (
      <section className="row col-12">
        <form encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="tagline" className="form-label">
              Tagline
            </label>
            <InputText
              type="text"
              name="tagLine"
              placeholder="Tagline"
              onChange={this.handleInputChange}
              value={tagLine}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Deskripsi Beranda" className="form-label">
              Deskripsi Beranda
            </label>
            <InputText
              type="text"
              name="smallDescription"
              placeholder="Deskripsi Beranda"
              onChange={this.handleInputChange}
              value={smallDescription}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Deskripsi Beranda" className="form-label">
              Tahun Pengalaman
            </label>
            <InputText
              type="text"
              name="yearsExperiences"
              placeholder="Tahun Pengalaman"
              onChange={this.handleInputChange}
              value={yearsExperiences}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Deskripsi Beranda" className="form-label">
              Jumlah Pelanggan Senang
            </label>
            <InputText
              type="text"
              name="happyCustomers"
              placeholder="Jumlah Pelanggan Senang"
              onChange={this.handleInputChange}
              value={happyCustomers}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imgHeader" className="form-label">
              Background Beranda
            </label>
            <InputFile
              accept="image/*"
              name="imgHeader"
              onChange={this.handleInputChange}
              value={imgHeader}
              previewImage={`images/${previewImgHeader}`}
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

export default HomepageDashboard;
