import React from 'react'
import appstore from '../assets/welcome/app_store.png';
import googleplay from '../assets/welcome/google_play.png';
import wave from '../assets/welcome/intro_wave.png';
import appDownload from '../assets/welcome/app_download.png'
import '../styles/Welcome.scss';

const Welcome = () => {
    return (
        <div className='oqpai-homepage'>
            {/* Welcome Section */}
            <section className='oqpai-home__section'>
                <div className="oqpai-welcome__content">
                    <div className="col-left">
                        <h3>Book</h3>
                        <h1>Luggage Storage</h1>
                        <p>#Anytime #Anywhere</p>

                        <div className='download__apps'>
                            <a href="/">
                                <img src={appstore} alt="Apple Store" />
                                <img src={googleplay} alt="Google PlayStore" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Intro Section */}
            <section className='oqpai-intro__section'>
                <div className='oqpai-intro__header'>
                    <h1>Now Travel Luggage Free</h1>
                    <p>Use OQPAI In just "4 Easy Steps"</p>
                </div>

                <div className="oqpai-intro__steps">
                    <img className='wave' src={wave} alt="wave" />
                </div>
            </section>
            {/* Download App */}
            <section className="oqpai-download__app">
                <div className="oqpai-into__header">
                    <h1>We'll Make It Easy</h1>
                    <p>Download Our App</p>
                </div>
                <img src={appDownload} alt="App Download" />
            </section>
            {/* Our PLans */}
            <section className="oqpai-our__plans">
                <div className="oqpai-plans__header">
                    <h1>Our Plans</h1>
                    <p>We Have Plans For Every Need</p>
                </div>
                <div className="oqpai-plans">
                    <div className='card'>
                        <img src="" alt="" />
                    </div>
                </div>
            </section>
            {/* Secure and Safe */}
            <section className="oqpai-secure__safe">
                <div className="oqpai-secure-safe__header">
                    <h1>Secure And Safe</h1>
                    <p>Your Luggage Is Our Responsibilty</p>
                </div>
            </section>
        </div>
    )
}

export default Welcome