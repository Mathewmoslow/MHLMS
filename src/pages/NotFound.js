// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn primary">Return Home</Link>
    </div>
  );
}

export default NotFound;
