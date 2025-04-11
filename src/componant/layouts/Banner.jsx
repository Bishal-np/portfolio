import React from 'react'
import "../../scss/pages/home.scss"
import Logo from "../../assets/banner.png"



function Banner() {
  return (
    <>
      <section className="banner-section  " id='banner'>
        <div className="container d-flex gap-4 justify-content-between banner align-items-center">
          <div className="banner-details">
            <h1 className='heading'>I'm Bishal</h1>


            <p className='sub-heading'>
             Front End Developer | Wordpress Designer Freelancer
            </p>
            <button className='hire-me'>Hire Me</button>
          </div>
          <div className="banner-picture">
            <img src={Logo} alt="" />
          </div>
        </div>

      </section>

    </>
  )
}

export default Banner
