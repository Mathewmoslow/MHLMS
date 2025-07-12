// src/pages/ModulePage.js
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import * as modulesData from '../data/modules';
const modules = modulesData.modules;
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';

function ModulePage() {
  const { id } = useParams();
  const moduleId = parseInt(id);
  const { currentModule } = useProgress();
  
  const module = modules.find(m => m.id === moduleId);
  
  if (!module) {
    return <Navigate to="/" replace />;
  }
  
  if (moduleId > currentModule) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container">
      <div className="module-header">
        <Link to="/" className="breadcrumb">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <h1>Module {module.id}: {module.title}</h1>
      </div>

      <div className="module-content">
        <div className="learning-objectives">
          <h3>Learning Objectives</h3>
          <ul>
            {module.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>

        <div 
          className="content-area"
          dangerouslySetInnerHTML={{ __html: module.content }}
        />

        <div className="module-navigation">
          {moduleId > 1 && (
            <Link 
              to={`/module/${moduleId - 1}`} 
              className="btn secondary"
            >
              <ArrowLeft size={16} />
              Previous Module
            </Link>
          )}
          
          <Link 
            to={`/quiz/${moduleId}`} 
            className="btn primary"
          >
            <FileText size={16} />
            Take Quiz
          </Link>
          
          {moduleId < modules.length && (
            <Link 
              to={`/module/${moduleId + 1}`} 
              className="btn secondary"
            >
              Next Module
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModulePage;