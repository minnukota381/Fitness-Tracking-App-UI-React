import React from 'react';
import './styles/Header.css';
import profilePic from './Assets/minnu.JPG';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Dashboard</h1>
                <div className="header-right">
                    <input type="text" placeholder="Search" />
                    <div className="profile-pic">
                        <img src={profilePic} alt="Profile" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

