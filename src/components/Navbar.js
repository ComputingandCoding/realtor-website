import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="navbar">
      <div
        className={`burger ${dropdown ? "open" : ""}`}
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
      <ul className={dropdown ? "link-open" : ""}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/listings">LISTINGS</Link>
        </li>
        <li>
          <Link to="/pre-construction">PRE-CONSTRUCTION</Link>
        </li>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
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
