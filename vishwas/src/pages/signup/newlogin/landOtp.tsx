import React, { useState } from 'react';
import '../otpinput.css';
import { Backend_URL } from '../../../url/backendURL';
const LandOtpPopup = ({ onClose,onVerify, surveyNumber }) => {
    const [otp, setOtp] = useState('');

    const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
        const { value } = event.target;
        if (/^\d{0,6}$/.test(value)) { 
            setOtp(value);
        }
    };

    const handleSubmit = async () => {
        if (otp.length === 6) {
            try {
                const response = await fetch(`${Backend_URL}/api/v1/requirement/verify-land-otp`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ surverynumber: surveyNumber, otp: otp }),
                });
                const data = await response.json();
                if (response.ok) {
                    console.log('Success:', data.message);
                    alert(data.message);
                    onVerify();
                    onClose();
                } else {
                    alert(data.message || 'Wrong OTP');
                }
            } catch (error) {
                alert('An error occurred. Please try again later.');
                console.error('Error:', error);
            }

        } else {
            alert("Please enter a 6-digit OTP.");
        }
    };

    return (
        <div className="otp-overlay">
            <div className="otp-popup">
                <h3 className="otp-title">Enter OTP</h3>
                <input
                    type="text"
                    value={otp}
                    onChange={handleChange}
                    maxLength={6}
                    className="otp-input"
                />
                <div className="otp-button-container">
                    <button onClick={handleSubmit} className="otp-button">Submit</button>
                    <button onClick={onClose} className="otp-close-button">Close</button>
                </div>
            </div>
        </div>
    );
};

export default LandOtpPopup;

