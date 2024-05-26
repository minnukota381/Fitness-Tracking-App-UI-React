import React from 'react';
import './styles/FriendsList.css';

function FriendsList() {
  const friends = [
    { name: 'Max Stone', activity: 'Weekly Bicycle', time: '10 min ago', avatar: 'path/to/avatar1.png' },
    { name: 'Grisha Jack', activity: 'Slow Jogging', time: '22 min ago', avatar: 'path/to/avatar2.png' },
    { name: 'Levi Pattrick', activity: 'Morning Swim', time: '32 min ago', avatar: 'path/to/avatar3.png' },
    { name: 'Cody Bryan', activity: 'Quick Sprint', time: '37 min ago', avatar: 'path/to/avatar4.png' },
    { name: 'Max Stone', activity: 'Hiking', time: '1 hour ago', avatar: 'path/to/avatar1.png' }
  ];

  return (
    <div className="friends-list">
      <h2>Friends</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index} className="friend-item">
            <img src={friend.avatar} alt={`${friend.name} avatar`} className="avatar" />
            <div className="friend-info">
              <div className="name">{friend.name}</div>
              <div className="activity">{friend.activity}</div>
              <div className="time">{friend.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsList;
