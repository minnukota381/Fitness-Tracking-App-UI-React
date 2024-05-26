import React from 'react';
import './styles/Overview.css';

const Overview = () => {
    return (
        <div className="overview">
            <h2>Overview</h2>
            <div className="overview-content">
                <div className="stats">
                    <h3>Total Time</h3>
                    <p>748 Hr</p>
                    <h3>Total Steps</h3>
                    <p>9,178 St</p>
                    <h3>Target</h3>
                    <p>9,200 St</p>
                </div>
                <div className="chart">
                    {/* Placeholder for the chart */}
                </div>
            </div>
        </div>
    );
};

export default Overview;
