// src/pages/Progress.js
import React from 'react';
import { useProgress } from '../context/ProgressContext';
import * as modulesData from '../data/modules';
const modules = modulesData.modules;
import { CheckCircle, Circle, Trophy, BookOpen } from 'lucide-react';

function Progress() {
  const { completedModules, quizScores, finalExamTaken, finalExamScore } = useProgress();

  const calculateOverallProgress = () => {
    return Math.round((completedModules.length / modules.length) * 100);
  };

  const getModuleStatus = (moduleId) => {
    if (completedModules.includes(moduleId)) {
      return 'completed';
    }
    return 'not-started';
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="progress-page">
      <div className="progress-header">
        <h1><Trophy className="icon" /> Learning Progress</h1>
        <p>Track your journey through the Mental Health LMS</p>
      </div>

      <div className="progress-overview">
        <div className="progress-card">
          <h2>Overall Progress</h2>
          <div className="progress-circle">
            <span className="progress-percentage">{calculateOverallProgress()}%</span>
          </div>
          <p>{completedModules.length} of {modules.length} modules completed</p>
        </div>

        <div className="progress-card">
          <h2>Average Score</h2>
          <div className="score-display">
            {Object.keys(quizScores).length > 0 ? (
              <span className="average-score">
                {Math.round(Object.values(quizScores).reduce((a, b) => a + b, 0) / Object.values(quizScores).length)}%
              </span>
            ) : (
              <span className="no-scores">No scores yet</span>
            )}
          </div>
        </div>

        <div className="progress-card">
          <h2>Final Exam</h2>
          <div className="exam-status">
            {finalExamTaken ? (
              <div>
                <CheckCircle className="icon text-green-600" />
                <span className={getScoreColor(finalExamScore)}>
                  Score: {finalExamScore}%
                </span>
              </div>
            ) : (
              <div>
                <Circle className="icon text-gray-400" />
                <span>Not taken</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="modules-progress">
        <h2><BookOpen className="icon" /> Module Progress</h2>
        <div className="modules-grid">
          {modules.map((module) => {
            const status = getModuleStatus(module.id);
            const score = quizScores[module.id];
            
            return (
              <div key={module.id} className={`module-progress-card ${status}`}>
                <div className="module-header">
                  <div className="module-status-icon">
                    {status === 'completed' ? (
                      <CheckCircle className="icon text-green-600" />
                    ) : (
                      <Circle className="icon text-gray-400" />
                    )}
                  </div>
                  <h3>Module {module.id}</h3>
                </div>
                
                <h4>{module.title}</h4>
                
                <div className="module-score">
                  {score !== undefined ? (
                    <span className={`score ${getScoreColor(score)}`}>
                      Score: {score}%
                    </span>
                  ) : (
                    <span className="no-score">Not attempted</span>
                  )}
                </div>
                
                <div className="module-status-text">
                  {status === 'completed' ? (
                    <span className="completed-text">✅ Completed</span>
                  ) : (
                    <span className="pending-text">⏳ Not started</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="progress-actions">
        <button 
          className="btn btn-primary"
          onClick={() => window.location.href = '/'}
        >
          Continue Learning
        </button>
        
        {completedModules.length === modules.length && !finalExamTaken && (
          <button 
            className="btn btn-success"
            onClick={() => window.location.href = '/final-exam'}
          >
            Take Final Exam
          </button>
        )}
      </div>
    </div>
  );
}

export default Progress;