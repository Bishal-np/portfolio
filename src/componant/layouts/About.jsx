import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";

function About() {
  return (
    <section className="about-section py-5" id='about'>
      <div className="container">
        <h2 className="heading text-center mb-5">About Me</h2>
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="intro">
              <p className="description">
                {/* Add your description text here */}
                I'm a passionate frontend developer with expertise in modern web technologies. 
                I love creating responsive and user-friendly interfaces that provide great user experiences.
              </p>
              <button className="btn btn-primary mt-3 cv">
                <MdOutlineFileDownload className="me-2" /> Download CV
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="skill">
              <h2 className="mb-4">Skills</h2>
              <div className="mb-3">
                <label htmlFor="html" className="form-label">HTML 80%</label>
                <div className="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar bg-success" style={{width: "80%"}}></div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="css" className="form-label">CSS 70%</label>
                <div className="progress" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar bg-success" style={{width: "70%"}}></div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="js" className="form-label">JavaScript 60%</label>
                <div className="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar bg-success" style={{width: "60%"}}></div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="bootstrap" className="form-label">Bootstrap 70%</label>
                <div className="progress" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar bg-success" style={{width: "70%"}}></div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="react" className="form-label">React 50%</label>
                <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar bg-success" style={{width: "50%"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;