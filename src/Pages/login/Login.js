import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../../service/AxiosService';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (data) => {
    try {
      const axiosService = new AxiosService(); 
      const response = await axiosService.create('/api/auth/login', data); 
      const { token } = response.data; 

      localStorage.setItem('jwtToken', token);
      navigate('/Entreprises');
    } catch (error) {
      alert('Authentication failed. Please check your username and password.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
  };
  
  return (
    <div className="login-container">
      <div className='contenu' style={{ border: '3px solid #ccc', padding: '70px' }}>
        <h2>Login</h2> &nbsp;&nbsp;&nbsp;&nbsp;
        <form className='log' onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
