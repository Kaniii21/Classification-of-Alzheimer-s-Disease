import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardStats.css';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashboardStats({ stats }) {
  // Prepare data for the chart
  const chartData = {
    labels: ['Logistic Regression', 'Random Forest', 'SVM', 'KNN'],
    datasets: [
      {
        label: 'Accuracy',
        data: [
          stats.algorithmsComparison.logisticRegression,
          stats.algorithmsComparison.randomForest,
          stats.algorithmsComparison.svm,
          stats.algorithmsComparison.knn
        ],
        backgroundColor: [
          'rgba(63, 81, 181, 0.7)',
          'rgba(245, 0, 87, 0.7)',
          'rgba(76, 175, 80, 0.7)',
          'rgba(255, 152, 0, 0.7)'
        ],
        borderColor: [
          'rgba(63, 81, 181, 1)',
          'rgba(245, 0, 87, 1)',
          'rgba(76, 175, 80, 1)',
          'rgba(255, 152, 0, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Model Accuracy Comparison',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 0.7,
        max: 0.9,
        ticks: {
          callback: function(value) {
            return (value * 100).toFixed(0) + '%';
          }
        }
      }
    }
  };

  return (
    <div className="dashboard-stats">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{stats.totalPredictions}</div>
          <div className="stat-label">Total Predictions</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.accuracyRate}</div>
          <div className="stat-label">Accuracy Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.featuresUsed}</div>
          <div className="stat-label">Features Used</div>
        </div>
      </div>

      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="stats-footer">
        <Link to="/models" className="view-all-link">
          View Detailed Model Comparison
        </Link>
      </div>
    </div>
  );
}

export default DashboardStats; 