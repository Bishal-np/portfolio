import React, { useState, useEffect } from 'react';
import "../scss/layouts/header.scss";
import "../../src/assets/banner.png"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo"><a href="/home">BN.</a></div>
        
       
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        
       
        <div className={`menu-container ${isMenuOpen ? 'show' : ''}`}>
          <ul className="menu-items">
            <img  className='responsive-image' src="../../src/assets/banner.png" alt=""/>
            {['home', 'about', 'services', 'experiences', 'blog', 'contact'].map((item) => (
              <li key={item} onClick={closeMenu}>
                <a href={`#${item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;