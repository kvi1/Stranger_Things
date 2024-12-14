import React from "react";
import Header from "../Header";
import './styles.css'



const Quiz = () => {
  return (
    <div
      className="quiz"
      style={{
        backgroundImage: `url(${require('./bd.png')})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
    </div>
  );
};

