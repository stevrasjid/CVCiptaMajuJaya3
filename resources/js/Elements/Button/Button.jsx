import { Link, Head } from "@inertiajs/react";
// import { Link } from "react-scroll";

import "./Button.scss";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-shadow");

  const onClick = () => {
    if (props.onClick !== undefined) props.onClick();
  };

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "_noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          href={props.href}
          className={className.join(" ")}
          onClick={onClick}
          smooth={props.smooth}
        >
          {props.children}
        </Link>
      );
    }
  } else {
    return (
      <button
        className={className.join(" ")}
        onClick={onClick}
        style={props.style}
      >
        {props.children}
      </button>
    );
  }
}
