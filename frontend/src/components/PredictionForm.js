import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PredictionForm.css';

function PredictionForm({ addPrediction }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    gender: 'M',
    educ: '',
    ses: '2',
    mmse: '',
    cdr: '0',
    etiv: '',
    nwbv: '',
    asf: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // In a real application, you would send this data to your backend
      // For now, we'll simulate a response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock prediction result
      const mockPrediction = {
        id: Math.floor(Math.random() * 1000),
        timestamp: new Date().toISOString(),
        classification: Math.random() > 0.7 ? 'Nondemented' : 'Demented',
        confidence: 0.75 + (Math.random() * 0.2),
        model: 'Random Forest',
        features: formData
      };
      
      // Add prediction to state
      addPrediction(mockPrediction);
      
      // Navigate to dashboard
      navigate('/');
    } catch (err) {
      setError('Error making prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="prediction-form-container">
      <div className="card">
        <h2>Make a New Prediction</h2>
        <p className="form-description">
          Enter patient data to predict Alzheimer's disease classification
        </p>
        
        {error && (
          <div className="alert alert-danger">{error}</div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="0"
                max="120"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="educ">Education (years)</label>
              <input
                type="number"
                id="educ"
                name="educ"
                value={formData.educ}
                onChange={handleChange}
                required
                min="0"
                max="30"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="ses">Socioeconomic Status</label>
              <select
                id="ses"
                name="ses"
                value={formData.ses}
                onChange={handleChange}
                required
              >
                <option value="1">1 (Highest)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Lowest)</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mmse">MMSE Score</label>
              <input
                type="number"
                id="mmse"
                name="mmse"
                value={formData.mmse}
                onChange={handleChange}
                required
                min="0"
                max="30"
              />
              <small className="help-text">Mini-Mental State Examination (0-30)</small>
            </div>
            
            <div className="form-group">
              <label htmlFor="cdr">CDR</label>
              <select
                id="cdr"
                name="cdr"
                value={formData.cdr}
                onChange={handleChange}
                required
              >
                <option value="0">0 (Normal)</option>
                <option value="0.5">0.5 (Very Mild Dementia)</option>
                <option value="1">1 (Mild Dementia)</option>
                <option value="2">2 (Moderate Dementia)</option>
                <option value="3">3 (Severe Dementia)</option>
              </select>
              <small className="help-text">Clinical Dementia Rating</small>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="etiv">eTIV</label>
              <input
                type="number"
                id="etiv"
                name="etiv"
                value={formData.etiv}
                onChange={handleChange}
                required
                min="1000"
                max="2500"
                step="0.01"
              />
              <small className="help-text">Estimated Total Intracranial Volume (mm³)</small>
            </div>
            
            <div className="form-group">
              <label htmlFor="nwbv">nWBV</label>
              <input
                type="number"
                id="nwbv"
                name="nwbv"
                value={formData.nwbv}
                onChange={handleChange}
                required
                min="0.5"
                max="1"
                step="0.001"
              />
              <small className="help-text">Normalized Whole Brain Volume</small>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="asf">ASF</label>
              <input
                type="number"
                id="asf"
                name="asf"
                value={formData.asf}
                onChange={handleChange}
                required
                min="0.5"
                max="2"
                step="0.001"
              />
              <small className="help-text">Atlas Scaling Factor</small>
            </div>
          </div>
          
          <div className="form-buttons">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigate('/')}
              disabled={loading}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Making Prediction...' : 'Make Prediction'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PredictionForm; 