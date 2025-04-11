import React from 'react'

function About() {
  return (
    <>
      <section className="about-section" id='about'>
        <section className="about-section-1 container">
          <h2 className='about-heading'> Who I Am</h2>
          <div className="about">
            <p>I’m a Front-End Developer & WordPress Specialist passionate about crafting clean, responsive websites. With expertise in HTML, CSS, JavaScript, and custom WordPress themes, I focus on user-friendly, high-performance designs that bring ideas to life. <br />
              Let’s collaborate! Whether you need a sleek portfolio or a dynamic business site, I’ll turn your vision into reality—efficiently and beautifully.</p>
            <div>
              <button className="view-work"> View Work</button>
              <button className="download-cv"><a href="public/bishal-nepali-cv (1).pdf">Download CV</a></button></div>
          </div>
        </section>

      </section>

    </>
  )
}

export default About
