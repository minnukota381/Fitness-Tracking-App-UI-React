import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = () => {
    const data = {
        labels: ['Cardio', 'Stretching', 'Treadmill', 'Strength'],
        datasets: [
            {
                data: [30, 40, 30, 20],
                backgroundColor: ['#00b894', '#fdcb6e', '#e17055', '#6c5ce7'],
                hoverBackgroundColor: ['#00b894', '#fdcb6e', '#e17055', '#6c5ce7'],
            },
        ],
    };

    const options = {
        cutoutPercentage: 60,
        plugins: {
            legend: {
                display: true,
                position: 'right',
            },
        },
    };

    return (
        <div style={{ width: '100%', height: '300px' }}>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DonutChart;
