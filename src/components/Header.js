import React from 'react';
import './styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Dashboard</h1>
                <input type="text" placeholder="Search" />
                <div className="profile-pic">
                    {/* Placeholder for profile picture */}
                </div>
            </div>
        </header>
    );
};

export default Header;
