import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated

  if (!isAuthenticated) {
    return <Navigate to="/signup" />; // Redirect to signup if not authenticated
  }

  return children;
};

export default ProtectedRoute;
