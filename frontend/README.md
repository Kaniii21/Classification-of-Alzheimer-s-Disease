# Alzheimer's Disease Classification Frontend

This is a React-based frontend application for visualizing and interacting with Alzheimer's Disease classification models. The application provides an interface to view model performance, make predictions, and explore feature importance.

## Features

- Interactive dashboard with model performance metrics
- Form for submitting patient data to make new predictions
- Feature importance visualization
- Model comparison with performance metrics
- Dataset information and documentation

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Getting Started

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Build for Production

To create a production build:

```
npm run build
```

This will generate optimized static files in the `build` directory.

## Project Structure

- `src/` - Source code
  - `components/` - React components
  - `assets/` - Static assets (images, etc.)
- `public/` - Public assets and HTML template

## Technologies Used

- React
- React Router
- Chart.js / React-Chartjs-2 (for visualizations)
- CSS for styling (no external UI libraries)

## Notes

This frontend is designed to work with a backend API that provides access to the Alzheimer's disease classification models. Currently, the application uses mock data for demonstration purposes. 