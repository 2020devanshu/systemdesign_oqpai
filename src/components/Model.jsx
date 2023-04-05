import { Dialog } from '@material-ui/core';
import React from 'react';
import support from '../assets/contact/support.png';
import '../styles/components/Model.scss';

const Model = ({ closeModel, open }) => {
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
                        <input type="text" placeholder='Enter Your E-mail' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Model