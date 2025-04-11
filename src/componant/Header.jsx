import React, { useState } from 'react'
import "../scss/layouts/header.scss"


function Header() {
  return (
    <header>
      <div className="container nav-item">
        <div className="d-flex p-4 gap-5 nav-menu justify-content-between">
          <div className="logo"><a href="/home">BN.</a></div>
          <nav >
            <ul className='d-flex gap-4 align-items-center menu-items'>
              <li><a href={`#home`}>Home</a></li>
              <li><a href={`#about`}>Who I Am</a></li>
              <li><a href={`#services`}>What I Offer</a></li>
              <li><a href={`#experiences`}>Experiences</a></li>
              <li><a href={`#blog`}>Blog</a></li>
              <li><a href={`#contact`}>Let’s Talk !</a></li>
            </ul>
          </nav>

        </div>
      </div>
    </header>





  )
}

export default Header
