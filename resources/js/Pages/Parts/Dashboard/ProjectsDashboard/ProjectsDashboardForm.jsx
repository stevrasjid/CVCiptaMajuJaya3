import React, { Component } from "react";
import InputText from "@/Elements/InputText/InputText";
import InputFile from "@/Elements/InputFile/InputFile";
import DatePicker from "react-datepicker";
import moment from "moment/moment";

import "./ProjectsDashboard.scss";

import "react-datepicker/dist/react-datepicker.css";

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
        CategoryId: "",
        CategoryCode: "",
        ImgProjects: [],
        PreviewImgProjects: [],
      },
      Categories: this.props.Categories,
    };

    var uploadFiles = [];
    for (var i = 0; i < 5; i++) {
      uploadFiles.push(
        <div className="col-4">
          <label htmlFor="imgProject" className="form-label">
            Gambar {i + 1}
          </label>
          <InputFile
            accept="image/*"
            name="imgProjects"
            onChange={this.handleInputChange}
            value={this.state.Project.ImgProjects[i]}
            previewImage={`images/${this.state.Project.PreviewImgProjects[i]}`}
          />
        </div>
      );
    }
  }

  componentDidMount() {
    if (this.props.project) {
      const project = this.props.project;
      this.setState({
        ...this.state,
        Project: project,
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

  submit = (event) => {
    event.preventDefault();
    const data = this.state;
    if (data.serviceId) {
      axios.post(route("editProject"), data, {
        forceFormData: true,
      });
    } else {
      axios.post(route("addNewProject"), data, {
        forceFormData: true,
      });
    }
  };

  render() {
    const {
      ProjectName,
      Description,
      ClientName,
      ProjectDate,
      CategoryCode,
      ImgProjects,
      PreviewImgProjects,
    } = this.state.Project;
    return (
      <section className="row col-12">
        <form encType="multipart/form-data">
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
            {this.state.Categories.map((data, i) => {
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
          <div className="row"></div>
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
