import React, { useState } from "react";
import "./InputText.scss";

export default function InputText(props) {
  const {
    value,
    name,
    errorResponse,
    type,
    placeHolder,
    innerClassname,
    outerClassname,
    useTextArea,
    disabled,
    isSearchText,
    isFocused,
    required,
  } = props;

  const [HasError, setHasError] = useState(null);
  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "phone" || type === "number") pattern = "[0-9]*";

  const onChange = (e) => {
    if (type === "email") {
      if (!pattern.test(e.target.value)) {
        setHasError(errorResponse);
      } else {
        setHasError(null);
      }
    }

    if (type === "phone" || type === "number") {
      if (e.target.validity.valid) props.onChange(e);
    } else {
      props.onChange(e);
    }
  };

  if (isSearchText) {
    return (
      <div>
        <input
          type={type}
          name={name}
          pattern={pattern}
          className={["form-control", innerClassname].join(" ")}
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
        />
        {HasError && <span className="error-helper">{HasError}</span>}
      </div>
    );
  } else if (useTextArea) {
    return (
      <div className={["mb-3", outerClassname].join(" ")}>
        <textarea
          name={name}
          pattern={pattern}
          className={["form-control", innerClassname].join(" ")}
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
        {HasError && <span className="error-helper">{HasError}</span>}
      </div>
    );
  } else {
    return (
      <div className={["mb-3", outerClassname].join(" ")}>
        <input
          type={type}
          name={name}
          pattern={pattern}
          className={["form-control", innerClassname].join(" ")}
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
          disabled={disabled}
          isFocused={isFocused}
        />
        {HasError && <span className="error-helper">{HasError}</span>}
      </div>
    );
  }
}

InputText.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Type Here...",
  errorResponse: "Please match the requested format.",
  disabled: false,
  isFocused: false,
  required: false,
};
