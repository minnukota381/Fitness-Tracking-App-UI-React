import React from 'react';
import { FaBiking, FaRunning, FaWalking } from 'react-icons/fa';
import './styles/ActivityCards.css';

const ActivityCards = () => {
    const activities = [
        { name: "Bicycle Drill", progress: 45, goal: "36 km / weeks", current: "17/36 km", daysLeft: 2, icon: <FaBiking /> },
        { name: "Jogging Hero", progress: 13, goal: "12 km / month", current: "2/12 km", daysLeft: 17, icon: <FaRunning /> },
        { name: "Healthy Busy", progress: 90, goal: "3600 steps / weeks", current: "3200/3600 steps", daysLeft: 3, icon: <FaWalking /> },
    ];

    return (
        <div className="activity-cards">
            {activities.map((activity, index) => (
                <div className="activity-card" key={index}>
                    <div className="activity-header">
                        <div className="activity-icon">{activity.icon}</div>
                        <div className="activity-name">{activity.name}</div>
                    </div>
                    <div className="activity-info">
                        <div className="activity-details">Goal: {activity.goal}</div>
                        <div className="progress-header">
                            <span className="progress-label">Progress</span>
                            <span className="progress-percent">{activity.progress}%</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${activity.progress}%` }}></div>
                        </div>
                        <div className="current-progress">
                            <span>{activity.current}</span>
                            <span className="days-left">{activity.daysLeft} days left</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ActivityCards;
