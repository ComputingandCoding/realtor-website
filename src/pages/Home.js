import React, { useState, useEffect } from "react";
import vidBg from "../assets/video-bg.mp4";
import toronto from "../assets/toronto.jpeg";
import Intro from "../components/Intro";
import HomeAbout from "../components/home-about";
import Awards from "../components/awards";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      setIsMobile(true);
    }
  }, []);
  return (
    <div className="home">
      <Intro />
      <div>
        <div className="video-player">
          {isMobile ? (
            <img src={toronto} alt="hero img" />
          ) : (
            <video src={vidBg} autoPlay loop muted />
          )}
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
      </div>
      <HomeAbout />
      <Awards />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
