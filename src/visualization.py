import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import os

def ensure_dir(file_path):
    directory = os.path.dirname(file_path)
    if not os.path.exists(directory):
        os.makedirs(directory)

def plot_correlation_matrix(data):
    correlation_matrix = data.corr()
    plt.figure(figsize=(20, 16))
    sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', linewidths=0.5)
    plt.title("Correlation Matrix")
    file_path = '../results/figures/correlation_matrix.png'
    ensure_dir(file_path)
    plt.savefig(file_path)
    plt.close()

def plot_diagnosis_distribution(data):
    plt.figure(figsize=(10, 6))
    sns.countplot(x='Diagnosis', data=data)
    plt.title("Distribution of Alzheimer's Diagnosis")
    file_path = '../results/figures/diagnosis_distribution.png'
    ensure_dir(file_path)
    plt.savefig(file_path)
    plt.close()

def plot_age_distribution(data):
    plt.figure(figsize=(10, 6))
    sns.boxplot(x='Diagnosis', y='Age', data=data)
    plt.title("Age Distribution by Diagnosis")
    file_path = '../results/figures/age_distribution.png'
    ensure_dir(file_path)
    plt.savefig(file_path)
    plt.close()

def plot_confusion_matrix(cm):
    plt.figure(figsize=(8, 6))
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
    plt.title("Confusion Matrix")
    plt.xlabel("Predicted")
    plt.ylabel("Actual")
    file_path = '../results/figures/confusion_matrix.png'
    ensure_dir(file_path)
    plt.savefig(file_path)
    plt.close()

def plot_feature_importance(feature_importance):
    feature_importance = pd.DataFrame(list(feature_importance.items()), columns=['feature', 'importance'])
    feature_importance = feature_importance.sort_values('importance', ascending=False).head(10)
    plt.figure(figsize=(10, 6))
    sns.barplot(x='importance', y='feature', data=feature_importance)
    plt.title("Top 10 Feature Importance")
    file_path = '../results/figures/feature_importance.png'
    ensure_dir(file_path)
    plt.savefig(file_path)
    plt.close()

