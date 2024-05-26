import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Dashboard;