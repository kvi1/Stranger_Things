import React from "react";
import img1 from './img1.png';
import img2 from './img2.png';
import './style.css'
import img1t from "./img1t.png"; // Import your images
import img2t from "./img2t.png";
import img3t from "./img3t.png";
import img4t from "./img4t.png";

const Thumbnail = ({ slides, activeIndex, setActiveIndex }) => {
  return (
    <div className="thumbnail">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`item ${index === activeIndex ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
        >
          <img src={`img${index + 1}t.png`} alt={slide.title} />
          <div className="content">{slide.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Thumbnail;
