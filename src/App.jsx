
import React, { useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './views/About'
import Career from './views/Career'
import Welcome from './views/Welcome'
import Contact from './views/Contact';
import Partner from './views/Partner'

const App = () => {

  useEffect(() => {
    var iOS =
      !!navigator.platform &&
      /iPad|iPhone|iPod/.test(navigator.platform);
    if (iOS) {
      document.body.style.fontFamily = "Montserrat";
    }


  });
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Welcome/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/carrer' element={<Career/>} />
          <Route path='/contact-us' element={<Contact/>} />
          <Route path='/partner' element={<Partner/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
