import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";

function Main() {
  return (
    <div className="container">
      <div className=" innerContainer">
        <div className="left">
          <div className="wrapper">
            <Header />
            <Contact />
          </div>
        </div>
        <div className="right">
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default Main;
