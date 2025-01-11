import pandas as pd
import requests
from io import StringIO

from src.data_preprocessing import load_data, preprocess_data
from src.model import train_model, evaluate_model, get_feature_importance
from src.visualization import (plot_correlation_matrix, plot_diagnosis_distribution,
                               plot_age_distribution, plot_confusion_matrix,
                               plot_feature_importance)

def main():
    # Load data
    file_path = "C:/Users/Kanika Barik/.ms-ad/Downloads/archive/alzheimers_disease_data.csv"
    data = load_data(file_path)

    # Display basic information about the dataset
    print(data.head())
    print(data.info())

    # Exploratory Data Analysis (EDA)
    print("\nDescriptive Statistics:")
    print(data.describe())

    # Check for missing values
    print("\nMissing Values:")
    print(data.isnull().sum())

    # Generate visualizations
    plot_correlation_matrix(data)
    plot_diagnosis_distribution(data)
    plot_age_distribution(data)

    # Preprocess data
    X_train, X_test, y_train, y_test, feature_names = preprocess_data(data)

    # Train model
    model = train_model(X_train, y_train)

    # Evaluate model
    cm, y_pred = evaluate_model(model, X_test, y_test)

    # Generate model-related visualizations
    plot_confusion_matrix(cm)
    feature_importance = get_feature_importance(model, feature_names)
    plot_feature_importance(feature_importance)

    print("\nAnalysis complete. Check the results/figures/ directory for generated visualizations.")

if __name__ == "__main__":
    main()

