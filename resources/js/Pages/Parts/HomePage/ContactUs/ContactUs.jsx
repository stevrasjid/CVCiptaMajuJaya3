import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";

import "./ContactUs.scss";

export default function ContactUs({ contactUs }) {
  return (
    <section className="container contact-us-section" id="contactUs">
      <div className="row">
        <h1 className="title">Proyek Kami</h1>
      </div>
      <div className="row col-12 button-was">
        <div className="col-6 ps-0">
          <div className="d-flex flex-column">
            <Button
              type="link"
              href={`https://wa.me/${contactUs.PhoneNumber1}`}
              isExternal
              isPrimary
              className="button-wa my-3"
            >
              <span className="d-flex">
                <img src="/images/waButton.png" alt="" />
                <span className="d-flex flex-column ps-3">
                  <h3 className="whatsapp text-bold m-0 py-2">Whatsapp</h3>
                  <h4 className="name py-1">{contactUs.Admin1}</h4>
                </span>
              </span>
            </Button>
            <Button
              type="link"
              href={`https://wa.me/${contactUs.PhoneNumber2}`}
              isExternal
              isPrimary
              className="button-wa my-3"
            >
              <span className="d-flex">
                <img src="/images/waButton.png" alt="" />
                <span className="d-flex flex-column ps-3">
                  <h3 className="whatsapp text-bold m-0 py-2">Whatsapp</h3>
                  <h4 className="name py-1">{contactUs.Admin2}</h4>
                </span>
              </span>
            </Button>
          </div>
        </div>
        <div className="col-6 contact-details">
          <div className="row">
            <h5 className="text-bold">Alamat</h5>
          </div>
          <div className="row">
            <p className="address">{contactUs.Address}</p>
          </div>
          <div className="row">
            <p className="email">Email : {contactUs.Email}</p>
          </div>
          <div className="row">
            <p className="noPhone">Phone : +62 875-7235-2312</p>
          </div>
        </div>
      </div>
    </section>
  );
}
