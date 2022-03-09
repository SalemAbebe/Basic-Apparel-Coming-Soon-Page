import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Search from "../Search/Search";

function Main() {
  return (
    <div className="container">
      <div className=" innerContainer">
        <Header />
        <Banner />
        {/* <Search /> */}
      </div>
    </div>
  );
}

export default Main;
