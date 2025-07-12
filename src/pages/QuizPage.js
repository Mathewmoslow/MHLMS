// src/pages/QuizPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import * as questionsData from '../data/questions';
const questions = questionsData.questions;
import QuestionComponent from '../components/QuestionComponent';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

function QuizPage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { currentModule, completeModule } = useProgress();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const moduleQuestions = questions.filter(q => q.moduleId === parseInt(moduleId));
  
  if (parseInt(moduleId) > currentModule) {
    return <Navigate to="/" replace />;
  }

  if (moduleQuestions.length === 0) {
    return <Navigate to="/" replace />;
  }

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    let totalQuestions = moduleQuestions.length;

    moduleQuestions.forEach((question, index) => {
      const userAnswer = answers[index];
      
      if (question.type === 'multiple-choice') {
        if (userAnswer === question.correctAnswer) {
          totalScore += 1;
        }
      } else if (question.type === 'sata') {
        const correctAnswers = question.correctAnswers;
        const userAnswers = userAnswer || [];
        let partialScore = 0;
        
        // Partial credit scoring for SATA
        correctAnswers.forEach(correct => {
          if (userAnswers.includes(correct)) partialScore += 0.5;
        });
        
        userAnswers.forEach(selected => {
          if (!correctAnswers.includes(selected)) partialScore -= 0.25;
        });
        
        totalScore += Math.max(0, partialScore);
      } else if (question.type === 'priority') {
        const userOrder = userAnswer || [];
        const correctOrder = question.correctOrder;
        let orderScore = 0;
        
        userOrder.forEach((item, index) => {
          if (item === correctOrder[index]) orderScore += 0.25;
        });
        
        totalScore += orderScore;
      } else if (question.type === 'bowtie') {
        const userInterventions = userAnswer?.interventions || [];
        const userMonitoring = userAnswer?.monitoring || [];
        let bowtieScore = 0;
        
        if (userInterventions.length === 2 && 
            userInterventions.every(i => question.correctInterventions.includes(i))) {
          bowtieScore += 0.5;
        }
        
        if (userMonitoring.length === 2 && 
            userMonitoring.every(i => question.correctMonitoring.includes(i))) {
          bowtieScore += 0.5;
        }
        
        totalScore += bowtieScore;
      }
    });

    return Math.round((totalScore / totalQuestions) * 100);
  };

  const handleSubmit = () => {
    const score = calculateScore();
    completeModule(parseInt(moduleId), score);
    navigate(`/results/${moduleId}`, { state: { score, passed: score >= 80 } });
  };

  const canProceed = () => {
    if (currentQuestion === moduleQuestions.length - 1) {
      // Check if all questions are answered
      return moduleQuestions.every((_, index) => answers[index] !== undefined);
    }
    return answers[currentQuestion] !== undefined;
  };

  return (
    <div className="container">
      <div className="quiz-header">
        <h1>Module {moduleId} Quiz</h1>
        <p>You need 80% or higher to pass and unlock the next module.</p>
        <div className="quiz-progress">
          <span>{currentQuestion + 1} of {moduleQuestions.length}</span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestion + 1) / moduleQuestions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="question-container">
        <QuestionComponent
          question={moduleQuestions[currentQuestion]}
          questionIndex={currentQuestion}
          answer={answers[currentQuestion]}
          onAnswerChange={handleAnswerChange}
        />
      </div>

      <div className="quiz-navigation">
        <button
          onClick={() => setCurrentQuestion(prev => prev - 1)}
          disabled={currentQuestion === 0}
          className="btn secondary"
        >
          <ArrowLeft size={16} />
          Previous
        </button>

        {currentQuestion === moduleQuestions.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={!canProceed()}
            className="btn primary"
          >
            <CheckCircle size={16} />
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={() => setCurrentQuestion(prev => prev + 1)}
            disabled={!canProceed()}
            className="btn primary"
          >
            Next
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
