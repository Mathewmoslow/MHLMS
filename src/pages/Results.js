// src/pages/Results.js
import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { CheckCircle, XCircle, RotateCcw, Home } from 'lucide-react';

function Results() {
  const { moduleId } = useParams();
  const location = useLocation();
  const { score, passed } = location.state || { score: 0, passed: false };

  return (
    <div className="container">
      <div className="results-header">
        <h1>Module {moduleId} Quiz Results</h1>
      </div>

      <div className="score-display">
        <div className={`score-circle ${passed ? 'passed' : 'failed'}`}>
          <span className="score-number">{score}%</span>
        </div>
        
        <div className={`result-message ${passed ? 'success' : 'failure'}`}>
          {passed ? (
            <>
              <h2>
                <CheckCircle size={24} />
                Congratulations!
              </h2>
              <p>You passed the quiz with a score of {score}%.</p>
              <p>You can now proceed to the next module.</p>
            </>
          ) : (
            <>
              <h2>
                <XCircle size={24} />
                Keep Learning!
              </h2>
              <p>Your score of {score}% is below the 80% required to pass.</p>
              <p>Please review the module content and retake the quiz.</p>
            </>
          )}
        </div>
      </div>

      <div className="results-actions">
        <Link to="/" className="btn primary">
          <Home size={16} />
          Return to Home
        </Link>
        {!passed && (
          <>
            <Link to={`/module/${moduleId}`} className="btn secondary">
              Review Module
            </Link>
            <Link to={`/quiz/${moduleId}`} className="btn secondary">
              <RotateCcw size={16} />
              Retake Quiz
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Results;