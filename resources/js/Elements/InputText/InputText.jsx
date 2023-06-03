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
    } = props;

    const [HasError, setHasError] = useState(null);
    let pattern = "";
    if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (type === "phone") pattern = "[0-9]*";

    const onChange = (e) => {
        if (type === "email") {
            if (!pattern.test(e.target.value)) {
                setHasError(errorResponse);
            } else {
                setHasError(null);
            }
        }

        if (type === "phone") {
            if (e.target.validity.valid) props.onChange(e);
        } else {
            props.onChange(e);
        }
    };

    return (
        <div className={["mb-3", outerClassname].join(" ")}>
            {!useTextArea ? (
                <input
                    type={type}
                    name={name}
                    pattern={pattern}
                    className={["form-control", innerClassname].join(" ")}
                    placeholder={placeHolder}
                    onChange={onChange}
                    value={value}
                />
            ) : (
                <textarea
                    name={name}
                    pattern={pattern}
                    className={["form-control", innerClassname].join(" ")}
                    placeholder={placeHolder}
                    onChange={onChange}
                    value={value}
                />
            )}

            {HasError && <span className="error-helper">{HasError}</span>}
        </div>
    );
}

InputText.defaultProps = {
    type: "text",
    pattern: "",
    placeholder: "Type Here...",
    errorResponse: "Please match the requested format.",
};
