import React from 'react';
import './otpinput.css';

interface OtpPopupProps {
  onClose: () => void;
  OTP: string;
  setOtp: (otp: string) => void;
  onSubmit: () => void;
}

const OtpPopup: React.FC<OtpPopupProps> = ({ onClose, OTP, setOtp, onSubmit }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (/^\d{0,6}$/.test(value)) { // Restrict input to 6 digits
      setOtp(value);
    }
  };

  return (
    <div className="otp-overlay">
      <div className="otp-popup">
        <label  className="otp-title" htmlFor='otp'>Enter OTP</label>
        <input
          type="text"
          name="otp"
          id="otp"
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
