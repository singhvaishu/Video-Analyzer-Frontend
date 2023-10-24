import React, { useState } from 'react';
import './Request callback.css';
import AnotherPopup from './Another popup';


import axios from 'axios';


function CallbackPopup({ isOpen, onClose, handleCallbackRequest }) {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
    });

    const [isAnotherPopupOpen, setAnotherPopupOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('https://vedioanalyzer.onrender.com/request-callback', {
                name: formData.name,
                email: formData.email,
                phone: formData.mobile,
            });


            console.log(response);
            setAnotherPopupOpen(true);
            onClose();
        } catch (error) {
            // Handle error
            console.error('Error submitting callback request:', error);
            alert('Error submitting callback request. Please try again later.');
        }
    };

    return (
        <div>
            <div className={`callback-popup ${isOpen ? 'open' : ''}`}>
                <div className="popup-content">
                    <h2>Request a Callback</h2>
                    <form className="callback-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                placeholder="Mobile Number"
                                required
                            />
                        </div>

                        <button type="submit">Request Callback</button>
                    </form>
                </div>
            </div>
            {/* Render AnotherPopup if isAnotherPopupOpen is true */}
            {isAnotherPopupOpen && (
                <AnotherPopup isOpen={isAnotherPopupOpen} onClose={() => setAnotherPopupOpen(false)} handleAnotherAction={() => { /* Handle action for AnotherPopup */ }} />
            )}
        </div>
    );
}

export default CallbackPopup;