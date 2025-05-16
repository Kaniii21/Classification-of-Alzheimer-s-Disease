import React, { useState } from 'react';
import './ModelComparisonPage.css';
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

function ModelComparisonPage() {
  // State to track which metric is being viewed
  const [activeMetric, setActiveMetric] = useState('accuracy');
  
  // Mock model comparison data
  const modelData = {
    models: ['Random Forest', 'Logistic Regression', 'SVM', 'KNN'],
    metrics: {
      accuracy: [0.862, 0.839, 0.814, 0.791],
      precision: [0.871, 0.852, 0.829, 0.804],
      recall: [0.835, 0.818, 0.791, 0.773],
      f1: [0.853, 0.834, 0.810, 0.788]
    }
  };

  // Function to format labels with proper capitalization
  const formatMetricLabel = (metric) => {
    switch(metric) {
      case 'f1': return 'F1 Score';
      default: return metric.charAt(0).toUpperCase() + metric.slice(1);
    }
  };

  // Prepare bar chart data for the selected metric
  const barChartData = {
    labels: modelData.models,
    datasets: [
      {
        label: formatMetricLabel(activeMetric),
        data: modelData.metrics[activeMetric],
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

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Model Performance: ${formatMetricLabel(activeMetric)}`,
        font: {
          size: 16,
          weight: 'bold'
        }
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: Math.min(...modelData.metrics[activeMetric]) - 0.05,
        max: 1,
        ticks: {
          callback: function(value) {
            return (value * 100).toFixed(0) + '%';
          }
        }
      }
    }
  };

  return (
    <div className="model-comparison-page">
      <h2>Model Comparison</h2>
      <p className="model-intro">
        Compare the performance of different machine learning models used for Alzheimer's disease classification.
      </p>

      <div className="metric-selector">
        <p>Select a metric to compare:</p>
        <div className="metric-buttons">
          <button 
            className={`metric-button ${activeMetric === 'accuracy' ? 'active' : ''}`}
            onClick={() => setActiveMetric('accuracy')}
          >
            Accuracy
          </button>
          <button 
            className={`metric-button ${activeMetric === 'precision' ? 'active' : ''}`}
            onClick={() => setActiveMetric('precision')}
          >
            Precision
          </button>
          <button 
            className={`metric-button ${activeMetric === 'recall' ? 'active' : ''}`}
            onClick={() => setActiveMetric('recall')}
          >
            Recall
          </button>
          <button 
            className={`metric-button ${activeMetric === 'f1' ? 'active' : ''}`}
            onClick={() => setActiveMetric('f1')}
          >
            F1 Score
          </button>
        </div>
      </div>

      <div className="card">
        <div className="model-summary-chart">
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>

      <div className="model-details">
        <div className="card">
          <h3>Model Descriptions</h3>
          
          <div className="model-description-item">
            <h4>Random Forest</h4>
            <p>An ensemble learning method that constructs multiple decision trees during training and outputs the class that is the mode of the classes from individual trees.</p>
            <p>Best for handling complex, non-linear relationships in the data.</p>
          </div>
          
          <div className="model-description-item">
            <h4>Logistic Regression</h4>
            <p>A statistical model that uses a logistic function to model a binary dependent variable, offering good interpretability.</p>
            <p>Works well with linearly separable data and provides clear feature importance.</p>
          </div>
          
          <div className="model-description-item">
            <h4>Support Vector Machine (SVM)</h4>
            <p>Finds the hyperplane that best divides a dataset into classes, maximizing the margin between classes.</p>
            <p>Effective in high-dimensional spaces and versatile through different kernel functions.</p>
          </div>
          
          <div className="model-description-item">
            <h4>K-Nearest Neighbors (KNN)</h4>
            <p>Classifies new cases based on a similarity measure to the K most similar training examples.</p>
            <p>Simple to implement and naturally handles multi-class cases.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelComparisonPage; 