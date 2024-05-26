import React from 'react';
import './styles/ActivityCards.css';

function ActivityCards() {
  const activities = [
    { name: 'Bicycle Drill', details: '36 km / week', progress: 45, deadline: '2 days left', icon: '🚴‍♂️' },
    { name: 'Jogging Hero', details: '12 km / month', progress: 13, deadline: '17 days left', icon: '🏃‍♂️' },
    { name: 'Healthy Busy', details: '3600 steps / week', progress: 90, deadline: '3 days left', icon: '🚶‍♂️' }
  ];

  return (
    <div className="activity-cards">
      {activities.map((activity, index) => (
        <div key={index} className="activity-card">
          <div className="activity-header">
            <div className="activity-icon">{activity.icon}</div>
            <div className="activity-name">{activity.name}</div>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${activity.progress}%` }}></div>
          </div>
          <div className="activity-info">
            <div className="activity-details">{activity.details}</div>
            <div className="activity-deadline">{activity.deadline}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivityCards;

