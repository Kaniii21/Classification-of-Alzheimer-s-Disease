import React from 'react';
import './DatasetInfo.css';

function DatasetInfo() {
  return (
    <div className="dataset-info">
      <h2>Dataset Information</h2>
      <p className="dataset-intro">
        The Alzheimer's Disease classification models are trained on the OASIS (Open Access Series of Imaging Studies) dataset,
        which contains MRI scans and clinical data from individuals with varying cognitive statuses.
      </p>

      <div className="card">
        <h3>Dataset Overview</h3>
        <table className="dataset-table">
          <tbody>
            <tr>
              <td>Source:</td>
              <td>OASIS (Open Access Series of Imaging Studies)</td>
            </tr>
            <tr>
              <td>Sample Size:</td>
              <td>416 subjects</td>
            </tr>
            <tr>
              <td>Age Range:</td>
              <td>18-96 years</td>
            </tr>
            <tr>
              <td>Gender Distribution:</td>
              <td>Male: 38%, Female: 62%</td>
            </tr>
            <tr>
              <td>Class Distribution:</td>
              <td>Nondemented: 72%, Demented: 28%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>Feature Descriptions</h3>
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-name">M/F</div>
            <div className="feature-description">Gender (Male/Female)</div>
          </div>
          <div className="feature-item">
            <div className="feature-name">Age</div>
            <div className="feature-description">Age at time of scan (years)</div>
          </div>
          <div className="feature-item">
            <div className="feature-name">EDUC</div>
            <div className="feature-description">Years of education</div>
          </div>
          <div className="feature-item">
            <div className="feature-name">SES</div>
            <div className="feature-description">Socioeconomic status (1-5; 1=highest)</div>
          </div>
          <div className="feature-item">
            <div className="feature-name">MMSE</div>
            <div className="feature-description">Mini-Mental State Examination score (0-30; 30=best)</div>
          </div>
          <div className="feature-item">
            <div className="feature-name">CDR</div>
            <div className="feature-description">Clinical Dementia Rating (0=no dementia, 0.5=very mild, 1=mild, 2=moderate)</div>
          </div>
          <div className="feature-item">
            <div className="feature-name">eTIV</div>
            <div className="feature-description">Estimated Total Intracranial Volume (mm³)</div>
          </div>
          <div className="feature-item">
            <div className="feature-name">nWBV</div>
            <div className="feature-description">Normalized Whole Brain Volume (ratio)</div>
          </div>
          <div className="feature-item">
            <div className="feature-name">ASF</div>
            <div className="feature-description">Atlas Scaling Factor (unitless)</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Data Processing</h3>
        <div className="processing-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-description">
              <h4>Data Cleaning</h4>
              <p>Missing values were handled by imputation techniques. Outliers were identified and treated appropriately.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-description">
              <h4>Feature Scaling</h4>
              <p>Numerical features were standardized to have a mean of 0 and standard deviation of 1.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-description">
              <h4>Feature Engineering</h4>
              <p>Created additional features like Age*nWBV interaction to capture combined effects.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-description">
              <h4>Train-Test Split</h4>
              <p>Data was split into 80% training and 20% testing sets with stratification by class.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <div className="step-description">
              <h4>Cross-Validation</h4>
              <p>5-fold cross-validation was used to evaluate model performance and tune hyperparameters.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>References & Citations</h3>
        <div className="references">
          <p>
            <strong>OASIS Dataset:</strong> Marcus, D.S., Wang, T.H., Parker, J., Csernansky, J.G., Morris, J.C., Buckner, R.L. (2007). 
            Open Access Series of Imaging Studies (OASIS): Cross-Sectional MRI Data in Young, Middle Aged, Nondemented, and Demented Older Adults. 
            Journal of Cognitive Neuroscience, 19, 1498-1507.
          </p>
          <p>
            <a href="https://www.oasis-brains.org/" target="_blank" rel="noopener noreferrer">OASIS Brains Project</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DatasetInfo; 