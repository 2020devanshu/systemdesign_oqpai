import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import appstore from '../assets/welcome/app_store.png';
import googleplay from '../assets/welcome/google_play.png';
import wave from '../assets/welcome/intro_wave.png';
import appDownload from '../assets/welcome/app_download.png'
import bag1 from '../assets/welcome/bags/lug1.png'
import bag2 from '../assets/welcome/bags/lug2.png'
import bag3 from '../assets/welcome/bags/lug3.png'
import bag4 from '../assets/welcome/bags/lug4.png'
import '../styles/Welcome.scss';

const responsiveCard = {
    margin: 20,
    responsiveClass: true,
    autoplay: false,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    }
}


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
                <div className='oqpai-intro__header header'>
                    <h1>Now Travel Luggage Free</h1>
                    <p>Use OQPAI In just "4 Easy Steps"</p>
                </div>

                <div className="oqpai-intro__steps">
                    <img className='wave' src={wave} alt="wave" />
                </div>
            </section>
            {/* Download App */}
            <section className="oqpai-download__app">
                <div className="oqpai-into__header header">
                    <h1>We'll Make It Easy</h1>
                    <p>Download Our App</p>
                </div>
                <img src={appDownload} alt="App Download" />
            </section>
            {/* Our PLans */}
            <section className="oqpai-our__plans">
                <div className="oqpai-plans__header header">
                    <h1>Our Plans</h1>
                    <p>We Have Plans For Every Need</p>
                </div>
                <OwlCarousel {...responsiveCard} className='oqpai-plans'>
                    <div className='card'>
                        <img src={bag1} alt="Bag 1" />
                        <h6>Hourly</h6>
                    </div>
                    <div className='card'>
                        <img src={bag2} alt="Bag 2" />
                        <h6>Daily</h6>
                    </div>
                    <div className='card'>
                        <img src={bag3} alt="Bag 3" />
                        <h6>Weekly</h6>
                    </div>
                    <div className='card'>
                        <img src={bag4} alt="Bag 4" />
                        <h6>Monthly</h6>
                    </div>
                </OwlCarousel>
            </section>
            {/* Secure and Safe */}
            <section className="oqpai-secure__safe">
                <div className="oqpai-secure-safe__header header">
                    <h1>Secure And Safe</h1>
                    <p>Your Luggage Is Our Responsibilty</p>
                </div>
                <OwlCarousel {...responsiveCard} className='oqpai-cards'>
                    <div className='card'>
                        <img src={bag1} alt="Bag 1" />
                        <h6>Hourly</h6>
                    </div>
                    <div className='card'>
                        <img src={bag2} alt="Bag 2" />
                        <h6>Daily</h6>
                    </div>
                    <div className='card'>
                        <img src={bag3} alt="Bag 3" />
                        <h6>Weekly</h6>
                    </div>
                    <div className='card'>
                        <img src={bag4} alt="Bag 4" />
                        <h6>Monthly</h6>
                    </div>
                </OwlCarousel>
            </section>
            {/* Our Pricing */}
            <section className="oqpai-our__pricing">
                <div className="oqpai-pricing__header header">
                    <h1>Our Pricings</h1>
                    <p>More Affordable than any existing storage solution</p>
                </div>
                <div className='oqpai-cards'>
                    <div className='pricing__card'>
                        <h6>Hourly</h6>
                        <p>₹50/Bag</p>
                    </div>
                    <div className='pricing__card'>
                        <h6>Hourly</h6>
                        <p>₹50/Bag</p>
                    </div>
                    <div className='pricing__card'>
                        <h6>Hourly</h6>
                        <p>₹50/Bag</p>
                    </div>
                    <div className='pricing__card'>
                        <h6>Hourly</h6>
                        <p>₹50/Bag</p>
                    </div>
                </div>
            </section>
            {/* We Love Travelers, Travelers Love Us */}
            <section className="oqpai-reviews">
                <div className="oqpai-reviews__header header">
                    <h1>We Love Travelers, Travelers Love Us!</h1>
                    <p>What our users say about OQPAI</p>
                </div>
            </section>
        </div>
    )
}

export default Welcome