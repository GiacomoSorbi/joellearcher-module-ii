import React from "react";
import homeimage from "./images/home-image.gif";

const Home = props => {
  return (
    <div className="main-content">
      <div className="home-image">
        <a href="/theislands">
          <img
            className="home-image1"
            src={homeimage}
            alt="overhead view of dominican republic sea and beach"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
