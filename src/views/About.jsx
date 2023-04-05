import React from 'react'
import '../styles/About.scss';
import linkedin from '../assets/about/linkdin_icon.png';
import Devanshu from '../assets/about/devanshu.png';
import Anurag from '../assets/about/anurag.png';
import Himanshu from '../assets/about/himanshu.jpg';

const About = () => {

    const teamInfo = [
        {
            name: "Devanshu Kumar",
            position: "Founder & CEO",
            image: Devanshu,
            linkdin: "https://www.linkedin.com/in/coutdev/",
        },
        {
            name: "Anurag Srivastava",
            position: "Co-Founder",
            image: Anurag,
            linkdin: "https://www.linkedin.com/in/anuragsrivast4va/",
        },
        {
            name: "Himanshu Arora",
            position: "CTO",
            image: Himanshu,
            linkdin: "https://www.linkedin.com/in/mansh1397/",
        },
        
    ];

    return (
        <div className='oqpai-about'>
            <section className="oqpai-about__intro">
                <div className="intro-content">
                    <p className='hashtag'>#LuggageFreeIndia</p>
                    <p className='header'>We make travelers, travel without worring about their luggage!</p>
                    <button className='download__oqpai'>Download OQPAI</button>
                </div>
            </section>
            <section className="oqpai-about__us">
                <div className="oqpai-about__content">
                    <h1 className='header'>About us</h1>
                    <div className="content">
                        <p>Oqpai is the world's first cloud storage station which is revolutionizing how people travel by making them luggage free.</p>
                        <p>With oqpai application you could be luggage free in just 3 simple steps. It's one of the most trusted service provider out there in the planet.</p>
                    </div>
                </div>
            </section>
            <section className="oqpai-meet__team">
                <div className="team-content">
                    <h1 className='header'>Meet Our Team</h1>
                    <div className="team-gallery">
                        {teamInfo.map(item => {
                            return (
                                <div className="card">
                                    <img className='team-image' src={item.image} alt="" />
                                    <h3>{item.name}</h3>
                                    <p>{item.position}</p>
                                    <a href={item.linkdin}><img src={linkedin} alt="" /></a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About