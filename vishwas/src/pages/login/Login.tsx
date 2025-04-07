import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import image from '../../assets/farmer1.png';
import { Backend_URL } from '../../url/backendURL';
interface LoginFormValues {
  mobileNumber: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginFormValues>({
    mobileNumber: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`${Backend_URL}/api/v1/farmer/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);

        localStorage.setItem('islog', 'true');
        localStorage.setItem('mobile',formData.mobileNumber);
        localStorage.setItem('userid', data.userdetails.userid);
        localStorage.setItem('role', data.userdetails.userRole);
        if(!data.userdetails.userdetailsfill)
        {
          window.location.href='/sidebar';
        }
        else if(data.userdetails.userdetailsfill && data.userdetails.userRole=='farmer')
        {
          window.location.href=`/profile/${formData.mobileNumber}`;
        }
        else if(data.userdetails.userdetailsfill && data.userdetails.userRole=='buyer')
          {
            window.location.href=`/cprofile/${formData.mobileNumber}`;
          }
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to sign up');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="login-section">
      <div className="imagelogin-container">
        <img src={image} style={{ width: '100%', height: '100%' }} alt="login" />
      </div>
      <div className="login-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="mobileNumber" className="loginlabel">
              Mobile Number:
            </label>
            <input
              type="tel"
              className="login-control"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              minLength={10}
              maxLength={10}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="password-container">
            <label htmlFor="password" className="loginlabel">
              Password:
            </label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                className="login-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="eye-button"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye-off"
                  >
                    <path d="M17.94 17.94a10 10 0 01-15.66-1.66M1.05 1.05l21.9 21.9M3.5 9.5a10.5 10.5 0 0115-6.36 10.47 10.47 0 013.36 3.36M9.5 3.5A10.5 10.5 0 016.36 8.5M14.5 14.5a10.5 10.5 0 01-3.36 3.36"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-eye"
                  >
                    <path d="M1 12S5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button type="submit" className="loginbutton">
            Login
          </button>
          <div className="loginlink-container">
            <p className="login-p">
              <Link to="/signup">Don't have an account? Register</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
