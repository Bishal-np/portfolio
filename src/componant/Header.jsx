import React, { useState, useEffect } from 'react';
import "../scss/layouts/header.scss";
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <header className={`navbar navbar-expand-lg py-4 bg-body-dark ${isScrolled ? 'scrolled' : ''}`}>

        <div className="container">

          <div className="logo"><a href="/home">BN.</a></div>
          <button className="navbar-toggler  " id='nav-bar-toggle' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "  />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className='d-flex mb-0 ms-auto gap-4 align-items-center menu-items' id='menu_list'>
              <li><a href={`#home`}>Home</a></li>
              <li><a href={`#about`}>About Me</a></li>
              <li><a href={`#services`}>Resume</a></li>
              <li><a href={`#experiences`}>Projects</a></li>
              <li><a href={`#blog`}>Blog</a></li>
              <li><a href={`#contact`}>Contact</a></li>
            </ul>

          </div>
        </div>
      </header>
    </>
  );
}
export default Header;