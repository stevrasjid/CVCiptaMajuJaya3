import { Link, Head, useForm, usePage, router } from "@inertiajs/react";
import "./AboutUsDashboard.scss";
import { Component } from "react";
import { Inertia } from "@inertiajs/inertia";
import InputText from "@/Elements/InputText/InputText";
import InputFile from "@/Elements/InputFile/InputFile";

const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

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
            imgAboutUsHome: undefined,
            previewImageAboutUsHome: aboutUs.ImgAboutUsHome,
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
        console.log(this.state);

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
            previewImageAboutUsHome,
            imgAboutUsHome,
        } = this.state;

        return (
            <section className="row col-12">
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
                        <label
                            htmlFor="descriptionAboutUsSmall"
                            className="form-label"
                        >
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
                        <label
                            htmlFor="descriptiponAboutUsFull"
                            className="form-label"
                        >
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

                    <label htmlFor="imageAboutUsHome" className="form-label">
                        Gambar Tentang Kami Beranda
                    </label>
                    <InputFile
                        accept="image/*"
                        name="imgAboutUsHome"
                        onChange={this.handleInputChange}
                        value={imgAboutUsHome}
                        previewImage={previewImageAboutUsHome}
                    />

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
