import React from "react";
import vidBg from "../assets/video-bg.mp4";
import face from "../assets/face.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="video-player">
        <video src={vidBg} autoPlay loop />
        <div className="overlay" />
      </div>
      <div className="text">
        <h1 className="title">REAL ESTATE</h1>
        <div className="line">
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <h3 className="subtitle">Lorem ipsum dolor sit amet</h3>
      </div>
      <div className="about">
        <div>
          <img src={face} alt="Me" />
          <div className="about-text">
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
              viverra accumsan in nisl nisi. Vulputate mi sit amet mauris
              commodo quis. Cursus risus at ultrices mi tempus imperdiet nulla.
              Enim facilisis gravida neque convallis a cras semper. Nisl
              tincidunt eget nullam non. Ac felis donec et odio. Ipsum nunc
              aliquet bibendum enim facilisis gravida neque convallis. Lacus
              suspendisse faucibus interdum posuere lorem ipsum. Aliquet enim
              tortor at auctor. Nisl tincidunt eget nullam non nisi est sit
              amet. Tincidunt vitae semper quis lectus nulla at volutpat diam
              ut. Tellus pellentesque eu tincidunt tortor aliquam. Lacus vel
              facilisis volutpat est velit. Sit amet justo donec enim diam
              vulputate ut pharetra sit. Lorem ipsum dolor sit amet consectetur
              adipiscing elit duis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
