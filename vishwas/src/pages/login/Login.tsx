import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('User'); 
  
  const handleSubmit = async () => {
    console.log('hi');
  };

  return (
    <section className='d-flex justify-content-center align-items-center vh-100'>
      <div className="login-container shadow p-5 rounded m-5" style={{ width: '100vw' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="userType">User Type:</label>
            <select
              className="form-control"
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="User">User</option>
              <option value="admin">Admin</option>
              <option value="principal">Principal</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mb-3">Login</button>
          <Link to='/register'>
            <p className="text-center">Don't have an account? Register</p>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
