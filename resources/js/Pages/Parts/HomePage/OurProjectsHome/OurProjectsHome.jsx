import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import ButtonSlides from "@/Elements/ButtonSlides/ButtonSlides";
import SliderImage from "@/Elements/SliderImage/SliderImage";
import "./OurProjectsHome.scss";

const OurProjectsHome = ({ projects }) => {
  function getYear(date) {
    var convertDate = new Date(date);
    return convertDate.getFullYear();
  }

  return (
    <section className="container our-project-section">
      <div className="row pb-3">
        <h1 className="title">Proyek Kami</h1>
      </div>
      {projects.map((data, i) => {
        return (
          <div className="row projects col-lg-12 col-md-12" key={i}>
            <SliderImage
              imagesCarousel={data.img_projects}
              outerClassName="col-lg-6 col-md-6 images-wrapper"
            />
            <div className="col-lg-6 col-md-6 card-section">
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
      <div className="row" style={{ paddingTop: 30 }}>
        <div className="d-flex justify-content-center">
          <Button type="button" isPrimary className="lainnya">
            Lainnya
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurProjectsHome;
