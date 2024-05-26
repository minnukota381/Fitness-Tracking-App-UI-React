import React from 'react';
import './styles/FriendsList.css';

const FriendsList = () => {
    const friends = [
        { name: "Max Stone", activity: "Weekly Bicycle", time: "10 min ago" },
        { name: "Grisha Jack", activity: "Slow Jogging", time: "22 min ago" },
        { name: "Levi Patrick", activity: "Morning Swim", time: "32 min ago" },
        { name: "Cody Bryan", activity: "Quick Sprint", time: "37 min ago" },
        { name: "Max Stone", activity: "Hiking", time: "1 hour ago" },
    ];

    return (
        <div className="friends-list">
            <h2>Friends</h2>
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
        </div>
    );
};

export default FriendsList;
