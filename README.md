# Alzheimer's Disease Classification Project

Conducted end-to-end machine learning project using clinical dataset (alzheimers_disease_data.csv)
## Overview
This project implements a machine learning model to predict Alzheimer's disease diagnosis based on medical and lifestyle data. The analysis includes comprehensive exploratory data analysis (EDA), data preprocessing, model building, and visualization of results using Python.

## Table of Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Data Analysis Pipeline](#data-analysis-pipeline)
- [Results Interpretation](#results-interpretation)
- [Visualizations](#visualizations)
- [Contributing](#contributing)

## Requirements
- Python 3.8+
- pandas
- numpy
- scikit-learn
- matplotlib
- seaborn
- requests

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/alzheimers-classification.git
cd alzheimers-classification
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate
```

3. Install required packages:
```bash
pip install -r requirements.txt
```

## Project Structure
```
alzheimers-classification/
├── data/
│   └── README.md
├── notebooks/
│   └── exploratory_analysis.ipynb
├── src/
│   ├── __init__.py
│   ├── data_preprocessing.py
│   ├── model.py
│   └── visualization.py
├── results/
│   └── figures/
├── requirements.txt
├── README.md
└── alzheimers_analysis.py
```

## Usage
Run the main analysis script:
```bash
python alzheimers_analysis.py
```

The script will execute the complete analysis pipeline and save visualizations in the `results/figures` directory.

## Data Analysis Pipeline

### 1. Data Loading and EDA
- Imports necessary libraries and fetches data
- Displays basic dataset information and statistics
- Checks for missing values
- Generates correlation matrix
- Visualizes diagnosis and age distributions

### 2. Data Preprocessing
- Converts categorical variables to numeric format
- Separates features and target variables
- Splits data into training and testing sets
- Scales features using StandardScaler

### 3. Model Building
- Implements Random Forest Classifier
- Trains model on preprocessed data
- Generates predictions on test set
- Evaluates model performance

### 4. Visualization Generation
- Correlation matrix heatmap
- Diagnosis distribution plots
- Age distribution by diagnosis
- Confusion matrix
- Feature importance ranking

## Results Interpretation

### Classification Metrics
The model's performance can be evaluated through:
- Precision: Accuracy of positive predictions
- Recall: Ability to find all positive cases
- F1-score: Harmonic mean of precision and recall
- Confusion matrix: Detailed breakdown of predictions

### Key Visualizations
1. **Correlation Matrix**: Identifies relationships between variables
2. **Diagnosis Distribution**: Shows class balance in dataset
3. **Age Distribution**: Reveals age patterns across diagnoses
4. **Feature Importance**: Highlights most influential predictors

## Visualizations
All generated visualizations are saved in the `results/figures` directory:
- correlation_matrix.png
- diagnosis_distribution.png
- age_distribution.png
- confusion_matrix.png
- feature_importance.png

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
