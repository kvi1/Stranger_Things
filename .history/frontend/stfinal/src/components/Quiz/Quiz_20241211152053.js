import React, { useState, useEffect } from 'react';
import Header from '../Header'; 
import './styles.css'; 

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currScore, setCurrScore] = useState("First Attempt")
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const fetchQuizData = () => {
    setLoading(true);
    fetch('http://localhost:5555/quiz')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error');
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
  };

  useEffect(() => {
    fetchQuizData();
  }, []);

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    else{
      setScore(score + 0);
    }
    setSelectedAnswer('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  

  

  const handleRestart = () => {
    setCurrScore(score);
    setQuestions([]);
    setLoading(true);
    setError(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer('');
    fetchQuizData();
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
          <button onClick={handleRestart} className="restart-button">
            Restart Quiz
          </button>
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
        <p>Your Last Score: {currScore}/ {questions.length} </p>
      </div>
    </div>
  );
};

export default Quiz;
