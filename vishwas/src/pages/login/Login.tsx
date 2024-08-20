import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import image from '../../assets/farmer1.png'

interface LoginFormValues {
  mobileNumber: string; // Update the interface name
  password: string;
}

const Login = () => {

  const [formData, setFormData] = useState<LoginFormValues>({
    mobileNumber: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/v1/farmer/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);

        alert("Login Successfully"); 
        window.location.href='/market';      // Optionally, you can redirect the user or show a success message
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
    <section className="login-section">
  <div className="imagelogin-container"><img src={image} style={{width:'100%',height:'100%'}} alt='login'></img></div>
  <div className="login-container">
    <h2>Sign In</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="mobileNumber" className="loginlabel">Mobile Number:</label>
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
      <div>
        <label htmlFor="password" className="loginlabel">Password:</label>
        <input
          type="password"
          className="login-control"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" className="loginbutton">Login</button>
      <div className="loginlink-container">
        <p className='login-p'>
          <Link to="/signup">Don't have an account? Register</Link>
        </p>
      </div>
    </form>
  </div>
</section>

  );
};

export default Login;
