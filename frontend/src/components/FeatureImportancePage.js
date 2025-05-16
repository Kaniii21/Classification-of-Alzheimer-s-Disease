import React from 'react';
import './FeatureImportancePage.css';
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

function FeatureImportancePage() {
  // Mock feature importance data (based on the values from the notebook)
  const featureImportanceData = {
    randomForest: {
      features: [
        'nWBV', 'Age', 'EDUC', 'SES', 'MMSE', 
        'eTIV', 'ASF', 'CDR', 'Gender'
      ],
      importance: [
        0.273, 0.152, 0.136, 0.120, 0.118, 
        0.075, 0.064, 0.057, 0.005
      ]
    },
    logisticRegression: {
      features: [
        'Age', 'nWBV', 'MMSE', 'EDUC', 'CDR', 
        'SES', 'eTIV', 'ASF', 'Gender'
      ],
      importance: [
        0.295, 0.263, 0.142, 0.110, 0.099, 
        0.041, 0.032, 0.015, 0.003
      ]
    }
  };

  // Feature descriptions for tooltips
  const featureDescriptions = {
    'nWBV': 'Normalized Whole Brain Volume',
    'Age': 'Patient\'s age in years',
    'EDUC': 'Years of education',
    'SES': 'Socioeconomic status (1-5)',
    'MMSE': 'Mini-Mental State Examination score (0-30)',
    'eTIV': 'Estimated Total Intracranial Volume',
    'ASF': 'Atlas Scaling Factor',
    'CDR': 'Clinical Dementia Rating',
    'Gender': 'Patient\'s gender (M/F)'
  };

  // Prepare data for Random Forest chart
  const randomForestChartData = {
    labels: featureImportanceData.randomForest.features,
    datasets: [
      {
        label: 'Feature Importance',
        data: featureImportanceData.randomForest.importance,
        backgroundColor: 'rgba(63, 81, 181, 0.7)',
        borderColor: 'rgba(63, 81, 181, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for Logistic Regression chart
  const logisticRegressionChartData = {
    labels: featureImportanceData.logisticRegression.features,
    datasets: [
      {
        label: 'Feature Importance',
        data: featureImportanceData.logisticRegression.importance,
        backgroundColor: 'rgba(245, 0, 87, 0.7)',
        borderColor: 'rgba(245, 0, 87, 1)',
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
        text: 'Feature Importance',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      tooltip: {
        callbacks: {
          afterLabel: function(context) {
            const feature = context.label;
            return featureDescriptions[feature] || '';
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Importance Score'
        }
      }
    }
  };

  return (
    <div className="feature-importance-page">
      <h2>Feature Importance Analysis</h2>
      <p className="feature-intro">
        This analysis shows which features contribute most to the classification models 
        for Alzheimer's disease prediction.
      </p>

      <div className="feature-cards">
        <div className="card feature-card">
          <h3>Random Forest Model</h3>
          <div className="chart-container">
            <Bar data={randomForestChartData} options={chartOptions} />
          </div>
          <div className="feature-insights">
            <h4>Key Insights:</h4>
            <ul>
              <li>
                <strong>Brain Volume (nWBV):</strong> The most important feature, suggesting 
                brain atrophy is highly predictive of Alzheimer's.
              </li>
              <li>
                <strong>Age:</strong> Second most important feature, reflecting the 
                age-associated risk of developing Alzheimer's disease.
              </li>
              <li>
                <strong>Education Level:</strong> Higher education levels appear to have a 
                protective effect against cognitive decline.
              </li>
            </ul>
          </div>
        </div>

        <div className="card feature-card">
          <h3>Logistic Regression Model</h3>
          <div className="chart-container">
            <Bar data={logisticRegressionChartData} options={chartOptions} />
          </div>
          <div className="feature-insights">
            <h4>Key Insights:</h4>
            <ul>
              <li>
                <strong>Age:</strong> The primary factor in the logistic regression model, 
                showing strong association with Alzheimer's risk.
              </li>
              <li>
                <strong>Brain Volume (nWBV):</strong> Close second in importance, confirming 
                its critical role in classification.
              </li>
              <li>
                <strong>MMSE Score:</strong> Cognitive test results are more heavily weighted 
                in this model compared to Random Forest.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card feature-explanation">
        <h3>Understanding These Features</h3>
        <ul className="feature-list">
          {Object.entries(featureDescriptions).map(([feature, description]) => (
            <li key={feature} className="feature-item">
              <div className="feature-name">{feature}</div>
              <div className="feature-description">{description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FeatureImportancePage; 