import React, { useState } from 'react'
import "../scss/layouts/header.scss"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header>
      <div className="container nav-item">
        <div className="d-flex p-4 gap-5 nav-menu justify-content-between">
          <div className="logo">BN.</div>
          <nav >
            <ul className='d-flex gap-4 align-items-center menu-items'>
              <li><Link to={"/home"}>Home</Link></li>
              <li><Link to={"/about"}>Who I Am</Link></li>
              <li><Link to={"/services"}>What I Offer</Link></li>
              <li><Link to={"/experience"}>Experiences</Link></li>
              <li><Link to={"/blog"}>Blog</Link></li>
              <li><Link to={".contact"}>Contact Us</Link></li>
            </ul>
          </nav>

        </div>
      </div>
    </header>





  )
}

export default Header
