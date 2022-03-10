import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="wrap2">
      <div className="ad">
        <div className="txt1"> WE'RE</div>
        <div className="txt2">COMING</div>
        <div className="txt3">SOON</div>
        <div className="txt4">
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
        <div className="contact">
          <div className="email">
            <input placeholder="Email Address"></input>
          </div>
          <button className="button">
            <img
              src={process.env.PUBLIC_URL + "/images/icon-arrow.svg"}
              alt="logo"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
