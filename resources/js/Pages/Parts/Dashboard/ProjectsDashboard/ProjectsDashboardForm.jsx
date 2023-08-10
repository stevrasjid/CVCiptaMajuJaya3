import React, { Component } from "react";
import InputText from "@/Elements/InputText/InputText";
import InputFile from "@/Elements/InputFile/InputFile";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import axios from "axios";
import "./ProjectsDashboard.scss";

import "react-datepicker/dist/react-datepicker.css";
import { Inertia } from "@inertiajs/inertia";

export default class ProjectsDashboardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Project: {
        ProjectId: "",
        ProjectName: "",
        ProjectCode: "",
        Description: "",
        ClientName: "",
        ProjectDate: new Date(moment().format("MM/DD/YYYY")),
        CategoryId: this.props.Categories[0].CategoryId,
        CategoryCode: this.props.Categories[0].CategoryCode,
        ImgProjects: [
          {
            ImgFile: "",
            Nomor: 0,
            PreviewImage: "",
          },
          {
            ImgFile: "",
            Nomor: 1,
            PreviewImage: "",
          },
          {
            ImgFile: "",
            Nomor: 2,
            PreviewImage: "",
          },
          {
            ImgFile: "",
            Nomor: 3,
            PreviewImage: "",
          },
          {
            ImgFile: "",
            Nomor: 4,
            PreviewImage: "",
          },
        ],
      },
    };
  }

  componentDidMount() {
    if (this.props.Project) {
      const project = this.props.Project;

      var listImg = this.state.Project.ImgProjects;
      project.img_projects.forEach(function (img) {
        var image = listImg.filter((i) => i.Nomor == img.NumberSort);
        if (!(image === null || image === undefined)) {
          image[0].PreviewImage = img.ImgProject;
        }
      });

      this.setState({
        ...this.state,
        Project: {
          ProjectId: project.ProjectId,
          ProjectName: project.ProjectName,
          ProjectCode: project.ProjectCode,
          Description: project.Description,
          ClientName: project.ClientName,
          ProjectDate: new Date(
            moment(project.ProjectDate).format("MM/DD/YYYY")
          ),
          CategoryId: project.CategoryId,
          CategoryCode: project.CategoryCode,
          ImgProjects: listImg,
        },
      });
    }
  }

  handleInputChange = (event, date = null, variabelName = "") => {
    var name;
    var value;
    if (event !== null) {
      const target = event.target;
      name = target.name;
      value = target.files ? target.files[0] : target.value;
    } else {
      name = variabelName;
      value = new Date(moment(date).format("MM/DD/YYYY"));
    }

    this.setState({
      ...this.state,
      Project: {
        ...this.state.Project,
        [name]: value,
      },
    });
  };

  handleInputChangeImage = (e, nomor) => {
    const target = e.target;
    const name = target.name;
    const file = target.files[0];

    var listImg = this.state.Project.ImgProjects;
    var img = listImg.filter((img) => img.Nomor == nomor);
    img[0].ImgFile = file;

    this.setState({
      ...this.state,
      Project: {
        ...this.state.Project,
        ImgProjects: listImg,
      },
    });
  };

  submit = (event) => {
    event.preventDefault();
    const data = this.state.Project;
    // const formData = new FormData();
    // this.state.Project.ImgProjects.forEach((imgProject) => {
    //   formData.append(`${imgProject.Nomor}`, imgProject.ImgFile);
    // });

    const formatDate = moment(data.ProjectDate).format("YYYY-MM-DD");

    // formData.append("ProjectId", data.ProjectId);
    // formData.append("ProjectName", data.ProjectName);
    // formData.append("ProjectCode", data.ProjectCode);
    // formData.append("Description", data.Description);
    // formData.append("ClientName", data.ClientName);
    // formData.append("ProjectDate", formatDate);
    // formData.append("CategoryId", data.CategoryId);
    // formData.append("CategoryCode", data.CategoryCode);

    // if (data.ProjectId) {
    //   axios.post(route("editProject"), formData, {
    //     forceFormData: true,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    // } else {
    //   axios.post(route("addNewProject"), formData, {
    //     forceFormData: true,
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    // }

    if (data.ProjectId) {
      Inertia.post(
        route("editProject"),
        data,
        {
          forceFormData: true,
          headers: { "Content-Type": "multipart/form-data" },
        },
        {
          onSuccess: () => {},
        }
      );
    }
  };

  render() {
    const {
      ProjectId,
      ProjectCode,
      ProjectName,
      Description,
      ClientName,
      ProjectDate,
      CategoryCode,
      ImgProjects,
    } = this.state.Project;

    const { Categories } = this.props;
    return (
      <section className="row col-12">
        <form encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="Kode Project" className="form-label">
              Kode Project
            </label>
            <InputText
              type="text"
              name="ProjectCode"
              placeholder="Kode Project"
              onChange={this.handleInputChange}
              value={ProjectCode}
              disabled={ProjectId ? true : false}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Nama Project" className="form-label">
              Nama Project
            </label>
            <InputText
              type="text"
              name="ProjectName"
              placeholder="Nama Project"
              onChange={this.handleInputChange}
              value={ProjectName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Deskripsi Project" className="form-label">
              Deskripsi Project
            </label>
            <InputText
              type="text"
              name="Description"
              placeholder="Deskripsi"
              onChange={this.handleInputChange}
              value={Description}
              useTextArea
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
            <label htmlFor="Nama Klien" className="form-label">
              Tanggal
            </label>
            <DatePicker
              name="ProjectDate"
              className="input-tgl"
              onChange={(date) =>
                this.handleInputChange(null, date, "ProjectDate")
              }
              value={ProjectDate}
              selected={ProjectDate}
            />
          </div>

          <div className="d-flex d-inline mb-3">
            {Categories.map((data, i) => {
              return (
                <div className={`category${i != 0 ? " ps-3" : ""}`} key={i}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="CategoryCode"
                    id={`CategoryCode_${i}`}
                    autoComplete="off"
                    value={data.CategoryCode}
                    onChange={(e) => this.handleInputChange(e)}
                    checked={data.CategoryCode === CategoryCode}
                  />
                  <label
                    className="btn btn-outline-success"
                    htmlFor={`CategoryCode_${i}`}
                  >
                    {data.CategoryName}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="row">
            {ImgProjects.map((data, i) => {
              return (
                <div className="col-4 mt-3" key={i}>
                  <InputFile
                    name="ImgProjects"
                    value={data.ImgFile}
                    previewImage={data.PreviewImage}
                    onChange={(e) => this.handleInputChangeImage(e, i)}
                  />
                </div>
              );
            })}
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
