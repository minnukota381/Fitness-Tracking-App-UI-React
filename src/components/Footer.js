import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Fitness Tracker. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-right">
            <a
              href="https://www.linkedin.com/in/minnukota381/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-3"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/minnukota381/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-3"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/minnukota381"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;