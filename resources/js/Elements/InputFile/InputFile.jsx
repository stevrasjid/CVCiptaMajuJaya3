import React, { useRef } from "react";
import "./InputFile.scss";

export default function InputFile(props) {
  const { name, value, accept, innerClassname, outerClassname, previewImage } =
    props;

  console.log(previewImage);
  console.log(value);
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
      ) : previewImage ? (
        <div className="img-preview">
          <img src={previewImage} alt="" />
        </div>
      ) : (
        <div className="img-preview"></div>
      )}
    </>
  );
}
