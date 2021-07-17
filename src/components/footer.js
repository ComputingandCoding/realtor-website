import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <img src={Logo} />
        <div className="contact-info">
          <div>
            <i className="fas fa-mobile-alt"></i>
            647-772-2102
          </div>
          <div>
            <i className="fa fa-phone"></i>
            905-565-9200
          </div>
          <div>
            <i className="far fa-envelope"></i>
            example@example.com
          </div>
        </div>
        <div className="social">
          <a href="https://www.facebook.com" target="_blank">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <i className="fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div className="links">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
