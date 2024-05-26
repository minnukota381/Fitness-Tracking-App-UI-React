import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <div className="header">
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="user-profile">User</div>
    </div>
  );
}

export default Header;
