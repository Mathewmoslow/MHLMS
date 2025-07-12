// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';

function Navbar() {
  const { completedModules } = useProgress();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-brand">
          <h1>Mental Health LMS</h1>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/progress" className="nav-link">Progress</Link>
          <span className="nav-progress">
            {completedModules.length}/14 Modules
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
