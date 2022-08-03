import React, { useEffect, useState } from 'react'
import '../styles/Career.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pickup from '../assets/career/luggage/1.png';
import store from '../assets/career/luggage/2.png';
import drop from '../assets/career/luggage/3.png';
import one from '../assets/career/believe/1.png';
import two from '../assets/career/believe/2.png';
import three from '../assets/career/believe/3.png';
import four from '../assets/career/believe/4.png';
import grid from '../assets/career/grid/grid.png'
import why1 from '../assets/career/whyQQPAI/1.png';
import review from '../assets/welcome/review.png';
import star from '../assets/Icon.png';
import Facebook from '../assets/footer/Facebook.png';
import Instagram from '../assets/footer/Instagram.png';
import Linkedin from '../assets/footer/Linkedin.png';
import Youtube from '../assets/footer/Youtube.png';
import job1 from '../assets/career/jobs/1.png';
import job2 from '../assets/career/jobs/2.png';
import job3 from '../assets/career/jobs/3.png';

const responsiveReviewCard = {
  margin: 20,
  responsiveClass: true,
  loop: true,
  center: true,
  autoplay: false,
  nav: true,
  navClass: "dot",

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


const Career = () => {

  const [screen, setScreen] = useState(0);
  const responsiveCard = {
    margin: screen,
    responsiveClass: true,
    loop: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1.2,
      },
      400: {
        items: 1.2,
      },
      600: {
        items: 1.2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  }

  useEffect(() => {
    if (window.screen.width >= 909) {
      setScreen(50);
    } else {
      setScreen(20);
    }
  }, []);

  return (
    <div className='oqpai-career'>
      <div className="oqpai-career__intro">
        <div className="intro-content">
          <p className='hashtag'>#GrowWithUs</p>
          <p className='header'>It's your time to <strong>O<span>Q</span>PAI</strong> a seat towards learning and success!</p>
          <button className='view-opening'>View Openings</button>
        </div>
      </div>
      <div className="oqpai-career__luggage">
        <h1 className='header'>
          We Make Travelers, Travel Without Worring About Their Luggage!
        </h1>
        <div className="luggage-content">
         <div className="card-container">
          <div className="card">
          <h2><span>Pick up</span> from your Location</h2>
            <img src={pickup} alt="" />
            <h3>Pickup</h3>
          </div>
          <div className="card">
            <h2><span>Store</span> at the nearest and safest store house</h2>
            <img className='second' src={store} alt="" />
            <h3>Store</h3>
          </div>
          <div className="card">
            <h2><span>Drop off</span> at your location</h2>
            <img className='third' src={drop} alt="" />
            <h3>DropOff</h3>
          </div>
         </div>
        </div>
      </div>
      <div className="oqpai-career__believe">
        <h1 className='header'>We Believe In-</h1>
        <div className="believe-content">
          <div className="card">
            <img src={one} alt="" />
            <p>The Power of <span>team</span> work!</p>
          </div>
          <div className="card">
            <img src={two} alt="" />
            <p><span>Consistency</span> of work</p>
          </div>
          <div className="card">
            <img src={three} alt="" />
            <p>Understanding what <span>users</span> want</p>
          </div>
          <div className="card">
            <img src={four} alt="" />
            <p>Individuals with <span>Individuality</span></p>
          </div>
        </div>
      </div>
      <div className="oqpai-why__us">
        <p className='subheader'>I know what you are thinking...</p>
        <h1 className='header'>Why O<span>Q</span>PAI?</h1>
        <div className="why-us__content">
          <div className="card">
            <img src={why1} alt="" />
            <h3>A place where work is never boring</h3>
            <p>Our environment is full of enthusiastic and curious people</p>
          </div>
          <div className="card">
            <img src={why1} alt="" />
            <h3>A place where work is never boring</h3>
            <p>Our environment is full of enthusiastic and curious people</p>
          </div>
          <div className="card">
            <img src={why1} alt="" />
            <h3>A place where work is never boring</h3>
            <p>Our environment is full of enthusiastic and curious people</p>
          </div>
          <div className="card">
            <img src={why1} alt="" />
            <h3>A place where work is never boring</h3>
            <p>Our environment is full of enthusiastic and curious people</p>
          </div>
        </div>
      </div>
      <div className="oqpai-career__showcase">
        <img src={grid} alt="" />
      </div>
      <section className="oqpai-jobs">
        <h1 className="header">We are looking for Talented People Like You</h1>
        <p className="subheader">Openings of OQPAI</p>
        <OwlCarousel {...responsiveCard} className='oqpai-cards owl-theme'>
          <div className="card sfirst">
            <img src={job1} alt="Job 1" />
            <h4>Marketing</h4>
            <button className='appy-button'>Apply Now</button>
          </div>
          <div className="card second">
            <img src={job2} alt="Job 2" />
            <h4>Graphic</h4>
            <button className='appy-button'>Apply Now</button>
          </div>
          <div id='card' className="card third">
            <img src={job3} alt="Job 3" />
            <h4>Development</h4>
            <button className='appy-button'>Apply Now</button>
          </div>
        </OwlCarousel>
      </section>
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
      <section className="oqpai-community">
        <h2>Join Our Team To Work At the Most <span>chilled</span> Company ever</h2>
        <button className='view-opening'>View Openings</button>
      </section>
      <section className="oqpai-connect">
        <h1 className='header'>
          Connect with us on
        </h1>
        <div className="social-links">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Facebook" />
          <img src={Linkedin} alt="Facebook" />
          <img src={Youtube} alt="Facebook" />
        </div>
      </section>
    </div>
  )
}

export default Career