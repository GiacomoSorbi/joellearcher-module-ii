import React from "react";
import { NavLink } from "react-router-dom";
import homeimage from "./images/home-image.gif";
import social from "./images/Social-media-img-sprite-2.png";

/* re _props - added _ prefix to acknowledge it has not been used*/
const Home = _props => {
  return (
    <div className="main-content">
      <div className="home-image">
        <NavLink exact to="/theislands">
          <img
            className="home-image1"
            src={homeimage}
            alt="overhead view of dominican republic island. bright coloured sea and beach"
          />
        </NavLink>
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
