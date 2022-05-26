import React from 'react'
import '../styles/Navbar.scss';
import menu from '../assets/navbar/menu.png';
import home from '../assets/navbar/home.png';
import about from '../assets/navbar/about.png';
import career from '../assets/navbar/career.png';
import contact from '../assets/navbar/contact.png';
import partner from '../assets/navbar/partner.png';

const Navbar = () => {

    const toggleSideBar = (event) => {
        if(event.target.className == "menu" || event.target.className == "menu active"){
            let sideMenu = document.querySelector(".mobile-menu");
            let menuOverlay = document.querySelector(".mobile-overlay");
            let menu = document.querySelector(".menu");
            sideMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            menu.classList.toggle('active');
            
        }
    }
    
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
            <div onClick={toggleSideBar} className="hamburger">
                <img className='menu' src={menu} alt="Menu" />
            </div>
        </nav>
        <div className="mobile-overlay">

        </div>
        <div className="mobile-menu">
            <ul className="mobile-links">
                <li>
                    <img src={home} alt="" />
                    <p>Home</p>
                </li>
                <li>
                    <img src={about} alt="" />
                    <p>About</p>
                </li>
                <li>
                    <img src={career} alt="" />
                    <p>Career</p>
                </li>
                <li>
                    <img src={contact} alt="" />
                    <p>Contact Us</p>
                </li>
                <li>
                    <img src={partner} alt="" />
                    <p>Become a Partner</p>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar