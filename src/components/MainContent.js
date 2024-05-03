// src/components/MainContent.js
import React from 'react';
import { FaRunning, FaChartLine, FaBullseye, FaAppleAlt } from 'react-icons/fa';
import styles from './MainContent.css';

const MainContent = () => {
  return (
    <div className={`container mt-4 ${styles.mainContent}`}>
      <h2 className="animate__animated animate__fadeInDown">Welcome to Your Fitness Dashboard</h2>
      <p className="animate__animated animate__fadeInDown">Here's where you can track your fitness journey and achieve your goals!</p>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card animate__animated animate__fadeInLeft">
            <div className="card-body">
              <h5 className="card-title">
                <FaRunning className="mr-2 animate__animated animate__bounce" />
                Track Workouts
              </h5>
              <p className="card-text">
                Log your workouts, including exercises, sets, reps, and weights for strength training, cardio, and more.
              </p>
              <a href="/workouts" className="btn btn-primary animate__animated animate__pulse animate__infinite">
                View Workouts
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card animate__animated animate__fadeInRight">
            <div className="card-body">
              <h5 className="card-title">
                <FaChartLine className="mr-2 animate__animated animate__bounce" />
                View Progress
              </h5>
              <p className="card-text">
                Visualize your progress over time with charts and statistics for weight, body measurements, and performance metrics.
              </p>
              <a href="/progress" className="btn btn-primary animate__animated animate__pulse animate__infinite">
                View Progress
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card animate__animated animate__fadeInLeft">
            <div className="card-body">
              <h5 className="card-title">
                <FaBullseye className="mr-2 animate__animated animate__bounce" />
                Set Goals
              </h5>
              <p className="card-text">
                Set achievable fitness goals for strength, endurance, weight loss, and overall health, and track your journey towards them.
              </p>
              <a href="/goals" className="btn btn-primary animate__animated animate__pulse animate__infinite">
                Set Goals
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card animate__animated animate__fadeInRight">
            <div className="card-body">
              <h5 className="card-title">
                <FaAppleAlt className="mr-2 animate__animated animate__bounce" />
                Nutrition Tracking
              </h5>
              <p className="card-text">
                Log your daily nutrition intake, track macronutrients, and monitor your diet to support your fitness goals.
              </p>
              <a href="/nutrition" className="btn btn-primary animate__animated animate__pulse animate__infinite">
                Nutrition Tracker
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;