import React from 'react';
import './styles/FriendsList.css';
import { FaUserFriends } from "react-icons/fa";

const FriendsList = () => {
    const friends = [
        { name: "Kavya Balla", activity: "Skipping", time: "10 min ago" },
        { name: "Bhargav Kola", activity: "Slow Jogging", time: "22 min ago" },
        { name: "Sankar Kharada", activity: "Hiking", time: "32 min ago" },
        { name: "Chaitanya Kunchala", activity: "Quick Sprint", time: "37 min ago" },
    ];

    return (
        <div className="friends-list">
            <h2><FaUserFriends />Friends</h2>
            <div className="activity-tabs">
                <button className="active">Activities</button>
                <button>Online</button>
            </div>
            <ul>
                {friends.map((friend, index) => (
                    <li key={index}>
                        <div className="friend-info">
                            <span className="friend-name">{friend.name}</span>
                            <span className="friend-activity">{friend.activity}</span>
                        </div>
                        <span className="friend-time">{friend.time}</span>
                    </li>
                ))}
            </ul>
            <div className="fitness-summary">
                <h2>Fitness Summary</h2>
                <div className="summary-info">
                    <p>Total Distance: 45 km</p>
                    <p>Total Steps: 20,000</p>
                    <p>Calories Burned: 1500 kcal</p>
                </div>
            </div>
        </div>
    );
};

export default FriendsList;
