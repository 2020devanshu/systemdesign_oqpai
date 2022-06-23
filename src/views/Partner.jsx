import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/Partner.scss';
import intro1 from '../assets/partner/intro/1.png';
import intro2 from '../assets/partner/intro/2.png';
import delivery1 from '../assets/partner/delivery/1.png';
import delivery2 from '../assets/partner/delivery/2.png';
import delivery3 from '../assets/partner/delivery/3.png';
import storage1 from '../assets/partner/storage/1.png';
import storage2 from '../assets/partner/storage/2.png';
import storage3 from '../assets/partner/storage/3.png';

const Partner = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [selected, setSelect] = useState([]);
    const [cl, setCl] = useState("");

    const responsiveCard = {
        margin: 10,
        responsiveClass: true,
        loop: true,
        // autoplay: false,
        nav: true,
        // center: true,
        navClass: "dot",
        responsive: {
            0: {
                items: 1.6,
            },
            400: {
                items: 1.6,
            },
            600: {
                items: 1.6,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        }
    }

    const introCard = {
        margin: 10,
        responsiveClass: true,
        // loop: true,
        // autoplay: false,
        // nav: true,
        // center: true,
        // navClass: "dot",
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 2,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    }

    const submitForm = () => {

    }

    const selectItem = (item) => {
        console.log(item);
        if (!selected.includes(item)) setSelect(selected.push(item))
        if (selected.includes(item)) setSelect(selected.slice(selected.indexOf(item), 1))
        console.log(selected);
    }
    return (
        <div className='oqpai-partner'>
            <section className="oqpai-partner__intro">
                <div className="intro-content">
                    <h1>With <div className='logo'>O<span>Q</span>PAI</div> you can become</h1>
                    <OwlCarousel {...introCard} className="intro-cards">
                        <div className="card">
                            <img src={intro1} alt="" />
                            <h3>Delivery Partner</h3>
                            <button>Click to know more</button>
                        </div>
                        <div className="card">
                            <img src={intro2} alt="" />
                            <h3>Storage Partner</h3>
                            <button>Click to know more</button>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
            <section className="oqpai-partner__delivery">
                <div className="delivery-content">
                    <div className="header">
                        <p className="subheading">
                            Perks of becoming OQPAIs
                        </p>
                        <h1 className="heading">Delivery Partner</h1>
                    </div>
                    <OwlCarousel {...responsiveCard} className='oqpai-delivery'>
                        <div className='card'>
                            <img src={delivery1} alt="Delivery 1" />
                            <h6>Earn money on each Delivery</h6>
                            <p>Tellus neque interdum imperdiet aliquam a.</p>
                        </div>
                        <div className='card'>
                            <img src={delivery2} alt="Delivery 2" />

                            <h6>Earn money on each Delivery</h6>
                            <p>Tellus neque interdum imperdiet aliquam a.</p>
                        </div>
                        <div className='card'>
                            <img src={delivery3} alt="Delivery 3" />
                            <h6>Earn money on each Delivery</h6>
                            <p>Tellus neque interdum imperdiet aliquam a.</p>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
            <section className="oqpai-partner__delivery">
                <div className="delivery-content">
                    <div className="header">
                        <p className="subheading">
                            Perks of becoming OQPAIs
                        </p>
                        <h1 className="heading">Storage Partner</h1>
                    </div>
                    <OwlCarousel {...responsiveCard} className='oqpai-delivery'>
                        <div className='card'>
                            <img className='adjust' src={storage1} alt="Delivery 1" />
                            <h6>Earn money on each Delivery</h6>
                            <p>Tellus neque interdum imperdiet aliquam a.</p>
                        </div>
                        <div className='card'>
                            <img src={storage2} alt="Delivery 2" />

                            <h6>Earn money on each Delivery</h6>
                            <p>Tellus neque interdum imperdiet aliquam a.</p>
                        </div>
                        <div className='card'>
                            <img className='adjust2' src={storage3} alt="Delivery 3" />
                            <h6>Earn money on each Delivery</h6>
                            <p>Tellus neque interdum imperdiet aliquam a.</p>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
            <section className="oqpai-partner-form">
                <div className="partner-form">
                    <h1 className='heading'>
                        Apply
                    </h1>
                    <form onSubmit={submitForm}>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Full Name*' required />
                        <input value={number} onChange={(e) => setNumber(e.target.value)} type="phone" placeholder='Enter Contact Number*' required />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Type your Query*' required />
                        <div className='apply'>
                            <p className='head'>I am Applying For</p>
                            <div className="select-cards">
                                <div onClick={() => selectItem("delivery")} className={selected.includes('delivery') ? "card active" : "card"}>
                                    <img src={intro1} alt="" />
                                    <p>Delivery Partner</p>
                                </div>
                                <div onClick={() => selectItem("partner")} className={selected.includes('partner') ? "card active" : "card"}>
                                    <img src={intro2} alt="" />
                                    <p>Storage Partner</p>
                                </div>
                            </div>
                        </div>
                        <button className='submit' type='submit'>{loading ? <div className="loader"></div> : 'Apply'}</button>
                        <p className='p'>Our team will reach out to you within 24hr, once applied</p>
                    </form>
                </div>
            </section>
            <section className='oqpai-partner__download'>
                <h3>Store Luggage anytime, anywhere with <br />OQPAI</h3>
                <button className="download_button">Download</button>
            </section>
        </div>
    )
}

export default Partner