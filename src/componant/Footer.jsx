import React from 'react'
import "../scss/layouts/footer.scss"

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='logo'>BN.</h2>
      <div>
        <p className='description'>Follow Me</p>
        <div className="social-icons">
          <ul className='d-flex gap-5  align-items-center  justify-content-center fs-5 text-light icons'>
            <li><a href=""><i className="bi bi-facebook"></i></a></li>
            <li><a href=""><i className="bi bi-pinterest"></i></a></li>
            <li><a href=""><i className="bi bi-linkedin"></i></a></li>
            <li><a href=""><i className="bi bi-github"></i></a></li>
            <li><a href=""><i className="bi bi-whatsapp"></i></a></li>
          </ul>
        </div>
        <div className="copy-right">
          <div className="container copy-right-section">
            <p className='copy'>Copyright © 2025 BishalNepali</p>
          </div>
        </div>
      </div>








    </footer>
  )
}

export default Footer
