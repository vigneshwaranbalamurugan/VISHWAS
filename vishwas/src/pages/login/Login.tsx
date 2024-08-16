import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import image from '../../assets/cereals.jpg';


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
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="">
      <div className="image-container"></div>
      <div className="login-container">
<<<<<<< HEAD
        <h2 className="">Sign In</h2>
=======
        <h2 className="">SIGN IN</h2>
        <img src={image} alt='login'></img>
>>>>>>> 187656ac7730e915674b142eae3b9a6a67a3e250
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="tel" // Change type to "tel" for phone number input
              className="form-control"
              id="mobileNumber"
              name="mobileNumber" // Update name to match interface
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="button">
            Login
          </button>
          <div className="link-container">
            <Link to="/signup">
              <p>Don't have an account? Register</p>
            </Link>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Login;
