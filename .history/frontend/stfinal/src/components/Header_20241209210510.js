import React from "react";
import { Link } from "react-router-dom";
import st_logo from "./st_logo.png"; 
import "./Home/style.css"; 

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={st_logo} alt="Stranger Things Logo" />
      </div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/experience">Experience</Link></li>
      </ul>
    </header>
  );
};

export default Header;
