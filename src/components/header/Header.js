import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logoImage from '../insight.png';

const Header = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="header">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
     
        <div className="login">
        {isLoggedIn ? (
          <button onClick={handleLogout}>
            <i className="fa fa-user-circle" aria-hidden="true" style={{ color: '#007bff' }}></i>
          </button>
        ) : (
          <Link to="/">
            
            <i className="fa fa-sign-out" aria-hidden="true" style={{ color: '#007bff' }}></i>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
