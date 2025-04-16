// src/components/ReviewChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ReviewChart = ({ sentiment }) => {
  const data = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        label: 'Reviews',
        data: [
          sentiment.positive || 0,
          sentiment.neutral || 0,
          sentiment.negative || 0
        ],
        backgroundColor: ['#4caf50', '#ffeb3b', '#f44336']
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index' }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  return <Bar data={data} options={options} />;
};

export default ReviewChart;
