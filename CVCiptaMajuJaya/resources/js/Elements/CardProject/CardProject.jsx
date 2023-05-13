import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Button from "@/Elements/Button/Button";
import ButtonSlides from "../ButtonSlides/ButtonSlides";
import "./CardProject.scss";

export default function CardProject(props) {
  function getYear(date) {
    var convertDate = new Date(date);
    return convertDate.getFullYear();
  }

  return props.projects.map((data, i) => {
    <div className="row projects col-12" key={i}>
      <div className="col-6">
        <div className="row justify-content-center">
          <div className="d-flex img-project">
            {data.ImageProjects.map((image, j) => {
              return (
                <div className="flex-item" key={j}>
                  <img src={`/images/imgProject/${image.ImgProject}`} alt="" />
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
                <div className="col-6">Year : {getYear(data.ProjectDate)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  });
}
