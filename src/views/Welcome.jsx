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
import intro1 from '../assets/welcome/intro/intro1.png'
import intro2 from '../assets/welcome/intro/intro2.png'
import intro3 from '../assets/welcome/intro/intro3.png'
import intro4 from '../assets/welcome/intro/intro4.png'
import secure1 from '../assets/welcome/secure/1.png';
import secure2 from '../assets/welcome/secure/2.png';
import secure3 from '../assets/welcome/secure/3.png';
import secure4 from '../assets/welcome/secure/4.png';
import secure5 from '../assets/welcome/secure/5.png';
import secure6 from '../assets/welcome/secure/6.png';
import secure7 from '../assets/welcome/secure/7.png';
import review from '../assets/welcome/review.png';
import star from '../assets/Icon.png';
import '../styles/Welcome.scss';

const responsiveCard = {
    margin: 20,
    responsiveClass: true,
    loop: true,
    autoplay: false,
    nav: true,
    navClass: "dot",
    navText: ["Mext", "Prev"],
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
const responsiveReviewCard = {
    margin: 20,
    responsiveClass: true,
    loop: true,
    autoplay: false,
    nav: true,
    navClass: "dot",
    navText: ["Mext", "Prev"],
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
            items: 2.7,
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
                    <div className="oqpai-intro__stepsContent">
                        <div className="intro-card">
                            <img src={intro1} alt="" />
                            <h6>1.Book</h6>
                            <div className="hover-card">
                                <h4>1.Book</h4>
                                <p>Book Luggage Storage from OQPAI application in just few clicks!Book Luggage Storage from OQPAI application in just few clicks!</p>
                            </div>
                        </div>
                        <div className="intro-card">
                            <img src={intro2} alt="" />
                            <h6>1.Book</h6>
                            <div className="hover-card">
                                <h4>1.Book</h4>
                                <p>Book Luggage Storage from OQPAI application in just few clicks!Book Luggage Storage from OQPAI application in just few clicks!</p>
                            </div>
                        </div>
                        <div className="intro-card">
                            <img src={intro3} alt="" />
                            <h6>1.Book</h6>
                            <div className="hover-card">
                                <h4>1.Book</h4>
                                <p>Book Luggage Storage from OQPAI application in just few clicks!Book Luggage Storage from OQPAI application in just few clicks!</p>
                            </div>
                        </div>
                        <div className="intro-card">
                            <img src={intro4} alt="" />
                            <h6>1.Book</h6>
                            <div className="hover-card">
                                <h4>1.Book</h4>
                                <p>Book Luggage Storage from OQPAI application in just few clicks!Book Luggage Storage from OQPAI application in just few clicks!</p>
                            </div>
                        </div>
                    </div>
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
                <OwlCarousel {...responsiveCard} className='oqpai-cards owl-theme'>
                    <div className='card'>
                        <img src={secure1} alt="Bag 1" />
                        <h6>Certified Luggage Storage</h6>
                    </div>
                    <div className='card'>
                        <img src={secure2} alt="Bag 2" />
                        <h6>Certified Luggage Storage</h6>
                    </div>
                    <div className='card'>
                        <img src={secure3} alt="Bag 3" />
                        <h6>Certified Luggage Storage</h6>
                    </div>
                    <div className='card'>
                        <img src={secure4} alt="Bag 4" />
                        <h6>Certified Luggage Storage</h6>
                    </div>
                    <div className='card'>
                        <img src={secure5} alt="Bag 4" />
                        <h6>Certified Luggage Storage</h6>
                    </div>
                    <div className='card'>
                        <img src={secure6} alt="Bag 4" />
                        <h6>Certified Luggage Storage</h6>
                    </div>
                    <div className='card'>
                        <img src={secure7} alt="Bag 4" />
                        <h6>Certified Luggage Storage</h6>
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
                <OwlCarousel {...responsiveReviewCard} className='oqpai-cards owl-theme'>
                    <div className='reviewCard'>
                        <img className='profile' src={review} alt="Bag 1" />
                        <h6>Riya Agarwal</h6>
                        <div className="review-stars">
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi molestias, veritatis asperiores ipsa quo.</p>
                    </div>
                </OwlCarousel>
            </section>
        </div>
    )
}

export default Welcome