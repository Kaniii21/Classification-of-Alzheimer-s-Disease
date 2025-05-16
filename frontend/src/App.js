import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import PredictionForm from './components/PredictionForm';
import FeatureImportancePage from './components/FeatureImportancePage';
import ModelComparisonPage from './components/ModelComparisonPage';
import DatasetInfo from './components/DatasetInfo';

function App() {
  const [predictions, setPredictions] = useState([]);
  
  // Function to add a new prediction result
  const addPrediction = (prediction) => {
    setPredictions([prediction, ...predictions]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard predictions={predictions} />} />
            <Route 
              path="/predict" 
              element={<PredictionForm addPrediction={addPrediction} />} 
            />
            <Route path="/features" element={<FeatureImportancePage />} />
            <Route path="/models" element={<ModelComparisonPage />} />
            <Route path="/dataset" element={<DatasetInfo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 