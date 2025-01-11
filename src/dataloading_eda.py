import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load data
data = pd.read_csv('C:/Users/Kanika Barik/.ms-ad/Downloads/archive/alzheimers_disease_data.csv')

# Display basic info
print(data.info())
print(data.describe())

# Check for missing values
print(data.isnull().sum())

# Correlation matrix
correlation = data.corr()
sns.heatmap(correlation, annot=True, cmap='coolwarm')
plt.savefig('results/figures/correlation_matrix.png')
plt.show()

# Diagnosis distribution
sns.countplot(x='Diagnosis', data=data)
plt.savefig('results/figures/diagnosis_distribution.png')
plt.show()

# Age distribution
sns.histplot(data, x='Age', hue='Diagnosis', kde=True)
plt.savefig('results/figures/age_distribution.png')
plt.show()