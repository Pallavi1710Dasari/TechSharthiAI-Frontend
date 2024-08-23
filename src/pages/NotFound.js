// src/pages/NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <img 
        src="https://img.freepik.com/premium-vector/404-error-people-trying-connect-disconnected-wires-from-outlet_773186-1051.jpg?w=826" 
        alt="Not Found" 
        style={{ maxWidth: '100%', height: 'auto', height:'350px', width:'350px' }} 
      />
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFound;
