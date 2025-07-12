// src/pages/FinalExam.js
import React, { useState, useEffect } from "react";
import { useProgress } from "../context/ProgressContext";
import * as questionsData from "../data/questions";
const questions = questionsData.questions;
import QuestionComponent from "../components/QuestionComponent";
import { Trophy, Clock, BookOpen } from "lucide-react";

function FinalExam() {
  const {
    completedModules,
    finalExamTaken,
    finalExamScore,
    setFinalExamScore,
  } = useProgress();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [examStarted, setExamStarted] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120 * 60); // 120 minutes in seconds
  const [examQuestions, setExamQuestions] = useState([]);

  // Create final exam questions (mix of questions from all modules)
  useEffect(() => {
    const finalExamQuestions = [];

    // Take 5 questions from each completed module
    completedModules.forEach((moduleId) => {
      const moduleQuestions = questions.filter((q) => q.moduleId === moduleId);
      const shuffled = [...moduleQuestions].sort(() => 0.5 - Math.random());
      finalExamQuestions.push(...shuffled.slice(0, 5));
    });

    // Shuffle all questions
    const shuffledFinalQuestions = finalExamQuestions.sort(
      () => 0.5 - Math.random()
    );
    setExamQuestions(shuffledFinalQuestions.slice(0, 50)); // Limit to 50 questions
  }, [completedModules]);

  // Timer countdown
  useEffect(() => {
    let timer;
    if (examStarted && !examCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [examStarted, examCompleted, timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitExam = () => {
    const score = calculateScore();
    setFinalExamScore(score);
    setExamCompleted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    examQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / examQuestions.length) * 100);
  };

  const getAnsweredCount = () => {
    return Object.keys(selectedAnswers).length;
  };

  if (completedModules.length === 0) {
    return (
      <div className="final-exam-page">
        <div className="exam-header">
          <h1>
            <BookOpen className="icon" /> Final Exam
          </h1>
          <div className="exam-requirement">
            <p>You must complete all modules before taking the final exam.</p>
            <button
              className="btn btn-primary"
              onClick={() => (window.location.href = "/")}
            >
              Go to Modules
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (finalExamTaken) {
    return (
      <div className="final-exam-page">
        <div className="exam-header">
          <h1>
            <Trophy className="icon" /> Final Exam Results
          </h1>
        </div>

        <div className="exam-results">
          <div className="score-display">
            <h2>Your Score: {finalExamScore}%</h2>
            <div
              className={`score-badge ${
                finalExamScore >= 80 ? "pass" : "fail"
              }`}
            >
              {finalExamScore >= 80 ? "🎉 PASSED" : "❌ FAILED"}
            </div>
          </div>

          <div className="results-info">
            <p>
              {finalExamScore >= 80
                ? "Congratulations! You have successfully completed the Mental Health LMS course."
                : "You need a score of 80% or higher to pass. Please review the modules and retake the exam."}
            </p>
          </div>

          <div className="exam-actions">
            <button
              className="btn btn-primary"
              onClick={() => (window.location.href = "/progress")}
            >
              View Progress
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => (window.location.href = "/")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!examStarted) {
    return (
      <div className="final-exam-page">
        <div className="exam-header">
          <h1>
            <Trophy className="icon" /> Final Exam
          </h1>
        </div>

        <div className="exam-instructions">
          <h2>Exam Instructions</h2>
          <ul>
            <li>The final exam contains {examQuestions.length} questions</li>
            <li>You have 2 hours (120 minutes) to complete the exam</li>
            <li>You need a score of 80% or higher to pass</li>
            <li>Questions are drawn from all completed modules</li>
            <li>You can navigate between questions during the exam</li>
            <li>Make sure you have a stable internet connection</li>
          </ul>

          <div className="exam-stats">
            <p>
              <strong>Modules Completed:</strong> {completedModules.length}
            </p>
            <p>
              <strong>Total Questions:</strong> {examQuestions.length}
            </p>
            <p>
              <strong>Time Limit:</strong> 2 hours
            </p>
            <p>
              <strong>Passing Score:</strong> 80%
            </p>
          </div>

          <button
            className="btn btn-success btn-large"
            onClick={() => setExamStarted(true)}
            disabled={examQuestions.length === 0}
          >
            Start Final Exam
          </button>
        </div>
      </div>
    );
  }

  if (examQuestions.length === 0) {
    return (
      <div className="final-exam-page">
        <div className="exam-header">
          <h1>Loading Exam...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="final-exam-page">
      <div className="exam-header">
        <h1>
          <Trophy className="icon" /> Final Exam
        </h1>
        <div className="exam-progress">
          <span>
            Question {currentQuestion + 1} of {examQuestions.length}
          </span>
          <div className="timer">
            <Clock className="icon" />
            <span className={timeLeft < 600 ? "time-warning" : ""}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
      </div>

      <div className="exam-content">
        <div className="question-container">
          <QuestionComponent
            question={examQuestions[currentQuestion]}
            selectedAnswer={selectedAnswers[currentQuestion]}
            onAnswerSelect={handleAnswerSelect}
            showCorrectAnswer={false}
            questionNumber={currentQuestion + 1}
          />
        </div>

        <div className="exam-navigation">
          <button
            className="btn btn-secondary"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          <div className="exam-status">
            <span>
              Answered: {getAnsweredCount()} of {examQuestions.length}
            </span>
          </div>

          {currentQuestion < examQuestions.length - 1 ? (
            <button className="btn btn-primary" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={handleSubmitExam}
              disabled={getAnsweredCount() < examQuestions.length}
            >
              Submit Exam
            </button>
          )}
        </div>
      </div>

      <div className="question-grid">
        <h3>Question Navigation</h3>
        <div className="question-numbers">
          {examQuestions.map((_, index) => (
            <button
              key={index}
              className={`question-number ${
                index === currentQuestion ? "current" : ""
              } ${selectedAnswers[index] ? "answered" : "unanswered"}`}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FinalExam;
