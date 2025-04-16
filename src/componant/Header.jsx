import React, { useState, useEffect } from 'react';
import "../scss/layouts/header.scss";

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
    <header className={`navbar navbar-expand-lg py-4 bg-body-dark ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo"><a href="/home">BN.</a></div>
        
        {/* Responsive Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        
        {/* Responsive Menu */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="mb-0 ms-auto gap-4 align-items-center menu-items" id="menu_list">
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