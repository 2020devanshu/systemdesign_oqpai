import React from 'react'
import appstore from '../assets/welcome/app_store.png';
import googleplay from '../assets/welcome/google_play.png';
import wave from '../assets/welcome/intro_wave.png';
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
        </div>
    )
}

export default Welcome