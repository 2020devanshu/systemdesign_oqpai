import React from 'react'
import appstore from '../assets/welcome/app_store.png';
import googleplay from '../assets/welcome/google_play.png';
import thankYou from '../assets/thank_you.png';
import '../styles/Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="oqpai-footer__colLeft">
                <img className='footer-thank__you' src={thankYou} alt="Thank You" />
                <div className="oqpai-footer__colLeft_content">
                    <div className="footer-logo__container">
                        <a className='footer-logo'>O<span>Q</span>PAI</a>
                        <p>Id massa sapien mattis id a massa amet. Sed interdum non habitant ultrices mi urna ullamcorper faucibus a. Enim lectus.</p>

                    </div>
                    <div className="footer-appLinks__container">
                        <p>Download The APP From</p>
                        <div className="footer-app__download">
                            <img src={appstore} alt="Apple Store" />
                            <img src={googleplay} alt="Google Play Store" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer