import React from 'react'
import Header from './componant/Header'
import Footer from './componant/Footer'
import Banner from './componant/layouts/Banner'
import About from './componant/layouts/About'
import Services from './componant/layouts/Services'
import Contact from './componant/layouts/Contact'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
     
      <Services />

      <Contact />
      <Footer />
    </>
  )
}

export default App

