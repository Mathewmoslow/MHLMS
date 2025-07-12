// src/components/QuestionComponent.js
import React from 'react';

function QuestionComponent({ question, questionIndex, answer, onAnswerChange }) {
  const handleMultipleChoice = (optionIndex) => {
    onAnswerChange(questionIndex, optionIndex);
  };

  const handleSATA = (optionIndex) => {
    const currentAnswers = answer || [];
    const newAnswers = currentAnswers.includes(optionIndex)
      ? currentAnswers.filter(a => a !== optionIndex)
      : [...currentAnswers, optionIndex];
    onAnswerChange(questionIndex, newAnswers);
  };

  const handleBowtie = (type, optionIndex) => {
    const currentAnswer = answer || { interventions: [], monitoring: [] };
    const currentList = currentAnswer[type] || [];
    
    let newList;
    if (currentList.includes(optionIndex)) {
      newList = currentList.filter(i => i !== optionIndex);
    } else if (currentList.length < 2) {
      newList = [...currentList, optionIndex];
    } else {
      return; // Don't allow more than 2 selections
    }
    
    onAnswerChange(questionIndex, {
      ...currentAnswer,
      [type]: newList
    });
  };

  const handleMatching = (techniqueIndex, exampleIndex) => {
    const currentMatches = answer || {};
    onAnswerChange(questionIndex, {
      ...currentMatches,
      [techniqueIndex]: exampleIndex
    });
  };

  return (
    <div className="question">
      <h3>Question {questionIndex + 1}</h3>
      <p className="question-text">{question.question}</p>
      
      {question.type === 'multiple-choice' && (
        <div className="options">
          {question.options.map((option, optIndex) => (
            <label key={optIndex} className="option">
              <input
                type="radio"
                name={`question-${questionIndex}`}
                checked={answer === optIndex}
                onChange={() => handleMultipleChoice(optIndex)}
              />
              <span className="option-text">{option}</span>
            </label>
          ))}
        </div>
      )}

      {question.type === 'sata' && (
        <div className="options sata">
          <p className="sata-instruction">Select all that apply:</p>
          {question.options.map((option, optIndex) => (
            <label key={optIndex} className="option">
              <input
                type="checkbox"
                checked={(answer || []).includes(optIndex)}
                onChange={() => handleSATA(optIndex)}
              />
              <span className="option-text">{option}</span>
            </label>
          ))}
        </div>
      )}

      {question.type === 'matching' && (
        <div className="matching-container">
          <div className="matching-instructions">
            <p>Match each technique on the left with its correct example on the right:</p>
          </div>
          <div className="matching-pairs">
            {question.pairs.map((pair, pairIndex) => (
              <div key={pairIndex} className="matching-pair">
                <div className="technique-side">
                  <strong>{pair.technique}</strong>
                </div>
                <div className="arrow">→</div>
                <div className="example-side">
                  <select 
                    value={answer?.[pairIndex] ?? ''} 
                    onChange={(e) => handleMatching(pairIndex, parseInt(e.target.value))}
                    className="matching-select"
                  >
                    <option value="">Select an example...</option>
                    {question.pairs.map((examplePair, exampleIndex) => (
                      <option key={exampleIndex} value={exampleIndex}>
                        {examplePair.example}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {question.type === 'bowtie' && (
        <div className="bowtie-container">
          <div className="bowtie-section">
            <h4>Condition:</h4>
            <div className="condition-box">{question.condition}</div>
          </div>
          
          <div className="bowtie-interventions">
            <div className="intervention-section">
              <h4>Interventions (Select 2):</h4>
              {question.interventions.map((intervention, intIndex) => (
                <label key={intIndex} className="option">
                  <input
                    type="checkbox"
                    checked={(answer?.interventions || []).includes(intIndex)}
                    onChange={() => handleBowtie('interventions', intIndex)}
                    disabled={(answer?.interventions || []).length >= 2 && 
                              !(answer?.interventions || []).includes(intIndex)}
                  />
                  <span className="option-text">{intervention}</span>
                </label>
              ))}
            </div>
            
            <div className="monitoring-section">
              <h4>Things to Monitor (Select 2):</h4>
              {question.monitoring.map((monitor, monIndex) => (
                <label key={monIndex} className="option">
                  <input
                    type="checkbox"
                    checked={(answer?.monitoring || []).includes(monIndex)}
                    onChange={() => handleBowtie('monitoring', monIndex)}
                    disabled={(answer?.monitoring || []).length >= 2 && 
                              !(answer?.monitoring || []).includes(monIndex)}
                  />
                  <span className="option-text">{monitor}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionComponent;