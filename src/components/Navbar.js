import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">Fitness Tracker</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/workouts">Workouts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/history">History</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings">Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
