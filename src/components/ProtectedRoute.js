// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated

//   if (!isAuthenticated) {
//     return <Navigate to="/signup" />; // Redirect to signup if not authenticated
//   }

//   return children; // Render the protected component
// };

// export default ProtectedRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token'); // Retrieve the token from localStorage

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;

