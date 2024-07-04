import React, { useState } from 'react';
import { fetchData } from '../../main.js'; 
import { useNavigate } from 'react-router-dom';

const Register = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const [message, setMessage] = useState('');

  const { username, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setMessage('Passwords must match!!!');
      return;
    }

    try {
      const data = await fetchData('/user/register', {
        username,
        email,
        password,
      }, 'POST');

      if (!data.message) {
        setMessage('Registration successful!');
        setIsAuthenticated(true); // Set authentication state to true
        navigate('/profile');
      } else {
        setMessage(data.message); // Display specific error message from backend
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('An error occurred. Please try again.'); // Generic error message
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Register</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            onChange={onChange}
            value={username}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            value={email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            value={password}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="password2"
            name="password2"
            onChange={onChange}
            value={password2}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      {message && <p className="text-center mt-3">{message}</p>}
    </div>
  );
};

export default Register;