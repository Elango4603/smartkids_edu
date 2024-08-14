import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import ErrorBoundary from './errorboundary/ErrorBoundary';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ErrorBoundary>
      <RouterProvider router={router} />
      </ErrorBoundary>
  
  </React.StrictMode>
);

