import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  
  // Function to check if link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>Alzheimer's Disease Classification</h1>
        </div>
        <nav className="navigation">
          <ul>
            <li className={isActive('/')}>
              <Link to="/">Dashboard</Link>
            </li>
            <li className={isActive('/predict')}>
              <Link to="/predict">Make Prediction</Link>
            </li>
            <li className={isActive('/features')}>
              <Link to="/features">Feature Importance</Link>
            </li>
            <li className={isActive('/models')}>
              <Link to="/models">Model Comparison</Link>
            </li>
            <li className={isActive('/dataset')}>
              <Link to="/dataset">Dataset Info</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 