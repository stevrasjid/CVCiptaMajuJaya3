import React, { useRef } from "react";
import "./InputFile.scss";

export default function InputFile(props) {
  const { name, value, accept, innerClassname, outerClassname, previewImage } =
    props;

  return (
    <>
      <input
        type="file"
        name={name}
        className="form-control"
        onChange={props.onChange}
      />
      {value ? (
        <div className="img-preview">
          <img src={URL.createObjectURL(value)} alt="" />
        </div>
      ) : (
        <div className="img-preview">
          <img src={`images/${previewImage}`} alt="" />
        </div>
      )}
    </>
  );
}
