import { Dialog } from '@material-ui/core';
import React, { useState } from 'react'
import support from '../assets/contact/support.png';
import '../styles/components/Model.scss';
import { database } from '../firebase/firebase';
import { collection, addDoc } from "firebase/firestore";

const Model = ({ closeModel, open }) => {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const buttonclick = async (e) => {
        e.preventDefault();
        setLoading(true)

        await addDoc(collection(database, 'NewsLetter'), {
            email,
        }).then((response) => {
            setLoading(false)
            setEmail("");
            alert("Thank you! We will notify you once our service is available in your area.");

        }).catch(err => {
            setLoading(false)
            setEmail("");
            alert("Something went wrong!");
        });

    }

    return (
        <div>
            <Dialog onClose={closeModel} open={open}>
                <div className='model'>
                    <div className="close-button"></div>
                    <div className="left-content">
                        <img src={support} alt="Image" />
                    </div>
                    <div className="right-content">
                        <h1>Subscribe to our news letter!</h1>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" placeholder='Enter Your E-mail*' required />
                        <button onClick = {buttonclick}>Subscribe</button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}


export default Model