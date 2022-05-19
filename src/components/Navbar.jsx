import React from 'react'
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <header>
        <nav>
            <a className='oqpai-logo' href="/">O<span>Q</span>PAI</a>
            <div className='oqpai-links'>
                <ul className='oqpai-nav-links'>
                    <li><a className='active' href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Career</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
                <button className="oqpai-partner">
                    Become a Partner
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar