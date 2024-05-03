import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/workouts/create">Create Workout</Link>
      </li>
      <li>
        <Link to="/workouts">Workout List</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;


