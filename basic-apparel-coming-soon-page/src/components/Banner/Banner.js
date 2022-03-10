import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img
        src={process.env.PUBLIC_URL + "/images/hero-desktop.jpg"}
        alt="banner"
      />
    </div>
  );
}

export default Banner;
