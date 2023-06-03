import { Link, Head, useForm, usePage } from "@inertiajs/react";
import "./AboutUsDashboard.scss";
import { useState, Component } from "react";
import { Inertia } from "@inertiajs/inertia";

const AboutUsDashboard = (props) => {
  const aboutUs = props.aboutUs;
  // console.log(props);
  const { data, setData, errors, put, progress } = useForm({
      imgAboutUsHome: aboutUs.ImgAboutUsHome,
      image: "",
      previewImage: null,
  });

  function handleInputChange(e){
    const target = e.target;
    const name = target.name;
    const value = target.value;
    if (target.files) {

      setData("image", target.files[0]);
      setData("previewImage", URL.createObjectURL(target.files[0]))
      }
      else {
        setData([name], value);
      };
    console.log(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    put(route("editAboutUs"), {
      forceFormData: true,
    });
  }
  return ( 
  <section className="row col-12">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* <div className="mb-3">
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
        </div> */}
        <div className="mb-3">
          <label htmlFor="imageAboutUsHome" className="form-label">
            Gambar Tentang Kami Beranda
          </label>
          <input
            type="file"
            name="image"
            className="form-control"
            onChange={handleInputChange}
          />
          {data.previewImage ? (
            <div className="img-preview">
              <img src={data.previewImage} alt="" />
            </div>
          ) : (
            <div className="img-preview">
              <img src={`images/${data.imgAboutUsHome}`} alt="" />
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