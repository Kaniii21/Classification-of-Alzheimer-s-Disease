import React from 'react';
import './PredictionSummary.css';

function PredictionSummary({ prediction }) {
  // Format the date nicely
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  // Get appropriate status class for styling
  const getStatusClass = () => {
    switch (prediction.classification) {
      case 'Demented':
        return 'status-danger';
      case 'Nondemented':
        return 'status-success';
      case 'Converted':
        return 'status-warning';
      default:
        return 'status-default';
    }
  };

  // Format confidence as percentage
  const formatConfidence = (confidence) => {
    return `${(confidence * 100).toFixed(1)}%`;
  };

  return (
    <div className="prediction-summary">
      <div className="prediction-header">
        <div className="prediction-id">Prediction #{prediction.id}</div>
        <div className="prediction-date">{formatDate(prediction.timestamp)}</div>
      </div>
      
      <div className="prediction-main">
        <div className="prediction-result">
          <div className="prediction-label">Classification:</div>
          <div className={`prediction-classification ${getStatusClass()}`}>
            {prediction.classification}
          </div>
        </div>
        
        <div className="prediction-confidence">
          <div className="prediction-label">Confidence:</div>
          <div className="confidence-value">{formatConfidence(prediction.confidence)}</div>
          <div className="confidence-bar-container">
            <div 
              className="confidence-bar"
              style={{ width: `${prediction.confidence * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="prediction-model">
        <span className="model-label">Model:</span> {prediction.model}
      </div>
    </div>
  );
}

export default PredictionSummary; 