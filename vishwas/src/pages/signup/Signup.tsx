import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OtpPopup from '../otp/otpPopup';
import './signup.css';
import image from '../../assets/2farmers.png';

interface SignupFormValues {
  phoneNumber: string;
  userRole: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<SignupFormValues>({
    phoneNumber: '',
    userRole: 'farmer',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Partial<SignupFormValues>>({});
  const [isVerified, setVerified] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [otp, setOtp] = useState('');



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const newErrors: Partial<SignupFormValues> = {};

    // Phone number validation: must be 10 digits
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }

    // Password validation: must be at least 6 characters
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm Password validation: must match password
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleverify = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newErrors: Partial<SignupFormValues> = {};
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
      return;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/v1/farmer/request-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber: formData.phoneNumber }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Success:', data);
        alert(`${data.message}`);
        setIsPopupOpen(true);
        setVerified(true);
      } else {
        alert(`${data.message}`);
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
  }

  const handleChangeNum = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setVerified(false);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const verifyOTP = async () => {
    console.log(otp);
    if (otp.length === 6) {
      try {
        const response = await fetch('http://localhost:5000/api/v1/farmer/verify-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phoneNumber: formData.phoneNumber, otp: otp }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log('Success:', data.message);
          alert(data.message);
          setIsPopupOpen(false);
          setIsPopupOpen(false)
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Confirm Password does not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/v1/farmer/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formData.phoneNumber,
          password: formData.password,
          userRole: formData.userRole
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);

        alert("Farmer Registered Successfully");
        setVerified(false);
        setFormData({
          phoneNumber: '',
          password: '',
          confirmPassword: '',
          userRole: 'farmer',
        });
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to sign up');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
    console.log(formData);
  };

  return (

    <section className="signup-section" >
      {isPopupOpen && (
        <OtpPopup
          onClose={() => setIsPopupOpen(false)}
          setOtp={setOtp}
          OTP={otp}
          onSubmit={verifyOTP}
        />
      )}
      <div className="signup-image-container"><img className='signup-image' src={image} style={{ width: '100%', height: '100%' }} alt='signup'></img></div>

      <div className="signup-container">
        <div className="signuu-inner">
          <h2 style={{ marginTop: '5vh' }}>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                className="signup-form-control"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                minLength={10}
                maxLength={10}
                value={formData.phoneNumber}
                onChange={handleChangeNum}
                required
              />
              {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}

            </div>
            {!isVerified && <div>
              <button onClick={handleverify} className="signup-verify-button">Get OTP</button>
            </div>
            }
            {isVerified &&
              <div>
                <div>
                  <label htmlFor="userrole">User Role:</label>
                  <select
                    className="signup-form-control"
                    id="userRole"
                    name="userRole"
                    value={formData.userRole}
                    onChange={handleChange}
                    required
                  >
                    <option value="farmer">Farmer</option>
                    <option value="buyer">Buyer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="signup-form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  {errors.password && <div className="error">{errors.password}</div>}

                </div>

                <div>
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    className="signup-form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}

                </div>

                <button type="submit" className="signup-button">Register</button></div>}

            <div className="signup-link-container">
              <p>
                <Link to="/login">Already have an account? Log In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;