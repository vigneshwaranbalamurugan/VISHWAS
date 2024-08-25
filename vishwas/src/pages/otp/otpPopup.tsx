import React, { useState } from 'react';
import './otpinput.css';

const OtpPopup = ({ onClose,OTP, setOtp,onSubmit}) => {

    const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
        const { value } = event.target;
        if (/^\d{0,6}$/.test(value)) { // Restrict input to 6 digits
            setOtp(value);
        }
    };

    return (
        <div className="otp-overlay">
            <div className="otp-popup">
                <h3 className="otp-title">Enter OTP</h3>
                <input
                    type="text"
                    value={OTP}
                    onChange={handleChange}
                    maxLength={6}
                    className="otp-input"
                />
                <div className="otp-button-container">
                    <button onClick={onSubmit} className="otp-button">Submit</button>
                    <button onClick={onClose} className="otp-close-button">Close</button>
                </div>
            </div>
        </div>
    );
};

export default OtpPopup;

