import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Experience from "./components/Experience/Experience"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/experience" element={<Experience />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
