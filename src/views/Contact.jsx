import React, { useState } from 'react'
import '../styles/Contact.scss'
import callIcon from '../assets/contact/call.png';
import support from '../assets/contact/support.png';
import { database } from '../firebase/firebase';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(null);

    const faqData = [
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, volutpat, congue in sagittis. Nulla eget suspendisse mattis vulputate eu adipiscing in venenatis.o, malesuada sceler"
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, volutpat, congue in sagittis. Nulla eget suspendisse mattis vulputate eu adipiscing in venenatis.o, malesuada sceler"
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, volutpat, congue in sagittis. Nulla eget suspendisse mattis vulputate eu adipiscing in venenatis.o, malesuada sceler"
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, volutpat, congue in sagittis. Nulla eget suspendisse mattis vulputate eu adipiscing in venenatis.o, malesuada sceler"
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, volutpat, congue in sagittis. Nulla eget suspendisse mattis vulputate eu adipiscing in venenatis.o, malesuada sceler"
        },
    ];

    const submitForm = async (e) => {
        e.preventDefault();
        setLoading(true)
        await database.collection("contactForm").add({
            name,
            email,
            query,
        }).then((response) => {
            setLoading(false)
            setName("");
            setEmail("");
            setQuery("");
            alert("Thank you!");

        }).catch(err => {
            setLoading(false)
            setName("");
            setEmail("");
            setQuery("");
            alert("Something went wrong!");
        });

    }

    const toggle = (i) => {
        if(selected === i) return setSelected(null);
        setSelected(i);
    }

    return (
        <div className="oqpai-contact">
            <section className="oqpai-contact__intro">
                <div className="contact-intro">
                    <div className="content-left">
                        <div className="content-head">
                            <h1>Help and Support</h1>
                            <p>We are here to answer all your questions</p>
                        </div>
                        <div className="content-foot">
                            <div className="divider"></div>
                            <div className="helpline-heading">
                                <img src={callIcon} alt="" />
                                <p>Helpline Number:</p>
                            </div>
                            <h2>+91-9472003529</h2>
                        </div>
                    </div>
                    <div className="content-right">
                        <img src={support} alt="" />
                    </div>
                </div>
            </section>
            <section className="oqpai-faq">
                <div className="faq-content">
                    <h1 className='header'>Common FAQs</h1>
                    <div className="faq-accordation">
                        {faqData.map((item, i) => (
                            <div className="item">
                                <div onClick={() => toggle(i)} className='title'>
                                    <h2>{item.question}</h2>
                                    <span>+</span>
                                </div>
                                <div className={selected === i ? "gap show" : "gap"}></div>
                                <div className={selected === i ? "content show" : "content"}>
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="oqpai-contact-form">
                <div className="contact-form">
                    <h1 className='heading'>
                        Contact us
                    </h1>
                    <form onSubmit={submitForm}>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Full Name*' required />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Your E-mail*' required />
                        <textarea value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Type your Query*' required />
                        <button className='submit' type='submit'>{loading ? <div className="loader"></div> : 'Submit'}</button>
                    </form>
                </div>
            </section>
            <section className='oqpai-contact__download'>
                <h3>Store Luggage anytime, anywhere with <br />OQPAI</h3>
                <button className="download_button">Download</button>
            </section>
        </div>
    )
}

export default Contact