import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

function About() {
  return (
    <>
      <section className="about-section" id='about'>
        <div className="container about-me">
          <h2 className="heading">About Me</h2>
          <div className="my-details d-flex">
            <div className="intro">
              <p className="dec">I’m a Front-End Developer & WordPress Specialist
                passionate about crafting clean,
                responsive websites. With expertise in HTML, CSS, JavaScript, and custom WordPress themes,
                I focus on user-friendly, high-performance designs that bring ideas to life. <br />
                Let’s collaborate! Whether you need a sleek portfolio
                or a dynamic business site, I’ll turn your vision into
                reality—efficiently and beautifully.
              </p>
              <button className="cv"><MdOutlineFileDownload /> Download</button>
            </div>
            <div className="skill ">
              <h2>second </h2>
             


            </div>
          </div>

        </div>




      </section>

    </>
  )
}

export default About
