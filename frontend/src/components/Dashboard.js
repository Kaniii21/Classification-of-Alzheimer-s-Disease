import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import PredictionSummary from './PredictionSummary';
import DashboardStats from './DashboardStats';

function Dashboard({ predictions }) {
  // Demo statistics for the dashboard
  const demoStats = {
    totalPredictions: predictions.length,
    accuracyRate: '84.2%',
    featuresUsed: 15,
    algorithmsComparison: {
      logisticRegression: 0.84,
      randomForest: 0.86,
      svm: 0.81,
      knn: 0.79
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Alzheimer's Disease Classification Dashboard</h2>
        <Link to="/predict" className="btn btn-primary">Make New Prediction</Link>
      </div>

      <div className="row">
        <div className="col">
          <div className="card">
            <h3>Model Performance Summary</h3>
            <DashboardStats stats={demoStats} />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="recent-predictions-header">
          <h3>Recent Predictions</h3>
          {predictions.length === 0 ? (
            <p className="no-predictions">No predictions have been made yet. <Link to="/predict">Make your first prediction</Link></p>
          ) : (
            <div className="predictions-count">
              Showing {Math.min(5, predictions.length)} of {predictions.length} predictions
            </div>
          )}
        </div>

        {predictions.length > 0 && (
          <div className="recent-predictions-list">
            {predictions.slice(0, 5).map((prediction, index) => (
              <PredictionSummary key={index} prediction={prediction} />
            ))}
          </div>
        )}
      </div>

      <div className="dashboard-quick-links">
        <div className="row">
          <div className="col">
            <div className="card dashboard-link-card">
              <h4>Feature Importance</h4>
              <p>Explore which features contribute most to Alzheimer's classification</p>
              <Link to="/features" className="dashboard-link">View Analysis</Link>
            </div>
          </div>
          <div className="col">
            <div className="card dashboard-link-card">
              <h4>Model Comparison</h4>
              <p>Compare different machine learning models and their performance</p>
              <Link to="/models" className="dashboard-link">View Models</Link>
            </div>
          </div>
          <div className="col">
            <div className="card dashboard-link-card">
              <h4>Dataset Information</h4>
              <p>Learn about the dataset used for training the classification models</p>
              <Link to="/dataset" className="dashboard-link">View Dataset</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 