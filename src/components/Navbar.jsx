import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import menu from '../assets/navbar/menu.png';
import home from '../assets/navbar/home.png';
import about from '../assets/navbar/about.png';
import career from '../assets/navbar/career.png';
import contact from '../assets/navbar/contact.png';
import partner from '../assets/navbar/partner.png';

const Navbar = () => {
    const location = useLocation();

    const toggleSideBar = (event) => {

        
        if (event.target.className == "menu" || event.target.className == "menu active") {
            let sideMenu = document.querySelector(".mobile-menu");
            let menuOverlay = document.querySelector(".mobile-overlay");
            let menu = document.querySelector(".menu");
            sideMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            menu.classList.toggle('active');
        }
    }

    const closeSideBar = () => {
        let sideMenu = document.querySelector(".mobile-menu");
        let menuOverlay = document.querySelector(".mobile-overlay");
        let menu = document.querySelector(".menu");
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
        menu.classList.remove('active');
    }

    return (
        <>
            <header>
                <nav>
                    <a className='oqpai-logo' href="/">O<span>Q</span>PAI</a>
                    <div className='oqpai-links'>
                        <ul className='oqpai-nav-links'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/carrer">Career</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                        <Link to='/partner' className="oqpai-partner">
                            Become a Partner
                        </Link>

                    </div>
                    <div onClick={toggleSideBar} className="hamburger">
                        <img className='menu' src={menu} alt="Menu" />
                    </div>
                </nav>

            </header>
            <div className="mobile-overlay">

            </div>
            <div className="mobile-menu">
                <ul onClick={closeSideBar} className="mobile-links">
                    <li>
                        <img src={home} alt="" />
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <img src={about} alt="" />
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <img src={career} alt="" />
                        <Link to='/carrer'>Career</Link>
                    </li>
                    <li>
                        <img src={contact} alt="" />
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                        <img src={partner} alt="" />
                        <Link to='/partner'>Become a Partner</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar