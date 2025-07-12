// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ModulePage from './pages/ModulePage';
import QuizPage from './pages/QuizPage';
import Results from './pages/Results';
import Progress from './pages/Progress';
import FinalExam from './pages/FinalExam';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <ProgressProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/module/:id" element={<ModulePage />} />
              <Route path="/quiz/:moduleId" element={<QuizPage />} />
              <Route path="/results/:moduleId" element={<Results />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/final-exam" element={<FinalExam />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ProgressProvider>
  );
}

export default App;