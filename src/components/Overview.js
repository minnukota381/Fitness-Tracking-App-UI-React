import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import './styles/Overview.css';

// Register components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Overview = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Steps',
                data: [],
                backgroundColor: 'rgba(106, 76, 147, 0.2)',
                borderColor: '#6a4c93',
                borderWidth: 2,
                pointBackgroundColor: '#ff6f61',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#ff6f61',
                pointHoverBorderColor: '#fff',
                fill: true, // Enable filling under the line
            },
        ],
    });

    useEffect(() => {
        fetch('https://mockapi.io/endpoint') // Replace with your API endpoint
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(apiData => {
                setData({
                    labels: apiData.months,
                    datasets: [
                        {
                            label: 'Steps',
                            data: apiData.steps,
                            backgroundColor: 'rgba(106, 76, 147, 0.2)',
                            borderColor: '#6a4c93',
                            borderWidth: 2,
                            pointBackgroundColor: '#ff6f61',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#ff6f61',
                            pointHoverBorderColor: '#fff',
                            fill: true, // Enable filling under the line
                        },
                    ],
                });
            })
            .catch(error => {
                console.error('Fetch error:', error);
                // Fallback data or message
                setData({
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'Steps',
                            data: [3000, 5000, 7000, 9000, 8000, 10000, 12000, 14000, 13000, 15000, 16000, 17000],
                            backgroundColor: 'rgba(106, 76, 147, 0.2)',
                            borderColor: '#6a4c93',
                            borderWidth: 2,
                            pointBackgroundColor: '#ff6f61',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#ff6f61',
                            pointHoverBorderColor: '#fff',
                            fill: true, // Enable filling under the line
                        },
                    ],
                });
            });
    }, []);

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: '#fff',
                },
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: '#fff',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            line: {
                tension: 0.4, // Smoother curves
            },
        },
    };

    return (
        <div className="overview">
            <h2>Overview</h2>
            <div className="overview-content">
                <div className="stats">
                    <div className="stat">
                        <h3>Total Time</h3>
                        <p>748 Hr</p>
                    </div>
                    <div className="stat">
                        <h3>Total Steps</h3>
                        <p>9,178 St</p>
                    </div>
                    <div className="stat">
                        <h3>Target</h3>
                        <p>9,200 St</p>
                    </div>
                </div>
                <div className="chart">
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default Overview;