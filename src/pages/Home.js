// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import * as modulesData from '../data/modules';
const modules = modulesData.modules;
import { CheckCircle, Lock, BookOpen, Award } from 'lucide-react';

function Home() {
  const { completedModules, currentModule, quizScores, finalExamTaken, finalExamScore } = useProgress();
  const [clickCount, setClickCount] = React.useState(0);

  const progressPercentage = modules.length > 0 
    ? Math.round((completedModules.length / modules.length) * 100) 
    : 0;

  // 🔓 HIDDEN UNLOCK FUNCTION FOR TESTING
  const unlockAllModules = () => {
    const testProgress = {
      completedModules: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      quizScores: {
        1: 95, 2: 90, 3: 88, 4: 92, 5: 87, 6: 94, 7: 89, 8: 91, 
        9: 93, 10: 86, 11: 90, 12: 88, 13: 92, 14: 95
      },
      currentModule: 15,
      finalExamTaken: false,
      finalExamScore: 0
    };
    
    localStorage.setItem('mental-health-lms-progress', JSON.stringify(testProgress));
    console.log('🔓 All modules unlocked for testing!');
    window.location.reload();
  };

  // Handle version number clicks with state
  const handleVersionClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    console.log(`Click ${newCount}/5`); // Debug logging
    
    if (newCount >= 5) {
      setClickCount(0); // Reset counter
      if (window.confirm('🔓 Unlock all modules for testing?')) {
        unlockAllModules();
      }
    }
    
    // Reset counter after 3 seconds of no clicks
    setTimeout(() => {
      setClickCount(0);
    }, 3000);
  };

  return (
    <div className="container">
      <header className="page-header">
        <h1>Mental Health Nursing Modules</h1>
        <p>Complete each module and pass the quiz with 80% or higher to proceed to the next module.</p>
      </header>
      
      <div className="progress-overview">
        <h3>Your Progress</h3>
        <p>Completed Modules: {completedModules.length}/{modules.length}</p>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <span className="progress-text">{progressPercentage}% Complete</span>
        
        {/* 🔓 SUBTLE VERSION NUMBER UNLOCK */}
        <div style={{ marginTop: '10px', textAlign: 'right' }}>
          <small 
            style={{ 
              color: '#999', 
              fontSize: '10px', 
              cursor: 'pointer',
              userSelect: 'none'
            }}
            onClick={handleVersionClick}
            title="Click 5 times to unlock (dev mode)"
          >
            v1.0.0 {clickCount > 0 && `(${clickCount}/5)`}
          </small>
        </div>
      </div>

      <div className="modules-grid">
        {modules.map((module) => {
          const isCompleted = completedModules.includes(module.id);
          const isAvailable = module.id <= currentModule;
          const isLocked = module.id > currentModule;
          const score = quizScores[module.id];

          return (
            <div 
              key={module.id}
              className={`module-card ${isCompleted ? 'completed' : ''} ${isAvailable ? 'available' : 'locked'}`}
            >
              <div className="module-header">
                <h3>Module {module.id}: {module.title}</h3>
                <div className="module-status">
                  {isCompleted && (
                    <span className="status completed">
                      <CheckCircle size={16} />
                      Completed
                    </span>
                  )}
                  {isLocked && (
                    <span className="status locked">
                      <Lock size={16} />
                      Locked
                    </span>
                  )}
                  {isAvailable && !isCompleted && (
                    <span className="status available">
                      <BookOpen size={16} />
                      Available
                    </span>
                  )}
                </div>
              </div>
              
              <p className="module-description">{module.description}</p>
              
              {isAvailable && (
                <div className="module-actions">
                  <Link 
                    to={`/module/${module.id}`} 
                    className="btn primary"
                  >
                    Study Module
                  </Link>
                  {score && (
                    <span className="quiz-score">
                      Quiz Score: {score}%
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {completedModules.length === modules.length && !finalExamTaken && (
        <div className="final-exam-card">
          <h2>
            <Award size={24} />
            Ready for Final Exam!
          </h2>
          <p>You have completed all modules. Take the comprehensive final exam to complete the course.</p>
          <Link to="/final-exam" className="btn primary large">
            Take Final Exam
          </Link>
        </div>
      )}

      {finalExamTaken && (
        <div className="completion-card">
          <h2>
            <Award size={24} />
            Course Complete!
          </h2>
          <p>Final Exam Score: {finalExamScore}%</p>
          {finalExamScore >= 75 ? (
            <p className="success">
              Congratulations! You have successfully completed the Mental Health Nursing course.
            </p>
          ) : (
            <p className="warning">
              You may want to review the material and retake the final exam.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;