import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import "./Header.scss";

export default function Header(props) {
  return (
    <section className="container-fluid header-section">
      <div
        className="row"
        style={{
          backgroundImage: `url("/images/imageHeader.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <div className="col-6 row" style={{ height: "100%" }}>
          <div className="d-flex align-items-center tagLine-wrapper justify-content-center">
            <div className="flex-column">
              <div className="tagLine pb-1">
                <h1> Design & Build Your Property Dream With Us</h1>
              </div>
              <div className="pb-1">
                <h5>
                  Karya terbaik dari kami akan menciptakan kenyamanan dengan
                  tanpa rasa khawatir.
                </h5>
              </div>
              <Button className="button-home" isPrimary type="button">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
        <div className="col-6 row">
          <div className="d-flex d-inline align-items-center">
            <div className="yearsOfExperiences d-flex flex-column">
              <div className="angka">
                10
                <span className="plus ps-1">+</span>
              </div>
              <div className="description">Years of Experiences</div>
            </div>
            <div className="happyCustomers ms-5 d-flex flex-column">
              <div className="angka">
                20
                <span className="plus ps-1">+</span>
              </div>
              <div className="description">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
