import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginFormValues>({
    email: '',
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
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
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