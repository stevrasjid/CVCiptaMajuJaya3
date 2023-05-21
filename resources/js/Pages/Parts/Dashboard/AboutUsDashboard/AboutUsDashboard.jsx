import { Link, Head, router } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import "./AboutUsDashboard.scss";
import { useState, Component } from "react";
import { Inertia } from "@inertiajs/inertia";

class AboutUsDashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    var aboutUs = this.props.aboutUs;
    console.log(this.props);
    console.log(aboutUs);
    this.state = {
      aboutUsId: aboutUs.AboutUsId,
      vision : aboutUs.Vision,
      mission : aboutUs.Mission,
      commitment: aboutUs.Commitment,
      descriptionAboutUsSmall: aboutUs.DescriptionAboutUsSmall,
      descriptionAboutUsFull : aboutUs.DescriptionAboutUsFull
    }
  }

  handleInputChange = (event) => {
    if(event.target.files){
      
    }
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }


  submit = (event) => {
    event.preventDefault();
    const data = this.state;
    Inertia.put(route('editAboutUs'), data);
  }


  render () {
    // console.log("ini data didalem aboutus" + this.props)
    return (
    <section className="row col-12">
      <form onSubmit={this.submit} encType="multipart/form-data" >
        <div className="mb-3">
          <label htmlFor="vision" className="form-label">Visi</label>
          <input type="text" name="vision" className="form-control" aria-describedby="vision" placeholder="Visi" onChange={this.handleInputChange} value={this.state.vision}/>
        </div>
        <div className="mb-3">
          <label htmlFor="mission" className="form-label">Misi</label>
          <input type="text" name="mission" className="form-control" aria-describedby="mission" placeholder="Misi" onChange={this.handleInputChange} value={this.state.mission}/>
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionAboutUsSmall" className="form-label">Deskripsi Tentang Kami Beranda</label>
          <input type="text" name="descriptionAboutUsSmall" className="form-control" aria-describedby="deskripsiSmall" placeholder="Deskripsi Tentang Kami Beranda" onChange={this.handleInputChange} value={this.state.descriptionAboutUsSmall}/>
        </div>
        <div className="mb-3">
          <label htmlFor="descriptiponAboutUsFull" className="form-label">Deskripsi Tentang Kami</label>
          <input type="text" name="descriptionAboutUsFull" className="form-control" aria-describedby="deskripsiFull" placeholder="Deskripsi Tentang Kami" onChange={this.handleInputChange} value={this.state.descriptionAboutUsFull}/>
        </div>
        <div className="mb-3">
          <label htmlFor="commitment" className="form-label">Komitmen</label>
          <textarea type="text" name="commitment" className="form-control" aria-describedby="komitmen" placeholder="Deskripsi Tentang Kami" onChange={this.handleInputChange} value={this.state.commitment}/>
        </div>
        <div className="mb-3">
          <label htmlFor="imageAboutUsHome" className="form-label">Gambar Tentang Kami Beranda</label>
          <input type="file" name="imageAboutUsHome" className="form-control" onChange={this.handleInputChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
   </section>
    );
    
  }
 
}

export default AboutUsDashboard;