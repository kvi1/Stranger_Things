import React from "react";
import { Link } from "react-router-dom";
import st_logo from "./st_logo.png"; 
import "./Home/style.css"; 

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={st_logo} />
      </div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
      </ul>
    </header>
  );
};

export default Header;
