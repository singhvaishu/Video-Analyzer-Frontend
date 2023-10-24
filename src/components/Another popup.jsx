import React, { useState } from 'react';
import './Another popup.css';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AnotherPopup({ isOpen, onClose, handleAnotherAction }) {
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAnotherAction(message);
        onClose();
    };

    return (
        <div className={`another-popup ${isOpen ? 'open' : ''}`}>
            <div className="popup-content">
                <div className="top-icon" >
                    <FontAwesomeIcon icon={faCheck} size="2x" color="green" /> {/* Replace faCheck with the icon you want */}
                </div>
                <h2>Request a call back</h2>
                <p>Our Team will call you shortly in

                    <br />  12-24 hrs<br /> Can't you wait for call?</p>

                <a href="/"> <button type="submit">Check Another Vedio → </button></a>

            </div>
        </div>
    );
}

export default AnotherPopup;
