import React from "react";
import { Link } from "react-router-dom";
import "./Home/style.css";
import React from "react";
import st_logo from "./Home/st_logo.png"; 
import "./style.css";



const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="st_logo.png" alt="Stranger Things Logo" />
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
