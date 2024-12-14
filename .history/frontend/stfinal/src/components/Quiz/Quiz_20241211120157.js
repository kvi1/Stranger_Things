import React, { useState, useEffect } from 'react';
import Header from './Header'; // Adjust the import path as needed
import './style.css'; // Ensure your styles are correctly linked

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/quiz') // Replace with your actual API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (loading) return <div className="quiz"><div className="bd"></div><Header /><p>Loading...</p></div>;
  if (error) return <div className="quiz"><div className="bd"></div><Header /><p>Error: {error}</p></div>;
  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="quiz">
        <div className="bd"></div>
        <Header />
        <div className="results">
          <h1>Your Score</h1>
          <p>{score} / {questions.length}</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz">
      <div className="bd"></div>
      <Header />
      <div className="quiz-content">
        <h1>{currentQuestion.question}</h1>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(option)}
              className={`option ${selectedAnswer === option ? 'selected' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
        <button onClick={handleNext} disabled={!selectedAnswer} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
