import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Welcome from './views/Welcome'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Footer/>
    </div>
  )
}

export default App
