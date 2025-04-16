import React from 'react'
import "../scss/layouts/footer.scss"

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <h2 className='logo'>BN.</h2>
        <div className="footer-main">
          <p className='description'>Follow Me</p>
          <div className="social-icons">
            <ul className='social-links'>
              <li><a href="#"><i className="bi bi-facebook"></i></a></li>
              <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
              <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
              <li><a href="#"><i className="bi bi-github"></i></a></li>
              <li><a href="#"><i className="bi bi-whatsapp"></i></a></li>
            </ul>
          </div>
          <div className="copy-right">
            <div className="copy-right-section">
              <p className='copy'>Copyright © 2025 BishalNepali</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer