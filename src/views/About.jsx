import React from 'react'
import '../styles/About.scss';
import linkedin from '../assets/about/linkdin_icon.png';
import team1 from '../assets/about/team1.png';
import team2 from '../assets/about/team2.png';
import team3 from '../assets/about/team3.png';
import team4 from '../assets/about/team4.png';
import team5 from '../assets/about/team5.png';
import team6 from '../assets/about/team6.png';

const About = () => {

    const teamInfo = [
        {
            name: "Devanshu Kumar",
            position: "Founder & CEO",
            image: team1,
            linkdin: "https://google.com",
        },
        {
            name: "Prasant Kumar",
            position: "Technical Specialist",
            image: team2,
            linkdin: "https://google.com",
        },
        {
            name: "Tanya Das",
            position: "Chief Design Officer",
            image: team3,
            linkdin: "https://google.com",
        },
        {
            name: "Nikhil Bhatia",
            position: "Co-Founder",
            image: team4,
            linkdin: "https://google.com",
        },
        {
            name: "Jiya Uppal",
            position: "Technical Specialist",
            image: team5,
            linkdin: "https://google.com",
        },
        {
            name: "Aliek Mondal",
            position: "Backend Engineer",
            image: team6,
            linkdin: "https://google.com",
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
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quo quasi in expedita nihil blanditiis, nam saepe ex excepturi modi soluta dolorem dolorum voluptas sed! Numquam veniam quas sed corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam ut tempora dolorem dignissimos alias, accusantium necessitatibus eum animi laudantium nemo illum ratione error excepturi corrupti illo id libero consectetur.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi beatae velit, perspiciatis non corporis ea impedit quia vel alias saepe, tempora dolore iure eum assumenda optio rerum nisi eveniet repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam ut tempora dolorem dignissimos alias, accusantium necessitatibus eum animi laudantium nemo illum ratione error excepturi corrupti illo id libero consectetur.</p>
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