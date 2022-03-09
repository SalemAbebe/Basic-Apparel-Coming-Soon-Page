import React from "react";

function Search() {
  return (
    <div>
      <div>
        <span>We're</span> coming soon
      </div>
      <div>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals. Email Address
      </div>

      <div>
        <input> Email Address</input>
        <img
          src={process.env.PUBLIC_URL + "/images/icon-arrow.svg"}
          alt="search arrow"
        />
      </div>
    </div>
  );
}

export default Search;
