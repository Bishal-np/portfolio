import React, { useEffect } from 'react';
import "../../scss/pages/home.scss";
import Logo from "../../assets/banner.png";

function Banner() {
  useEffect(() => {
    const text = document.querySelector(".sec-text");
    const textLoad = () => {
      setTimeout(() => {
        if (text) text.textContent = "Front End Developer";
      }, 0);
    };
    textLoad();
  }, []);

  return (
    <section className="banner-section" id='banner'>
      <div className="container banner">
        <div className="banner-details">
          <h1 className='heading'>Hey, I'm Bishal</h1>

          <div className="animated-text">
            <span className="text first-text">I'm </span>
            <span className="text sec-text"></span>
          </div>
          <button className='hire-me'>Hire Me</button>
        </div>
        <div className="banner-picture">
          <img src={Logo} alt="Bishal's Profile" />
        </div>
      </div>
    </section>
  );
}

export default Banner;