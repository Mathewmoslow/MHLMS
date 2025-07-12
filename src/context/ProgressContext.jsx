// src/context/ProgressContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const ProgressContext = createContext();

const initialState = {
  completedModules: [],
  quizScores: {},
  currentModule: 1,
  finalExamTaken: false,
  finalExamScore: 0
};

function progressReducer(state, action) {
  switch (action.type) {
    case 'LOAD_PROGRESS':
      return { ...state, ...action.payload };
    case 'COMPLETE_MODULE':
      const newCompletedModules = [...state.completedModules];
      if (!newCompletedModules.includes(action.moduleId)) {
        newCompletedModules.push(action.moduleId);
      }
      return {
        ...state,
        completedModules: newCompletedModules,
        currentModule: Math.max(state.currentModule, action.moduleId + 1)
      };
    case 'SET_QUIZ_SCORE':
      return {
        ...state,
        quizScores: {
          ...state.quizScores,
          [action.moduleId]: action.score
        }
      };
    case 'SET_FINAL_EXAM':
      return {
        ...state,
        finalExamTaken: true,
        finalExamScore: action.score
      };
    case 'RESET_PROGRESS':
      return initialState;
    default:
      return state;
  }
}

export function ProgressProvider({ children }) {
  const [state, dispatch] = useReducer(progressReducer, initialState);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('mental-health-lms-progress');
    if (savedProgress) {
      try {
        const parsedProgress = JSON.parse(savedProgress);
        dispatch({ type: 'LOAD_PROGRESS', payload: parsedProgress });
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('mental-health-lms-progress', JSON.stringify(state));
  }, [state]);

  const completeModule = (moduleId, score) => {
    dispatch({ type: 'SET_QUIZ_SCORE', moduleId, score });
    if (score >= 80) {
      dispatch({ type: 'COMPLETE_MODULE', moduleId });
    }
  };

  const setFinalExamScore = (score) => {
    dispatch({ type: 'SET_FINAL_EXAM', score });
  };

  const resetProgress = () => {
    dispatch({ type: 'RESET_PROGRESS' });
  };

  const value = {
    ...state,
    completeModule,
    setFinalExamScore,
    resetProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}