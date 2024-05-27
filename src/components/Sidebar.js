import React from 'react';
import './styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRunning, faChartBar, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { SiNeptune } from "react-icons/si";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <SiNeptune />
      </div>
      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} className="fa-icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faRunning} className="fa-icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faChartBar} className="fa-icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faCog} className="fa-icon" />
          </li>
          <li>
            <FontAwesomeIcon icon={faSignOutAlt} className="fa-icon" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
