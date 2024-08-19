import React, { useState } from 'react';

const OtpPopup = ({ onClose, onVerify, phoneNumber }) => {
    const [otp, setOtp] = useState('');

    const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
        const { value } = event.target;
        if (/^\d{0,6}$/.test(value)) { // Restrict input to 6 digits
            setOtp(value);
        }
    };

    const handleSubmit = async () => {
        if (otp.length === 6) {
            try {
                const response = await fetch('http://localhost:5000/api/v1/farmer/verify-otp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ phoneNumber: phoneNumber, otp: otp }),
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log('Success:', data.message);
                    alert(data.message);
                    onVerify();
                    onClose();
                } else {
                    const errorData = await response.json();
                    alert(errorData.message || 'Wrong OTP');
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
        <div style={styles.overlay}>
            <div style={styles.popup}>
                <h3 style={styles.title}>Enter OTP</h3>
                <input
                    type="text"
                    value={otp}
                    onChange={handleChange}
                    maxLength={6}
                    style={styles.input}
                />
                <div style={styles.buttonContainer}>
                    <button onClick={handleSubmit} style={styles.button}>Submit</button>
                    <button onClick={onClose} style={styles.closeButton}>Close</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark transparent background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, // Ensure it's on top of other elements
    },
    popup: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
        width: '90%', // Make it responsive
        maxWidth: '400px', // Limit the maximum width
        boxSizing: 'border-box',
    },
    title: {
        margin: '0 0 20px 0',
        fontSize: '24px',
        color: '#333',
    },
    input: {
        fontSize: '18px',
        textAlign: 'center',
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ddd',
        boxSizing: 'border-box',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        flex: '1',
        margin: '0 5px',
    },
    closeButton: {
        backgroundColor: '#f44336',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        flex: '1',
        margin: '0 5px',
    },
};

export default OtpPopup;
