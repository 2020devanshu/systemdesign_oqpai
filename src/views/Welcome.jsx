import React, { useEffect, useState, useRef } from 'react'
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
import mobile1 from '../assets/welcome/intro/mobile1.png';
import mobile4 from '../assets/welcome/intro/mobile4.png';
import secure1 from '../assets/welcome/secure/1.png';
import secure2 from '../assets/welcome/secure/2.png';
import secure3 from '../assets/welcome/secure/3.png';
import secure4 from '../assets/welcome/secure/4.png';
import secure5 from '../assets/welcome/secure/5.png';
import secure6 from '../assets/welcome/secure/6.png';
import secure7 from '../assets/welcome/secure/7.png';
import Rahul from '../assets/welcome/rahul.png';
import Riya from '../assets/welcome/riya.png';
import Sourav from '../assets/welcome/sourav.png';
import star from '../assets/Icon.png';
import aws from '../assets/welcome/aws.png'
import '../styles/Welcome.scss';
import Model from '../components/Model';

const responsiveCard = {
    margin: 10,
    responsiveClass: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    navClass: "dot",
    // navText: ["Mext", "Prev"],
    responsive: {
        0: {
            items: 2.2,
        },
        400: {
            items: 2.2,
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
const secureCard = {
    margin: 10,
    responsiveClass: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    navClass: "dot",
    // center: true,
    // navText: ["Mext", "Prev"],
    responsive: {
        0: {
            items: 2.2,
        },
        400: {
            items: 2.2,
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
    center: true,
    autoplay: true,
    nav: true,
    // navClass: "dot",
    // navText: ["Mext", "Prev"],
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1000: {
            items: 2.7,
        }
    }
}





const Welcome = () => {

    const text = useRef();
    const [model, setModel] = useState(false);
    
    const openModel = () => {
        setModel(true);
    }

    const closeModel = () => {
        setModel(false);
    }

    useEffect(() => {
        // let txt = text.current.children;
        let index = 0;
        let ind = 0;
        const animateText = () => {
            const txts = document.querySelector(".animate-text").children,
                txtLen = txts.length;

            for (let i = 0; i < txtLen; i++) {
                txts[i].classList.remove("text-in", "text-out");
            }
            txts[index].classList.add("text-in");

            setTimeout(() => {
                txts[index].classList.add("text-out");
            }, 2800);

            setTimeout(() => {
                if (index == txtLen - 1) {
                    index = 0;
                } else {
                    index++;
                }
                animateText();
            }, 3000)

        }
        const animateProductText = () => {
            const txts = document.querySelector(".animated-text").children,
                txtLen = txts.length;

            for (let i = 0; i < txtLen; i++) {
                txts[i].classList.remove("text-in", "text-out");
            }
            txts[ind].classList.add("text-in");

            setTimeout(() => {
                txts[ind].classList.add("text-out");
            }, 2800);

            setTimeout(() => {
                if (ind == txtLen - 1) {
                    ind = 0;
                } else {
                    ind++;
                }
                animateProductText();
            }, 3000)

        }

        animateText();
        animateProductText();
    });

    return (
        <div className='oqpai-homepage'>
            <Model closeModel={closeModel} open={model} />
            {/* Welcome Section */}
            <section className='oqpai-home__section'>
                <div className="oqpai-welcome__content">
                    <div className="col-left">
                        <h3>Book</h3>
                        <h1 ref={text} className='animate-text'>
                            <span>Luggage Storage</span>
                            <span>समान जमा करें</span>
                            <span>સામાન સંગ્રહ</span>
                        </h1>
                        <p>#Anytime #Anywhere</p>

                        <div className='download__apps'>
                            <a>
                                <img onClick={openModel} src={appstore} alt="Apple Store" />
                                <img onClick={openModel} src={googleplay} alt="Google PlayStore" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Intro Section */}
            <section className='oqpai-intro__section'>
                <div className='oqpai-intro__header header'>
                    <h1>
                        Now Travel Luggage Free
                    </h1>
                    <p>Use OQPAI In just "4 Easy Steps"</p>
                </div>

                <div className="oqpai-intro__mobile">
                    <div className="odd">
                        <img src={mobile1} alt="" />
                        <div className="content">
                            <h2>4.Drop Off</h2>
                            <p>Our delivery agent will come at your location when you request for drop off.</p>
                        </div>
                    </div>
                    <div className="even">
                        <img src={mobile4} alt="" />
                        <div className="content">
                            <h2>4.Drop Off</h2>
                            <p>Our delivery agent will come at your location when you request for drop off.</p>
                        </div>
                    </div>
                    <div className="odd">
                        <img src={mobile1} alt="" />
                        <div className="content">
                            <h2>4.Drop Off</h2>
                            <p>Our delivery agent will come at your location when you request for drop off.</p>
                        </div>
                    </div>
                    <div className="even">
                        <img src={mobile4} alt="" />
                        <div className="content">
                            <h2>4.Drop Off</h2>
                            <p>Our delivery agent will come at your location when you request for drop off.</p>
                        </div>
                    </div>
                </div>

                <div className="oqpai-intro__steps">
                    <div className="oqpai-intro__stepsContent">
                        <div className="intro-card">
                            <img src={intro1} alt="" />
                            <h6>1.Book</h6>
                            <div className="hover-card">
                                <h4>1.Book</h4>
                                <p>Book Luggage Storage from OQPAI application in just few clicks!</p>
                            </div>
                        </div>
                        <div className="intro-card">
                            <img src={intro2} alt="" />
                            <h6>2.Pick Up</h6>
                            <div className="hover-card">
                                <h4>2.Pick Up</h4>
                                <p>Our Delivery agent will come to pickup your Luggage in 12 minutes</p>
                            </div>
                        </div>
                        <div className="intro-card">
                            <img src={intro3} alt="" />
                            <h6>3.Enjoy</h6>
                            <div className="hover-card">
                                <h4>3.Enjoy</h4>
                                <p>Enjoy your journey hassel free without worring about Luggage</p>
                            </div>
                        </div>
                        <div className="intro-card">
                            <img src={intro4} alt="" />
                            <h6>4.Drop Off</h6>
                            <div className="hover-card">
                                <h4>4.Drop Off</h4>
                                <p>Our delivery agent will come at your location when you request for drop off.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Download App */}
            <section className="oqpai-download__app">
                <div className="oqpai-into__header header">
                    <h1 className='animated-text'>
                        <span>We'll Make It Easy</span>
                        <span>અમે તેને સરળ બનાવીશું</span>
                        <span>हम इसे आसान बना देंगे</span>
                    </h1>
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
                {/* <div className="fade"></div> */}
                <OwlCarousel {...secureCard} className='oqpai-cards owl-theme'>
                    <div className='card'>
                        <img src={secure1} alt="Bag 1" />
                        <h6>Certified Luggage Storage</h6>
                    </div>
                    <div className='card'>
                        <img src={secure2} alt="Bag 2" />
                        <h6>Verified Delivery Partners</h6>
                    </div>
                    <div className='card'>
                        <img src={secure3} alt="Bag 3" />
                        <h6>Fixed Rate</h6>
                    </div>
                    <div className='card'>
                        <img src={secure4} alt="Bag 4" />
                        <h6>Secure Payment</h6>
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
                        <p>₹79/Bag</p>
                    </div>
                    <div className='pricing__card'>
                        <h6>Daily</h6>
                        <p>₹149/Bag</p>
                    </div>
                    <div className='pricing__card'>
                        <h6>Weekly</h6>
                        <p>₹299/Bag</p>
                    </div>
                    <div className='pricing__card'>
                        <h6>Monthly</h6>
                        <p>₹899/Bag</p>
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
                        <img className='profile' src={Riya} alt="Bag 1" />
                        <h6>Riya Agarwal</h6>
                        <div className="review-stars">
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                        </div>
                        <p>I have survical issue thats why I was not able to travel. But because of this App I am able to travel without worrying about Luggage.</p>
                    </div>
                    <div className='reviewCard'>
                        <img className='profile' src={Sourav} alt="Bag 1" />
                        <h6>Sourav Sinha</h6>
                        <div className="review-stars">
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                        </div>
                        <p>Now I can Travel without worrying about my Luggage. Thank you OQPAI for making my travel luggage free and easy.</p>
                    </div>
                    <div className='reviewCard'>
                        <img className='profile' src={Rahul} alt="Bag 1" />
                        <h6>Rahul Arya</h6>
                        <div className="review-stars">
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                            <img className='star' src={star} alt="" />
                        </div>
                        <p>I have used this Application and It is very useful. The User Interface of App make it very easy to use.</p>
                    </div>
                    
                </OwlCarousel>
            </section>

            {/* <section className="oqpai-our-partners">
                <div className="oqpai-partner__header header">
                    <h1>Our Partners</h1>
                </div>
                <div className="oqpai-partner__content">
                    <div className="companies">
                        <div className="company">
                            <img src={aws} alt="AwS" />
                        </div>
                        <div className="company">
                            <img src={aws} alt="AwS" />
                        </div>
                        <div className="company">
                            <img src={aws} alt="AwS" />
                        </div>
                        <div className="company">
                            <img src={aws} alt="AwS" />
                        </div>
                        <div className="company">
                            <img src={aws} alt="AwS" />
                        </div>

                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Welcome