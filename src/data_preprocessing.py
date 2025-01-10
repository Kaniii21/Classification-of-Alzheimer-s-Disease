import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

def load_data(url):
    return pd.read_csv(url)

def preprocess_data(data):
    # Convert categorical variables to numeric
    categorical_columns = ['Gender', 'Ethnicity', 'EducationLevel', 'Smoking', 'FamilyHistoryAlzheimers', 
                           'CardiovascularDisease', 'Diabetes', 'Depression', 'HeadInjury', 'Hypertension', 
                           'MemoryComplaints', 'BehavioralProblems', 'Confusion', 'Disorientation', 
                           'PersonalityChanges', 'DifficultyCompletingTasks', 'Forgetfulness']

    for col in categorical_columns:
        data[col] = pd.Categorical(data[col]).codes

    # Separate features and target
    X = data.drop(['Diagnosis', 'PatientID', 'DoctorInCharge'], axis=1)
    y = data['Diagnosis']

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Scale the features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    return X_train_scaled, X_test_scaled, y_train, y_test, X.columns

