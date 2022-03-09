import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="logo">
      <div>this is header</div>
      <img
        src={process.env.PUBLIC_URL + "/images/companylogo.svg"}
        alt="logo"
      />
    </div>
  );
};

export default Header;
