import React, { useState } from 'react';
import { fetchData } from '../../main.js'; 
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetchData('/user/login', {
        username,
        password,
      }, 'POST');

      if (!data.message) {
        setMessage('Login successful!');
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/profile');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
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
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {message && <p className="text-center mt-3">{message}</p>}
    </div>
  );
};

export default Login;