import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

function About() {
  return (
    <>
      <section className="about-section" id='about'>
        <div className="container about-me">
          <h2 className="heading">About Me</h2>
          <div className="my-details d-flex ">
            <div className="intro col-lg-6 col-md-12">
              <p className="dec">

              </p>
              <button className="cv"><MdOutlineFileDownload /> Download</button>
            </div>
            <div className="skill  col-lg-6 col-md-12">
              <h2>Skills </h2>
              <div className="progress " role="progressbar" aria-label="Success example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar text-bg-success" >HTML  80%</div>
              </div>
              <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar text-bg-success" >CSS  70%</div>
              </div>
              <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar text-bg-success" >JAVA SCRIPT 60%</div>
              </div>
              <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar text-bg-success" >BOOTSTRAP 70%</div>
              </div>
              <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar text-bg-success" >REACT 50%</div>
              </div>




            </div>

          </div>

        </div>




      </section>

    </>
  )
}

export default About
