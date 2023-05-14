import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import ButtonSlides from "@/Elements/ButtonSlides/ButtonSlides";
import "./OurProjects.scss";

export default function OurProjects(props) {
  function getYear(date) {
    var convertDate = new Date(date);
    return convertDate.getFullYear();
  }

  return (
    <section className="container our-project-section">
      <div className="row category-wrapper">
        <div className="d-flex d-inline">
          <div className="category">
            <input
              type="radio"
              className="btn-check"
              name="options-outlined"
              id="success-outlined"
              autoComplete="off"
              checked
            />
            <label
              className="btn btn-outline-success"
              htmlFor="success-outlined"
            >
              All
            </label>
          </div>
          <div className="category ms-3">
            <input
              type="radio"
              className="btn-check"
              name="options-outlined"
              id="success-outlined"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-success"
              htmlFor="success-outlined"
            >
              Tempat Hiburan
            </label>
          </div>
          <div className="category ms-3">
            <input
              type="radio"
              className="btn-check"
              name="options-outlined"
              id="success-outlined"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-success"
              htmlFor="success-outlined"
            >
              Tempat Tinggal
            </label>
          </div>
          <div className="category ms-3">
            <input
              type="radio"
              className="btn-check"
              name="options-outlined"
              id="success-outlined"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-success"
              htmlFor="success-outlined"
            >
              Restoran
            </label>
          </div>
        </div>
      </div>
      {props.projects.map((data, i) => {
        return (
          <div className="row projects col-12" key={i}>
            <div className="col-6">
              <div className="row justify-content-center">
                <div className="d-flex img-project">
                  {data.ImageProjects.map((image, j) => {
                    return (
                      <div className="flex-item" key={j}>
                        <img
                          src={`/images/imgProject/${image.ImgProject}`}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ paddingTop: 15 }}
                >
                  <ButtonSlides />
                </div>
              </div>
            </div>
            <div className="col-6 card-section">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{data.ProjectName}</h3>
                  <p className="card-text">{data.Description}</p>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-6">Client : {data.ClientName}</div>
                      <div className="col-6">
                        Year : {getYear(data.ProjectDate)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
