import React from "react";
import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import "./ButtonSlides.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function (props) {
  return (
    // <React.Fragment>
    <>
      <Button
        type="button"
        className="button-slide"
        isPrimary
        style={{ marginRight: 8 }}
      >
        <FontAwesomeIcon icon={["fas", "arrow-left"]} />
      </Button>
      <Button type="button" className="button-slide" isPrimary>
        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
      </Button>
    </>

    // </React.Fragment>
  );
}
