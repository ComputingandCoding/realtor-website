import React from "react";
import face from "../assets/face.jpeg";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className="about">
      <div>
        <div className="main">
          <img src={face} alt="Me" />
          <div className="about-text">
            <h1>Lorem Ipsum</h1>
            <div className="btn-txt">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Purus viverra accumsan in nisl nisi. Vulputate mi sit amet
                mauris commodo quis. Cursus risus at ultrices mi tempus
                imperdiet nulla. Enim facilisis gravida neque convallis a cras
                semper. Nisl tincidunt eget nullam non. Ac felis donec et odio.
                Ipsum nunc aliquet bibendum enim facilisis gravida neque
                convallis. Lacus suspendisse faucibus interdum posuere lorem
                ipsum. Aliquet enim tortor at auctor. Nisl tincidunt eget nullam
                non nisi est sit amet. Tincidunt vitae semper quis lectus nulla
                at volutpat diam ut. Tellus pellentesque eu tincidunt tortor
                aliquam. Lacus vel facilisis volutpat est velit. Sit amet justo
                donec enim diam vulputate ut pharetra sit. Lorem ipsum dolor sit
                amet consectetur adipiscing elit duis.
              </p>
              <Link to="/about">
                <button>
                  <span>More About Syed Naveed Hasan</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
