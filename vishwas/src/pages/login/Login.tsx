import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="login-container">
        <h2 className="">Login</h2>
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
          <button type="submit" className="">
            Login
          </button>
          <Link to="/signup">
            <p className="">Don't have an account? Register</p>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;