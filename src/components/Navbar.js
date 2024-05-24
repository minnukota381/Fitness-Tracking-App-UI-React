import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'true'
  );

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ${
        isDarkMode ? 'bg-dark' : 'bg-primary'
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Fitness Tracker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isNavbarExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isNavbarExpanded ? 'show' : ''
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/workouts">
                Workouts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/history">
                History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings">
                Settings
              </a>
            </li>
            <li className="nav-item theme-toggle">
              <button className="btn btn-link nav-link" onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;