import "../../scss/pages/home.scss";
import Logo from "../../assets/banner.png";
import { TypeAnimation } from 'react-type-animation';

function Banner() {
  return (
    <section className="banner-section" id='banner'>
      <div className="container banner">
        <div className="banner-details">
          <h1 className='heading'>Hi, I'm Bishal</h1>

          <div className="animated-text">
            
            <TypeAnimation
              sequence={[
                'Front-End Developer',
                1000,
                'WordPress Specialist',
                1000,
                'UI/UX Enthusiast',
                1000,
                'Web Designer',
                1000
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={60}
              style={{ 
                fontSize: '1.5rem',
                display: 'inline-block',
                color: '#3498db' 
              }}
              repeat={Infinity}
            />
          </div>
          
          <p className="banner-heading-sub">Building Modern, Responsive & Engaging Websites</p>
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