import React, { useEffect, useState, useRef } from 'react'
import appstore from '../assets/welcome/app_store.png';
import googleplay from '../assets/welcome/google_play.png';
import thankYou from '../assets/thank_you.png';
import Facebook from '../assets/footer/Facebook.png';
import Instagram from '../assets/footer/Instagram.png';
import Linkedin from '../assets/footer/Linkedin.png';
import Youtube from '../assets/footer/Youtube.png';
import logo from '../assets/logo.png'
import '../styles/Footer.scss'
import Model from '../components/Model';

const Footer = () => {

    const text = useRef();
    const [model, setModel] = useState(false);
    
    const openModel = () => {
        console.log('Reached')
        setModel(true);
    }
    
    const closeModel = () => {
        setModel(false);
    }

    return (
        <footer>
            <div className="footer-mobile__content">
            <Model closeModel={closeModel} open={model} />
                <ul className="links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Career</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <button>Become a Partner</button>
                </ul>
                <div className="logo">
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
                <p>Revolutionizing how people travel by making them luggage free.</p>
                <div className="footer-appLinks__container">
                    <p>Download The APP From</p>
                    <div className="footer-app__download">
                        <a>
                    <img onClick={openModel} src={appstore} alt="Apple Store" />
                    <img onClick={openModel} src={googleplay} alt="Google PlayStore" />
                    </a>
                    </div>
                </div>
                <div className="footer-social-links">
                    <img src={Facebook} alt="Facebook" />
                    <img src={Instagram} alt="Facebook" />
                    <img src={Linkedin} alt="Facebook" />
                    <img src={Youtube} alt="Facebook" />
                </div>
            </div>
            <div className="oqpai-footer__colLeft">
                <img className='footer-thank__you' src={thankYou} alt="Thank You" />
                <div className="oqpai-footer__colLeft_content">
                    <div className="footer-logo__container">
                        <a className='footer-logo'><img src={logo} alt="" /></a>
                        <p>Revolutionizing how people travel by making them luggage free.</p>

                    </div>
                    <div className="footer-appLinks__container">
                        <p>Download The APP From</p>
                        <div className="footer-app__download">
                        <a>
                        <img onClick={openModel} src={appstore} alt="Apple Store" />
                        <img onClick={openModel} src={googleplay} alt="Google PlayStore" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="oqpai-footer__colRight">
            <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#/about">About</a></li>
                    <li><a href="/#/career">Career</a></li>
                    <li><a href="/#/contact-us">Contact Us</a></li>
                </ul>
                <div>
                <a href="/#/partner">
              <button className='footer-button'>Become a Partner</button>
              </a>
                </div>
                <div className="footer-connect">
                    <p>Connect With Us On</p>
                    <div className="footer-social-links">
                        <a href="https://www.facebook.com/oqpaisystem" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" /></a>
                        <a href="https://www.instagram.com/oqpaiofficial/?hl=en" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" /></a>
                        <a href="https://www.linkedin.com/company/oqpai/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin" /></a>
                        <a href="https://www.youtube.com/channel/UCCzkm8VwHBZGjFB--E0QsMw" target="_blank" rel="noopener noreferrer"><img src={Youtube} alt="Youtube" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;