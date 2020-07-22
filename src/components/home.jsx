import React from "react";
import homeimage from "./images/home-image.gif";
import social from "./images/wtg-img-sprite.png";

const Home = _props => {
  return (
    <div className="main-content">
      <div className="home-image">
        <a href="/theislands">
          <img
            className="home-image1"
            src={homeimage}
            alt="overhead view of dominican republic island. bright coloured sea and beach"
          />
        </a>
      </div>
      <div>
        <footer>
          <img
            className="social-image"
            src={social}
            alt="instagram, facebook, twitter, whatsapp logo sprite"
          />
          <p className="footer-text">Copyright 2020 by Joelle Archer-D'Mello</p>{" "}
        </footer>
      </div>
    </div>
  );
};

export default Home;
