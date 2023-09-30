import React, { useState } from "react";
import SliderImage from "@/Elements/SliderImage/SliderImage";
import { router } from "@inertiajs/react";
import Pagination from "@/Elements/Pagination/Pagination";
import "./OurProjects.scss";

export default function OurProjects({
  ourProjects,
  categories,
  category,
  totalCount,
  pageNumber,
}) {
  function getYear(date) {
    var convertDate = new Date(date);
    return convertDate.getFullYear();
  }

  const [categoryFilter, setCategoryFilter] = useState(category);
  const [pageNumberFilter, setPageNumberFilter] = useState(pageNumber);

  const checkProjectBasedOnCategory = (e) => {
    router.visit(
      route("projects", {
        pageNumber: pageNumberFilter,
        categoryCode: e.target.value,
      })
    );
  };

  const changePageNumber = (e, index) => {
    router.visit(
      route("projects", {
        pageNumber: index,
        categoryCode: categoryFilter,
      })
    );
  };

  return (
    <section className="container our-project-section">
      <div className="row category-wrapper">
        <div className="d-flex d-inline">
          <div className="category">
            <input
              type="radio"
              className="btn-check"
              name="CategoryCode"
              id="CategoryCode_0"
              autoComplete="off"
              value="ALL"
              onChange={(e) => checkProjectBasedOnCategory(e)}
              checked={category === "ALL"}
            />
            <label className="btn btn-outline-success" htmlFor="CategoryCode_0">
              All
            </label>
          </div>
          {categories.map((data, i) => {
            return (
              <div className={`category ps-2`} key={i + 1}>
                <input
                  type="radio"
                  className="btn-check"
                  name="CategoryCode"
                  id={`CategoryCode_${i + 1}`}
                  autoComplete="off"
                  value={data.CategoryCode}
                  onChange={(e) => checkProjectBasedOnCategory(e)}
                  checked={data.CategoryCode === category}
                />
                <label
                  className="btn btn-outline-success"
                  htmlFor={`CategoryCode_${i + 1}`}
                >
                  {data.CategoryName}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      {ourProjects.map((data, i) => {
        return (
          <div className="row projects col-12" key={i}>
            <div className="col-6">
              <div className="row justify-content-center">
                <SliderImage imagesCarousel={data.img_projects} />
                {/* <div className="d-flex img-project">
                 
                  {/* {data.img_projects.map((image, j) => {
                    return (
                      <div className="flex-item" key={j}>
                        <img src={image.ImgProject} alt="" />
                      </div>
                    );
                  })} *
                </div> */}
                {/* <div
                  className="d-flex justify-content-center"
                  style={{ paddingTop: 15 }}
                >
                  <ButtonSlides />
                </div> */}
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
      <div className="row justify-content-center">
        <Pagination
          totalCount={totalCount}
          pageNumber={pageNumber}
          onClick={(e, index) => changePageNumber(e, index)}
        />
      </div>
    </section>
  );
}
