import React from 'react';
import './styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRunning, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} className="fa-icon" />
            <span>Home</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faRunning} className="fa-icon" />
            <span>Activities</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faChartBar} className="fa-icon" />
            <span>Statistics</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCog} className="fa-icon" />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
