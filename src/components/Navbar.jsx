
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import logo from './Assets/logo.png';
import "./Navbar.css";

function Navbar({ openCallbackPopup }) {
    return (
        <div className="navbar">
            <div className="left">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="right">
                <button className="callback-button" onClick={openCallbackPopup}>
                    <FaPhone />
                    Request a Callback
                </button>
                <img
                    src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
                    alt="Profile"
                    className="profile-image"
                />
            </div>
        </div>
    );
}

export default Navbar;
