import React from 'react'
import '../styles/Career.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pickup from '../assets/career/luggage/pickup.png';
import store from '../assets/career/luggage/store.png';
import drop from '../assets/career/luggage/drop.png';
import one from '../assets/career/believe/1.png';
import two from '../assets/career/believe/2.png';
import three from '../assets/career/believe/3.png';
import four from '../assets/career/believe/4.png';
import grid from '../assets/career/grid/grid.png'
import why1 from '../assets/career/whyQQPAI/1.png';
import review from '../assets/welcome/review.png';
import star from '../assets/Icon.png';

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
          <img src={pickup} alt="Pick Up" />
          <img src={store} alt="Store" />
          <img src={drop} alt="Drop Off" />
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
            <p>The Power of <span>team</span> work!</p>
          </div>
          <div className="card">
            <img src={three} alt="" />
            <p>The Power of <span>team</span> work!</p>
          </div>
          <div className="card">
            <img src={four} alt="" />
            <p>The Power of <span>team</span> work!</p>
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
    </div>
  )
}

export default Career