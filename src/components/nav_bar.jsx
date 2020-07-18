import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/WTG_Logo_2.png";

const Navbar = props => (
  <div className="App">
    <nav>
      <NavLink className="nav-menu-link" exact to="/">
                
        <img src={logo} className="WTG-logo" alt="website logo" />
      </NavLink>
      <ul className="nav-menu">
        <li>
          <NavLink className="nav-menu-link-b" exact to="/theislands">
            the islands
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-menu-link-b" exact to="/rollthedice">
            roll the dice!
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
