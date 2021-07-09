import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/listings">LISTINGS</Link>
        </li>
        <li>
          <Link to="/pre-construction">PRE-CONSTRUCTION</Link>
        </li>
        <img src={Logo} alt="logo" />
        <li>
          <Link to="/resources">RESOURCES</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
