import { Link, Head } from "@inertiajs/react";
import Button from "@/Elements/Button/Button";
import "./BrandIcon.scss";


export default function BrandIcon(props) {
  if (props.isBlack) {
    return (
      <Button href="/" type="link" className="brand-text-icon">
        <img src="/images/logoWebHitam.png" alt="logo" />
        <span className="brand-icon text-black">CV. Cipta Maju Jaya</span>
      </Button>
    );
  }
  return (
    <Button href="/" type="link" className="brand-text-icon">
      <img src="/images/logoWebPutih.png" alt="logo" />
      <span className="brand-icon text-white">CV. Cipta Maju Jaya</span>
    </Button>
  );
}
