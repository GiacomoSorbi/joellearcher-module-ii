import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/WTG_Logo_2.png";

/* re _props - added _ prefix to acknowledge it has not been used*/
const Navbar = _props => (
  <div>
    <nav>
      <NavLink className="nav-menu-link" exact to="/">
              
        <img src={logo} className="WTG-logo" alt="Where To Go. Website logo" />
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
