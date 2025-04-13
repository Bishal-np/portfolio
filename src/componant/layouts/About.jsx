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
              <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar text-bg-success" >25%</div>
              </div>
              <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar text-bg-info" >50%</div>
              </div>
              <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar text-bg-warning" >75%</div>
              </div>
              <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar text-bg-danger" >100%</div>
              </div>



            </div>
          </div>

        </div>




      </section>

    </>
  )
}

export default About
