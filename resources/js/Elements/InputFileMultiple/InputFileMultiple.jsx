import React from "react";
import InputFile from "../InputFile/InputFile";

export default function InputFileMultiple(props) {
  const {
    name,
    previewImages,
    value,
    innerClassname,
    outerClassname,
    dataCount,
    onChange,
  } = props;
  var list = [];
  for (var i = 0; i < dataCount; i++) {
    list.push(
      <div className="col-4">
        <label htmlFor={name} className="form-label">
          Gambar {i + 1}
        </label>
        <InputFile
          accept="image/*"
          name={name}
          onChange={onChange}
          value={name[i]}
          previewImage={`images/${previewImages[i]}`}
        />
      </div>
    );
  }

  return <div>{list}</div>;
}
