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

    useEffect(() => {
       
        // if(location.pathname == '/carrer'){
        // }
    }, []);

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
                            <li><Link to="/">Contact Us</Link></li>
                        </ul>
                        <button className="oqpai-partner">
                            Become a Partner
                        </button>

                    </div>
                    <div onClick={toggleSideBar} className="hamburger">
                        <img className='menu' src={menu} alt="Menu" />
                    </div>
                </nav>

            </header>
            <div className="mobile-overlay">

            </div>
            <div className="mobile-menu">
                <ul className="mobile-links">
                    <li>
                        <img src={home} alt="" />
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <img src={about} alt="" />
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <img src={career} alt="" />
                        <a href='/#/carrer'>Career</a>
                    </li>
                    <li>
                        <img src={contact} alt="" />
                        <a>Contact Us</a>
                    </li>
                    <li>
                        <img src={partner} alt="" />
                        <a>Become a Partner</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar